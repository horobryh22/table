import React, {useEffect, useState} from 'react';
import {Loader, Table} from './components';
import {itemsAPI, ItemType} from './api';
import {FieldTypes} from './types';


function App() {

    const [sort, setSort] = useState<'asc' | 'desc'>('asc');
    const [sortField, setSortField] = useState<FieldTypes>('');
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState<ItemType[]>([]);

    useEffect(() => {
        setIsLoading(true)
        itemsAPI.getItems().then(res => {
            setItems(res.data);
            setIsLoading(false);
        })
    }, []);

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
                items={items}
                onSort={onSort}
                sort={sort}
                sortField={sortField}
            />
        </div>
    );
}

export default App;
