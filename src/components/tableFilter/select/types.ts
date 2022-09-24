import {ConditionType, FieldTypes} from '../../../types';

export type SelectType = {
    items: string[];
    initialValue: string;
    setValue: (value: ConditionType & FieldTypes) => void;
    disabled: boolean;
}