import React, {useState} from 'react';
import {SearchInput} from './searchInput/SearchInput';
import {Select} from './select/Select';
import './TableFilter.css';
import {FILTER_SELECT_STYLES} from './styles';
import {TableFilterType} from './types';

const COLUMNS = ['Name', 'Count', 'Distance'];
const CONDITIONS = ['Equal', 'Contain', 'More', 'Less'];

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
                style={FILTER_SELECT_STYLES}
            />
            <Select
                items={CONDITIONS}
                initialValue={conditionValue}
                setValue={setConditionValue}
                disabled={columnValue === 'name'}
                style={FILTER_SELECT_STYLES}
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