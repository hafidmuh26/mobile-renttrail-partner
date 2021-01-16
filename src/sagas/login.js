import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_REQUEST } from '../actions/constants';
import { FIND_ACCOUNT_FAILURE, FIND_ACCOUNT_SUCCESS, FIND_ACCOUNT_REQUEST } from '../actions/constants';
import { put, takeLatest } from 'redux-saga/effects';
import { commonAxios } from '../utils/apiUtils';
import { AsyncStorage } from 'react-native';


function* login(action) {
    const { email, password } = action.data;

    try {
        const data = yield commonAxios.post('auth/login', {
            email, password
        });
        const { token, id } = data;
        yield AsyncStorage.setItem("token", token)
        yield AsyncStorage.setItem("id", id.toString())
        const partner = yield commonAxios.get(`partners/${id}`);
        data.partner = partner;
        yield put({
            type: LOGIN_SUCCESS,
            data: data
        });
    } catch (error) {
        yield put({
            type: LOGIN_FAILURE,
            error: error

        });
    }
}

function* findPartnerByAccount(action) {
    try {
        const data = yield commonAxios.get(`partners/account/${action.id}`);

        yield put({
            type: FIND_ACCOUNT_SUCCESS,
            data: data
        });
    } catch (error) {
        yield put({
            type: FIND_ACCOUNT_FAILURE,
            error: error
        });
    }
}

export function* watchLogin() {
    yield takeLatest(LOGIN_REQUEST, login);
}

export function* watchFindPartnerByAccount() {
    yield takeLatest(FIND_ACCOUNT_REQUEST, findPartnerByAccount);
}