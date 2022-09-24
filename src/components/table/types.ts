import {ItemType} from '../../api';
import {FieldTypes} from '../../types';

export type TableType = {
    items: ItemType [];
    onSort: (sortField: FieldTypes) => void;
    sortField: FieldTypes;
    sort: 'asc' | 'desc';
}