import {FieldTypes} from '../types';
import {ConditionType} from '../types';

export type FilterParamsType = {
    selectedColumn: FieldTypes,
    selectedCondition: ConditionType,
    searchValue: string,
}