import React from 'react';
import {RowType} from './types';


export const Row = ({item}: RowType) => {

    return (
        <tr>
            <td>{item.email}</td>
            <td>{item.firstName}</td>
            <td>{item.id}</td>
            <td>{item.id}</td>
        </tr>
    );
};