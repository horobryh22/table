import React, {useEffect, useState} from 'react';
import {Loader, Pagination, Table} from './components';
import {itemsAPI, ItemType} from './api';
import {FieldTypes} from './types';
import {usePagination} from './hooks';


function App() {

    const [sort, setSort] = useState<'asc' | 'desc'>('asc');
    const [sortField, setSortField] = useState<FieldTypes>('');
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState<ItemType[]>([]);

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

    useEffect(() => {
        setIsLoading(true)
        itemsAPI.getItems().then(res => {
            setItems(res.data);
            setIsLoading(false);
        })
    }, []);

    console.log( page, firstContentIndex, lastContentIndex);

    const onSort = (field: FieldTypes) => {
        const itemsClone = [...items];

        if (field === 'id') {
            itemsClone.sort((a, b) => {
                return sort === 'asc' ? a.id - b.id : b.id - a.id;
            });
            setSort(sort === 'asc' ? 'desc' : 'asc');
        }

        if (field === 'firstName') {
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

    if (isLoading) return <Loader/>;

    return (
        <div className="container">
            <Table
                items={items.slice(firstContentIndex, lastContentIndex)}
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
