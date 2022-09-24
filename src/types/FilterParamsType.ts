import {FieldTypes} from '../types';
import {ConditionsType} from '../types';

export type FilterParamsType = {
    selectedColumn: FieldTypes,
    selectedCondition: ConditionsType,
    searchValue: string,
}