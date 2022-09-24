import React from 'react';
import {Row} from '../row/Row';
import {TableBodyType} from './types';


export const TableBody = ({items}: TableBodyType) => {

    const rows = items.map((item, i) => {
        return <Row key={i} item={item}/>
    })

    return (
        <tbody>
            {rows}
        </tbody>
    );
};