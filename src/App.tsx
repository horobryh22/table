import React, {useEffect, useState} from 'react';
import {Loader, Table} from './components';
import {itemsAPI, ItemType} from './api';


function App() {

    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState<ItemType[]>([]);

    useEffect(() => {
        setIsLoading(true)
        itemsAPI.getItems().then(res => {
            setItems(res.data);
            setIsLoading(false);
        })
    }, []);

    if (isLoading) return <Loader/>;

    return (
        <div className="container">
            <Table items={items}/>
        </div>
    );
}

export default App;
