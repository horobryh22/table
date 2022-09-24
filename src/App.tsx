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
        contentPerPage: 10,
        count: filteredData.length,
    });

    const selectedData = filteredData.slice(firstContentIndex, lastContentIndex);

    useEffect(() => {
        setIsLoading(true)
        itemsAPI.getItems().then(res => {
            const filteredData = res.data.sort((a, b) => {
                return b.count - a.count;
            });
            setItems(filteredData);
            setIsLoading(false);
        })
    }, []);

    const onSort = (field: FieldTypes) => {
        const itemsClone = [...items];

        if (field === 'count') {
            itemsClone.sort((a, b) => {
                return sort === 'asc' ? a.count - b.count : b.count - a.count;
            });
            setSort(sort === 'asc' ? 'desc' : 'asc');
        }

        if (field === 'distance') {
            itemsClone.sort((a, b) => {
                return sort === 'asc' ? a.distance - b.distance : b.distance - a.distance;
            });
            setSort(sort === 'asc' ? 'desc' : 'asc');
        }

        if (field === 'name') {
            itemsClone.sort((a, b) => {
                if (sort === 'asc') {
                    return (a.name > b.name) ? 1 : -1;
                }

                return (a.name < b.name) ? 1 : -1;
            });
            setSort(sort === 'asc' ? 'desc' : 'asc');
        }

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
                totalPages={totalPages}
                currentPage={page}
                setPage={setPage}
                nextPage={nextPage}
                prevPage={prevPage}
            />
        </div>
    );
}

export default App;
