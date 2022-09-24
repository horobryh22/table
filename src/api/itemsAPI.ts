import {instance} from './config/index';
import {ItemType} from './types/ItemType';

export const itemsAPI = {
    getItems: () => {
        return instance.get<ItemType[]>('');
    }
}