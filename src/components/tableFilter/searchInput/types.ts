import {ConditionType, FieldTypes, FilterParamsType} from '../../../types';

export type SearchInputType = {
    value: string;
    setFilterParams: (data: FilterParamsType) => void;
    columnValue: FieldTypes;
    conditionValue: ConditionType;
}