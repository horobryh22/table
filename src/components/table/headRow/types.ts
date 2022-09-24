import {FieldTypes} from '../../../types';

export type HeadRowType = {
    onSort: (sortField: FieldTypes) => void;
    sortField: FieldTypes;
    sort: 'asc' | 'desc';
}