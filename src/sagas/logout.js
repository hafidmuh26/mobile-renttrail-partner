import {
    LOGOUT_REQUEST,
    LOGOUT_FAILURE,
    LOGOUT_SUCCESS,
  } from '../actions/constants';
  import {put, call, takeLatest} from 'redux-saga/effects';
  import {AsyncStorage} from 'react-native';
  import {GoogleSignin} from '@react-native-community/google-signin';
  
  function* logout() {
    try {
      console.log('coba saga');
  
      yield AsyncStorage.removeItem('email');
      yield AsyncStorage.removeItem('token');
      yield AsyncStorage.removeItem('role');
      yield AsyncStorage.removeItem('profileId');
      yield AsyncStorage.removeItem('photo');
      yield AsyncStorage.removeItem('username');
      yield AsyncStorage.removeItem('id');
      yield AsyncStorage.removeItem('id_user');
      const isSignedIn = yield GoogleSignin.isSignedIn();
      if (isSignedIn) {
        yield GoogleSignin.revokeAccess();
        yield GoogleSignin.signOut();
      }
      yield put({
        type: LOGOUT_SUCCESS,
      });
      console.log('ok');
    } catch (error) {
      console.log('error saga', error);
  
      yield put({
        type: LOGOUT_FAILURE,
        error: error,
      });
    }
  }
  
  export function* watchLogout() {
    yield takeLatest(LOGOUT_REQUEST, logout);
  }
  