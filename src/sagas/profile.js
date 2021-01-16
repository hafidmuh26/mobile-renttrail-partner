import { PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_FAILURE } from '../actions/constants';
import {takeLatest, put} from 'redux-saga/effects';


function* profile() {
    
    try {
        const data = yield commonAxios.get('account/me');
        yield put({
            type: PROFILE_SUCCESS,
            data: data,
        });
        console.log('SAPRO', data);
        
    } catch (error) {
        yield put({
            type: PROFILE_FAILURE,
            error: error
        });
    }
}

export function* watchProfile() {
    yield takeLatest(PROFILE_REQUEST, profile);
}