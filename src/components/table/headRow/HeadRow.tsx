import React from 'react';
import {HeadRowType} from './types';
import {Arrow} from '../../arrow/Arrow';


export const HeadRow = ({onSort, sort, sortField}: HeadRowType) => {
    return (
        <thead>
        <tr>
            <th>Date</th>
            <th onClick={() => onSort('firstName')}>
                Name
                {sortField === 'firstName' && <Arrow sort={sort}/>}
            </th>
            <th onClick={() => onSort('id')}>
                Count
                {sortField === 'id' && <Arrow sort={sort}/>}
            </th>
            <th>Distance</th>
        </tr>
        </thead>
    );
};