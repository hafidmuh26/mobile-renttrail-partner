import {
  FIND_RENTS_REQUEST,
  FIND_RENTS_SUCCESS,
  FIND_RENTS_FAILURE,

  FIND_RENTSBORROWED_REQUEST,
  FIND_RENTSBORROWED_SUCCESS,
  FIND_RENTSBORROWED_FAILURE,

  FIND_RENTSDONE_REQUEST,
  FIND_RENTSDONE_SUCCESS,
  FIND_RENTSDONE_FAILURE,

  FIND_RENT_REQUEST,
  FIND_RENT_SUCCESS,
  FIND_RENT_FAILURE,

  SAVE_RENT_REQUEST,
  SAVE_RENT_SUCCESS,
  SAVE_RENT_FAILURE,

  FIND_RENTBORROWED_REQUEST,
  FIND_RENTBORROWED_SUCCESS,
  FIND_RENTBORROWED_FAILURE,
} from '../actions/constants';
import {put, takeLatest} from 'redux-saga/effects';
import {commonAxios} from '../utils/apiUtils';

function* findAll(action) {
  const {search, sort = 'asc', page = 0, size = 30, status} = action.params || {};
  try {
    const data = yield commonAxios.get('rents', {
      params: {
        ...search,
        sort,
        page,
        size,
        status
      },
    });
    yield put({
      type: FIND_RENTS_SUCCESS,
      data: data,
    });
  } catch (error) {
    yield put({
      type: FIND_RENTS_FAILURE,
      error: error,
    });
  }
}

function* findAllBorrowed(action) {
  const {search, sort = 'asc', page = 0, size = 30, status} = action.params || {};
  try {
    const data = yield commonAxios.get('rents', {
      params: {
        ...search,
        sort,
        page,
        size,
        status
      },
    });
    yield put({
      type: FIND_RENTSBORROWED_SUCCESS,
      data: data,
    });
  } catch (error) {
    yield put({
      type: FIND_RENTSBORROWED_FAILURE,
      error: error,
    });
  }
}

function* findAllDone(action) {
  const {search, sort = 'asc', page = 0, size = 30, status} = action.params || {};
  try {
    const data = yield commonAxios.get('rents', {
      params: {
        ...search,
        sort,
        page,
        size,
        status
      },
    });
    yield put({
      type: FIND_RENTSDONE_SUCCESS,
      data: data,
    });
  } catch (error) {
    yield put({
      type: FIND_RENTSDONE_FAILURE,
      error: error,
    });
  }
}

function* rentById(action) {
  try {
    const data = yield commonAxios.get(`rents/${action.id}`);

      yield put({
          type: FIND_RENT_SUCCESS,
          data: data
      });
  } catch (error) {
      yield put({
          type: FIND_RENT_FAILURE,
          error: error
      });
  }
}

function* save(action) {
  const {id, totalPrice, dateStart, dateEnd, item, user, status} = action.data;
  try {
    
    const data = yield (id ?
    commonAxios.put(`rents/${id}`, {id, totalPrice, dateStart, dateEnd, 'item':item?.id, "user":user?.id, status}) :
    commonAxios.post('rents', {totalPrice, dateStart, dateEnd, item, user, status}))
      
      yield put({
          type: SAVE_RENT_SUCCESS,
          data: data
      });
  } catch (error) {
      yield put({
          type: SAVE_RENT_FAILURE,
          error: error
      });
  }
}


export function* watchFindRents() {
  yield takeLatest(FIND_RENTS_REQUEST, findAll);
}

export function* watchFindRentsDone() {
  yield takeLatest(FIND_RENTSDONE_REQUEST, findAllDone);
}

export function* watchFindRentsBorrowed() {
  yield takeLatest(FIND_RENTSBORROWED_REQUEST, findAllBorrowed);
}

export function* watchFindRentById() {
  yield takeLatest(FIND_RENT_REQUEST, rentById);
}

export function* watchSave() {
  yield takeLatest(SAVE_RENT_REQUEST, save);
}
