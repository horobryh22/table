import React from 'react';
import {SelectType} from './types';
import {ConditionsType, FieldTypes} from '../../../types';


export const Select = ({items, initialValue, setValue, disabled}: SelectType) => {
    return (
        <select
            className="form-select form-select-sm mt-3"
            onChange={(e) => setValue(e.currentTarget.value as ConditionsType & FieldTypes)}
            style={{width: 100}}
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