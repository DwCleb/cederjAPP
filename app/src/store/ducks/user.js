export const Types = {
  INSERT_SUCCESS: 'user/INSERT_SUCCESS',
  SET_USER_INFO: 'user/SET_USER_INFO',
  FACEBOOK_LOGIN: 'user/FACEBOOK_LOGIN',
  FACEBOOK_SIGNUP: 'user/FACEBOOK_SIGNUP',
  LOGIN_SUCCESS: 'user/LOGIN_SUCCESS',
  SIGN_IN: 'user/SIGN_IN',
  SIGN_OUT: 'user/SIGN_OUT',
  INSERT_USER: 'user/INSERT_USER',
  SET_MESSAGE: 'user/SET_MESSAGE',
  CLEAN_MESSAGE: 'user/CLEAN_MESSAGE',
  CLEAN_USER_INFO: 'user/CLEAR_USER_INFO',
};

const initialState = {
  data: {},
  message: null,
  isLoading: false,
  isFbLoading: false,
  isLogged: false,
  fbSignUp: false,
  createLogin: false,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        isLoading: false,
        message: null,
      };
    case Types.INSERT_SUCCESS:
      return {
        ...state,
        createLogin: true,
        isLoading: true,
        message: null,
      };
    case Types.FACEBOOK_LOGIN:
      return {
        ...state,
        isFbLoading: true,
      };
    case Types.SIGN_IN:
      return {
        ...state,
        isLoading: true,
        message: null,
      };
    case Types.SIGN_OUT:
      return {
        data: {},
        message: null,
        fbSignUp: false,
        isLogged: false,
        isLoading: false,
        errorOnAdd: null,
        isFbLoading: false,
        createLogin: false,
      };
    case Types.FACEBOOK_SIGNUP:
      return {
        ...state,
        fbSignUp: !state.fbSignUp,
      };
    case Types.SET_USER_INFO:
      return {
        ...state,
        isLoading: false,
        data: {
          ...state.data,
          ...action.payload.user,
        },
        message: null,
      };
    case Types.INSERT_USER:
      return {
        ...state,
        isLoading: true,
        message: null,
      };
    case Types.SET_MESSAGE:
      return {
        ...state,
        isLoading: false,
        message: action.payload.message,
      };
    case Types.CLEAN_MESSAGE:
      return {
        ...state,
        message: null,
        isLoading: false,
      };
    case Types.CLEAN_USER_INFO:
      return {
        ...state,
        data: {},
      };
    default:
      return state;
  }
}

export const Creators = {
  setUser: userInfo => ({
    type: Types.SET_USER_INFO,
    payload: {
      user: userInfo,
    },
  }),

  insertUser: user => ({
    type: Types.INSERT_USER,
    payload: {
      user,
    },
  }),

  signIn: (login, password) => ({
    type: Types.SIGN_IN,
    payload: {
      login,
      password,
    },
  }),

  facebookLogin: fbId => ({
    type: Types.FACEBOOK_LOGIN,
    payload: {
      fbId,
    },
  }),

  setMessage: message => ({
    type: Types.SET_MESSAGE,
    payload: {
      message,
    },
  }),

  facebookSignUp: () => ({
    type: Types.FACEBOOK_SIGNUP,
  }),

  loginSuccess: () => ({
    type: Types.LOGIN_SUCCESS,
  }),

  insertSuccess: () => ({
    type: Types.INSERT_SUCCESS,
  }),

  signOut: () => ({
    type: Types.SIGN_OUT,
  }),

  cleanUserInfo: () => ({
    type: Types.CLEAN_USER_INFO,
  }),

  cleanUserMessage: () => ({
    type: Types.CLEAN_MESSAGE,
  }),

};
