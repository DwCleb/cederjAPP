import { call, put, select } from 'redux-saga/effects';
import api from 'services/api';

import {
  Creators as UserActions,
} from 'store/ducks/user';

export function* signIn(action) {
  try {
    const response = yield call(api.post, '/signIn', action.payload);

    yield put(UserActions.setUser(response.data.data));
    yield put(UserActions.loginSuccess());
  } catch (err) {
    yield put(UserActions.setMessage(err.response.data.message));
    return false;
  }
  return true;
}

export function* signOut() {
  try {
    put(UserActions.signOut());
  } catch (err) {
    yield put(UserActions.setMessage(err.response.data.message));
    return false;
  }
  return true;
}

export function* facebookLogin(action) {
  try {
    const response = yield call(api.post, '/signIn/fb', action.payload);

    yield put(UserActions.setUser(response.data.data));
    yield put(UserActions.loginSuccess());
  } catch (err) {
    if (err.response.status == 401 && err.response.data.status == 0) yield put(UserActions.facebookSignUp());// console.tron.log('Usuario não cadastrado');
    else yield put(UserActions.setMessage(err.response.data.message));
    return false;
  }
  return true;
}

export function* insertUser(action) {
  try {
    const data = action.payload.user;
    const response = yield call(api.post, '/signUp', data);
    // console.tron.log(response);
    yield put(UserActions.insertSuccess());
    yield put(UserActions.setMessage(response.data.message));
    return true;
  } catch (err) {
    yield put(UserActions.setMessage(err.response.data.message));
    return false;
  }
}

export function* updateUserAddress(action) {
  try {
    const data = action.payload.address;
    api.defaults.headers.common.Authorization = `Bearer ${action.payload.token}`;
    const response = yield call(api.put, '/address', data);
    yield put(UserActions.setUserInfo(data));
    yield put(UserActions.setMessage(response.data.message));
  } catch (err) {
    yield put(UserActions.setMessage(err.response.data.message));
  }
}

export function* updateUserBank(action) {
  try {
    const data = action.payload.bank;
    api.defaults.headers.common.Authorization = `Bearer ${action.payload.token}`;
    const response = yield call(api.put, '/bank', data);
    yield put(UserActions.setUserInfo(data));
    yield put(UserActions.setMessage(response.data.message));
  } catch (err) {
    yield put(UserActions.setMessage(err.response.data.message));
  }
}

export function* cleanUserInfo() {
  try {
    put(UserActions.cleanUserInfo());
  } catch (err) {
    yield put(UserActions.setMessage(err.response.data.message));
  }
}

export function cleanUserMessage() {
  put(UserActions.cleanUserMessage());
}
