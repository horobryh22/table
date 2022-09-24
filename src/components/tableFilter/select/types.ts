import {ConditionType, FieldTypes} from '../../../types';
import {CSSProperties} from 'react';

export type SelectType = {
    items: string[];
    initialValue: string;
    setValue: (value: ConditionType & FieldTypes) => void;
    disabled: boolean;
    style?: CSSProperties;
}