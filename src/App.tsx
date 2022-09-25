import React, {useEffect, useState} from 'react';
import {Loader, Pagination, Table, TableFilter} from './components';
import {itemsAPI, ItemType} from './api';
import {FieldTypes, FilterParamsType} from './types';
import {usePagination} from './hooks';
import {getFilteredData} from './utils';


function App() {

    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState<ItemType[]>([]);

    const [sort, setSort] = useState<'asc' | 'desc'>('asc');
    const [sortField, setSortField] = useState<FieldTypes>('count');
    const [filterParams, setFilterParams] = useState<FilterParamsType>({
        selectedColumn: 'name',
        selectedCondition: 'contain',
        searchValue: '',
    });

    const [contentPerPage, setContentPerPage] = useState('10');

    const filteredData = getFilteredData(filterParams, items);

    const {
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        page,
        setPage,
        totalPages,
    } = usePagination({
        contentPerPage: Number(contentPerPage),
        count: filteredData.length,
    });

    const selectedData = filteredData.slice(firstContentIndex, lastContentIndex);

    useEffect(() => {

        (async () => {
            try {
                setIsLoading(true);
                const {data} = await itemsAPI.getItems();
                setItems(data);
                setIsLoading(false);
            } catch (e) {
                console.log(e);
                setIsLoading(false);
            }

        })();

    }, []);

    useEffect(() => {
        if (!selectedData.length) {
            setSortField('' as FieldTypes);
        }
    }, [selectedData.length])

    const onSort = (field: FieldTypes) => {
        const itemsClone = [...items];

        if (field === 'name') {
            itemsClone.sort((a, b) => {
                if (sort === 'asc') {
                    return (a.name > b.name) ? 1 : -1;
                }

                return (a.name < b.name) ? 1 : -1;
            });
            setSort(sort === 'asc' ? 'desc' : 'asc');
            setItems(itemsClone);
            setSortField(field);

            return;
        }

        itemsClone.sort((a, b) => {
            return sort === 'asc' ? a[field] - b[field] : b[field] - a[field];
        });

        setSort(sort === 'asc' ? 'desc' : 'asc');
        setItems(itemsClone);
        setSortField(field);
    }

    if (isLoading) return <Loader/>;

    return (
        <div className="container">
            <TableFilter
                filterParams={filterParams}
                setFilterParams={setFilterParams}
            />
            <Table
                items={selectedData}
                onSort={onSort}
                sort={sort}
                sortField={sortField}
            />
            <Pagination
                totalPages={totalPages || 1}
                currentPage={page}
                setPage={setPage}
                nextPage={nextPage}
                prevPage={prevPage}
                contentPerPage={contentPerPage}
                setContentPerPage={setContentPerPage}
            />
        </div>
    );
}

export default App;
