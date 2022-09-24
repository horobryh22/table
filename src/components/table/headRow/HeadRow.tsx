import React from 'react';
import {HeadRowType} from './types';
import {Arrow} from '../../arrow/Arrow';
import {FieldTypes} from '../../../types';

const FULL_COLUMNS = ['Date', 'Name', 'Count', 'Distance'];

export const HeadRow = ({onSort, sort, sortField}: HeadRowType) => {

    const mappedColumns = FULL_COLUMNS.map(column => {
        if (column === 'Date') {
            return (
                <th key={column} style={{width: 200}}>
                    {column}
                </th>
            )
        }

        return (
            <th
                key={column}
                onClick={() => onSort(column.toLowerCase() as FieldTypes)}
                style={{width: 200}}
            >
                <>
                    {column}
                    {sortField === column.toLowerCase() && <Arrow sort={sort}/>}
                </>
            </th>
        )
    })

    return (
        <thead>
            <tr>
                {mappedColumns}
            </tr>
        </thead>
    );
};