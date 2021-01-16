import {
    SAVE_ITEM_REQUEST, SAVE_ITEM_SUCCESS, SAVE_ITEM_FAILURE,
    DELETE_ITEMS_REQUEST, DELETE_ITEMS_SUCCESS, DELETE_ITEMS_FAILURE,
    FIND_ITEM_REQUEST, FIND_ITEM_SUCCESS, FIND_ITEM_FAILURE,
    FIND_ITEMS_REQUEST, FIND_ITEMS_SUCCESS, FIND_ITEMS_FAILURE
} from '../actions/constants';
import { put, takeLatest } from 'redux-saga/effects';
import { commonAxios } from '../utils/apiUtils';

function* save(action) {
    const { id, name, price, brand, variety, picture, partner } = action.data;

    try {
        const data = yield (id ?
            commonAxios.put(`items/${id}`, {id, name, price, brand, variety, picture, partner}) : 
            commonAxios.post('items', {name, price, brand, variety, picture, partner}))

        yield put({
            type: SAVE_ITEM_SUCCESS,
            data: data,
        });
    } catch (error) {
        yield put({
            type: SAVE_ITEM_FAILURE,
            error: error

        });
    }
}

function* deleteById(action) {
    try {
        const data = yield commonAxios.delete(`items/${action.id}`);
        yield put({
            type: DELETE_ITEMS_SUCCESS,
            data: data
        });
    } catch (error) {
        yield put({
            type: DELETE_ITEMS_FAILURE,
            error: error
        });
    }
}

function* findById(action) {
    try {
        const data = yield commonAxios.get(`items/${action.id}`);

        yield put({
            type: FIND_ITEM_SUCCESS,
            data: data
        });
    } catch (error) {
        yield put({
            type: FIND_ITEM_FAILURE,
            error: error

        });
    }
}

function* findAll(action) {

    const { search, sort = 'asc', page = 0, size = 30 } = action.params || {};
    try {
        const data = yield commonAxios.get('items', {
            params: {
                ...search, sort, page, size
            }
        });
        yield put({
            type: FIND_ITEMS_SUCCESS,
            data: data
        });
    } catch (error) {
        yield put({
            type: FIND_ITEMS_FAILURE,
            error: error

        });
    }
}

export function* watchSaveItem() {
    yield takeLatest(SAVE_ITEM_REQUEST, save);
}
export function* watchDeleteItemById() {
    yield takeLatest(DELETE_ITEMS_REQUEST, deleteById);
}
export function* watchFindItemById() {
    yield takeLatest(FIND_ITEM_REQUEST, findById);
}
export function* watchFindItems() {
    yield takeLatest(FIND_ITEMS_REQUEST, findAll);
}