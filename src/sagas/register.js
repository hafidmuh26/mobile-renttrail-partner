import { 
    REGISTER_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST,
    FIND_REGISTER_SUCCESS, FIND_REGISTER_FAILURE, FIND_REGISTER_REQUEST
} from '../actions/constants';
import { put, takeLatest } from 'redux-saga/effects';
import { commonAxios } from '../utils/apiUtils';
import { AsyncStorage } from 'react-native';


function* register(action) {
    const { name, address, telp, picture, owner, account } = action.data;

    try {
        const data = yield commonAxios.post('partners', {
            name, address, telp, picture, owner,account
        }).then(async (data) => {
            const result = data?.id.toString() || null
            await AsyncStorage.setItem('partners', result)
        })
        yield put({
            type: REGISTER_SUCCESS,
            data: data,
        });
    } catch (error) {
        yield put({
            type: REGISTER_FAILURE,
            error: error
        });
    }
}

function* findRegisterById(action) {

    try {
        const data = yield commonAxios.get(`auth/${action.id}`);
        yield put({
            type: FIND_REGISTER_SUCCESS,
            data: data,
        });
    } catch (error) {
        yield put({
            type: FIND_REGISTER_FAILURE,
            error: error
        });
    }
}


export function* watchRegister() {
    yield takeLatest(REGISTER_REQUEST, register);
}

export function* watchFindRegister() {
    yield takeLatest(FIND_REGISTER_REQUEST, findRegisterById);
}

