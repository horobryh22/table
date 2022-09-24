import React from 'react';
import {HeadRow} from './headRow/HeadRow';
import {TableBody} from './tableBody/TableBody';
import {TableType} from './types';
import {NoResults} from '../noResults/NoResults';


export const Table = ({items, onSort, sort, sortField}: TableType) => {

    return (
        <>
            <table className="table">
                <HeadRow onSort={onSort} sortField={sortField} sort={sort}/>
                <TableBody items={items}/>
            </table>
            {!items.length && <NoResults/>}
        </>
    );
};