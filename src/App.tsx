import React, {useEffect, useState} from 'react';
import {Loader, Pagination, Table, TableFilter} from './components';
import {itemsAPI, ItemType} from './api';
import {FieldTypes, FilterParamsType} from './types';
import {usePagination} from './hooks';


function App() {

    const [isLoading, setIsLoading] = useState(false);

    const [items, setItems] = useState<ItemType[]>([]);

    const [sort, setSort] = useState<'asc' | 'desc'>('asc');
    const [sortField, setSortField] = useState<FieldTypes>('');

    const [filterParams, setFilterParams] = useState<FilterParamsType>({
        selectedColumn: 'name',
        selectedCondition: 'equal',
        searchValue: '',
    });

    const {
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        page,
        setPage,
        totalPages,
    } = usePagination({
        contentPerPage: 15,
        count: items.length,
    });

    const filteredData = 1;

    const selectedData = items.slice(firstContentIndex, lastContentIndex);

    useEffect(() => {
        setIsLoading(true)
        itemsAPI.getItems().then(res => {
            setItems(res.data);
            setIsLoading(false);
        })
    }, []);

    const onSort = (field: FieldTypes) => {
        const itemsClone = [...items];

        if (field === 'count') {
            itemsClone.sort((a, b) => {
                return sort === 'asc' ? a.id - b.id : b.id - a.id;
            });
            setSort(sort === 'asc' ? 'desc' : 'asc');
        }

        if (field === 'name') {
            itemsClone.sort((a, b) => {
                if (sort === 'asc') {
                    return (a.firstName > b.firstName) ? 1 : -1;
                }

                return (a.firstName < b.firstName) ? 1 : -1;
            });
            setSort(sort === 'asc' ? 'desc' : 'asc');
        }

        setItems(itemsClone);
        setSortField(field);
    }

    const getFilteredData = (searchValue: string, items: ItemType[]) => {
        if (!searchValue) {
            return items;
        }

        return items.filter(item => {

        })

    }

    if (isLoading) return <Loader/>;

    return (
        <div className="container">
            <TableFilter
                filterParams={filterParams}
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
