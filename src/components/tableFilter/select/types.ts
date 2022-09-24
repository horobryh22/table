import {ConditionsType, FieldTypes} from '../../../types';

export type SelectType = {
    items: string[];
    initialValue: string;
    setValue: (value: ConditionsType & FieldTypes) => void;
    disabled: boolean;
}