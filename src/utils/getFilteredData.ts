import {FilterParamsType} from '../types';
import {ItemType} from '../api';

export const getFilteredData = (filterParams: FilterParamsType, items: ItemType[]): ItemType[] => {

    const {selectedColumn, selectedCondition, searchValue} = filterParams

    if (!searchValue) {
        return items;
    }

    if (selectedColumn === 'name') {
        return items.filter(item => {
            return item.name.toLowerCase().includes(searchValue.toLowerCase())
        })
    }

    if (selectedCondition === 'contain') {
        return items.filter(item => {
            return item[selectedColumn].toString().includes(searchValue);
        })
    }

    if (selectedCondition === 'less') {
        return items.filter(item => {
            return item[selectedColumn] < Number(searchValue);
        })
    }

    if (selectedCondition === 'more') {
        return items.filter(item => {
            return item[selectedColumn] > Number(searchValue);
        })
    }

    if (selectedCondition === 'equal') {
        return items.filter(item => {
            return item[selectedColumn] === Number(searchValue);
        })
    }

    return items;
}