import { userConstants } from '../constants/userConstants';

const INITIAL_STATE = {
  loading: false,
  loggedIn: false,
  data: [],
  error: '',
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST: // Log In User
      return { ...state, loading: true, loggedIn: false };
    case userConstants.LOGIN_SUCCESS:
      return { ...state, loading: false, loggedIn: true, data: action.payload };
    case userConstants.LOGIN_FAILURE:
      return { ...state, laoding: false, error: action.payload };

    case userConstants.LOGOUT_USER: //Logout User
      return state;

    case userConstants.REGISTER_USER_REQUEST: // Register user
      return { ...state, loading: true };
    case userConstants.REGISTER_USER_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case userConstants.REGISTER_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case userConstants.USER_BY_ID_REQUEST: // Get Logged In User
      return { ...state, loading: true };
    case userConstants.USER_BY_ID_SUCCESS:
      return { ...state, loading: false, loggedIn: true, data: action.payload };
    case userConstants.USER_BY_ID_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default authReducer;
