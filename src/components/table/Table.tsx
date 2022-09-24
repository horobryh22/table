import React from 'react';
import {HeadRow} from './headRow/HeadRow';
import {TableBody} from './tableBody/TableBody';
import {TableType} from './types';


export const Table = ({items}: TableType) => {
    return (
        <table className="table">
            <HeadRow/>
            <TableBody items={items}/>
        </table>
    );
};