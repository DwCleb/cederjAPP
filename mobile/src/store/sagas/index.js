import { all, takeLatest } from 'redux-saga/effects';

import { Types as UserTypes } from 'store/ducks/user';

import {
  signIn,
  signOut,
  facebookLogin,
  cleanUserInfo,
  insertUser,
  cleanUserMessage,
} from './user';


export default function* rootSaga() {
  return yield all([
    // User
    takeLatest(UserTypes.SIGN_IN, signIn),
    takeLatest(UserTypes.SIGN_OUT, signOut),
    takeLatest(UserTypes.FACEBOOK_LOGIN, facebookLogin),
    takeLatest(UserTypes.INSERT_USER, insertUser),
    takeLatest(UserTypes.CLEAN_USER_INFO, cleanUserInfo),
    takeLatest(UserTypes.CLEAN_MESSAGE, cleanUserMessage),

  ]);
}
