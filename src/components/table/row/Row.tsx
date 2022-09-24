import React from 'react';
import {RowType} from './types';


export const Row = ({item}: RowType) => {

    const date = new Date(item.date);

    return (
        <tr>
            <td>{date.toLocaleDateString()}</td>
            <td>{item.name}</td>
            <td>{item.count}</td>
            <td>{item.distance}</td>
        </tr>
    );
};