import {all, fork} from 'redux-saga/effects';
import {watchLogin, watchFindPartnerByAccount} from './login';
import {watchFindRents, watchFindRentById, watchFindRentsBorrowed, watchFindRentsDone, watchSave} from './rents';
import {watchOauth} from './oauth'
import {watchSignup } from './signup';
import {watchRegister, watchFindRegister} from './register';
import {watchProfile} from './profile';
import {watchSaveItem, watchDeleteItemById, watchFindItemById, watchFindItems} from './items';
import {watchLogout} from './logout';

export default function* rootSaga() {
  yield all([
    fork(watchFindRents),
    fork(watchFindRentById),
    fork(watchLogin),
    fork(watchProfile),
    fork(watchFindPartnerByAccount),
    fork(watchOauth),
    fork(watchSignup),
    fork(watchRegister,watchFindRegister),
    fork(watchDeleteItemById),
    fork(watchFindItemById),
    fork(watchFindItems),
    fork(watchSaveItem),
    fork(watchFindRentsBorrowed),
    fork(watchFindRentsDone),
    fork(watchSave),
    fork(watchLogout)
  ]);
}
