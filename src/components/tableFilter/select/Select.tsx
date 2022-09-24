import React from 'react';
import {SelectType} from './types';
import {ConditionType, FieldTypes} from '../../../types';


export const Select = ({items, initialValue, setValue, disabled}: SelectType) => {
    return (
        <select
            className="form-select form-select-sm mt-3"
            onChange={(e) => setValue(e.currentTarget.value as ConditionType & FieldTypes)}
            style={{width: 100, height: 37, marginRight: 5}}
            value={initialValue}
            disabled={disabled}
        >
            {items.map(item => {
                return (
                    <option
                        key={item}
                        value={item.toLowerCase()}
                    >
                        {item}
                    </option>
                )
            })}
        </select>
    );
};