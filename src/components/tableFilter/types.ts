import {FilterParamsType} from '../../types';

export type TableFilterType = {
    filterParams: FilterParamsType
    setFilterParams: (data: FilterParamsType) => void;
}