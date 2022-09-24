import React from 'react';
import {RowType} from './types';


export const Row = ({item}: RowType) => {

    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.email}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
        </tr>
    );
};