import React, {useState} from 'react';
import {SearchInput} from './search/SearchInput';
import {Select} from './select/Select';
import {FilterParamsType} from '../../types';

const COLUMNS = ['Name', 'Count', 'Distance'];
const CONDITIONS = ['Equal', 'Contain', 'More', 'Less'];

export type TableFilterType = {
    filterParams: FilterParamsType
}

export const TableFilter = ({filterParams}: TableFilterType) => {

    const {selectedColumn, selectedCondition, searchValue} = filterParams;

    const [columnValue, setColumnValue] = useState(selectedColumn);
    const [conditionValue, setConditionValue] = useState(selectedCondition);

    return (
        <>
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
                value={searchValue}
            />
        </>
    );
};