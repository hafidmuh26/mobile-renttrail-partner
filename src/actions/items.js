import {
    SAVE_ITEM_REQUEST,
    DELETE_ITEMS_REQUEST,
    FIND_ITEM_REQUEST,
    FIND_ITEMS_REQUEST,
} from './constants';

export function save(data) {
    return {
        type: SAVE_ITEM_REQUEST,
        data: data
    };
}

export function deleteById(id) {
    return {
        type: DELETE_ITEMS_REQUEST,
        id: id
    };
}

export function findById(id) {

    return {
        type: FIND_ITEM_REQUEST,
        id: id
    };
}

export function findAll(params) {
    return {
        type: FIND_ITEMS_REQUEST,
        params: params
    };
}

