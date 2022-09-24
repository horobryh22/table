import React, {ChangeEvent, useState} from 'react';
import {ConditionType, FieldTypes, FilterParamsType} from '../../../types';
import './SearchInput.css';

export type SearchInputType = {
    value: string;
    setFilterParams: (data: FilterParamsType) => void;
    columnValue: FieldTypes;
    conditionValue: ConditionType;
}

export const SearchInput = (
    {
        value,
        setFilterParams,
        conditionValue,
        columnValue
    }: SearchInputType) => {

    const [inputValue, setInputValue] = useState(value);
    const [error, setError] = useState<string | null>(null);

    const handleClick = () => {

        if (columnValue === 'name') {
            setFilterParams({
                searchValue: inputValue,
                selectedCondition: conditionValue,
                selectedColumn: columnValue
            });

            return;
        }

        if (!Number(inputValue)) {
            setError('Enter number');

            return;
        }

        setFilterParams({
            searchValue: inputValue,
            selectedCondition: conditionValue,
            selectedColumn: columnValue
        });
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value);
        setError(null)
    }

    return (
        <>
            <div className="input-group  mb-3 mt-3" style={{width: 400}}>
                <input
                    type="text"
                    className={`form-control ${error && 'border-danger'}`}
                    placeholder="Enter something ..."
                    value={inputValue}
                    onChange={handleChange}
                />
                <button
                    className={`btn ${error ? 'btn-outline-danger' : 'btn-outline-secondary'}`}
                    type="button"
                    id="button-addon2"
                    onClick={handleClick}
                >
                    Button
                </button>
            </div>
            <div className="error">{error}</div>
        </>
    );
};