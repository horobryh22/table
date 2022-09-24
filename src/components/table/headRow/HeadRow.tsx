import React from 'react';
import {HeadRowType} from './types';
import {Arrow} from '../../arrow/Arrow';


export const HeadRow = ({onSort, sort, sortField}: HeadRowType) => {
    return (
        <thead>
        <tr>
            <th>Date</th>
            <th onClick={() => onSort('name')}>
                Name
                {sortField === 'name' && <Arrow sort={sort}/>}
            </th>
            <th onClick={() => onSort('count')}>
                Count
                {sortField === 'count' && <Arrow sort={sort}/>}
            </th>
            <th>Distance</th>
        </tr>
        </thead>
    );
};