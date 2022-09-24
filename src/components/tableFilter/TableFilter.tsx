import React, {useState} from 'react';
import {SearchInput} from './searchInput/SearchInput';
import {Select} from './select/Select';
import {FilterParamsType} from '../../types';
import './TableFilter.css';

const COLUMNS = ['Name', 'Count', 'Distance'];
const CONDITIONS = ['Equal', 'Contain', 'More', 'Less'];

export type TableFilterType = {
    filterParams: FilterParamsType
    setFilterParams: (data: FilterParamsType) => void;
}

export const TableFilter = ({filterParams, setFilterParams}: TableFilterType) => {

    const {selectedColumn, selectedCondition, searchValue} = filterParams;

    const [columnValue, setColumnValue] = useState(selectedColumn);
    const [conditionValue, setConditionValue] = useState(selectedCondition);

    return (
        <div className="filter-container">
            <Select
                items={COLUMNS}
                initialValue={columnValue}
                setValue={setColumnValue}
                disabled={false}
            />
            <Select
                items={CONDITIONS}
                initialValue={conditionValue}
                setValue={setConditionValue}
                disabled={columnValue === 'name'}
            />
            <SearchInput
                setFilterParams={setFilterParams}
                value={searchValue}
                columnValue={columnValue}
                conditionValue={conditionValue}
            />
        </div>
    );
};