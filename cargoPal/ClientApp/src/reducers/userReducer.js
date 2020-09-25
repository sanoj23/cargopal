import { userConstants } from '../constants/userConstants';

const INITIAL_STATE = {
  loading: false,
  error: null,
  data: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userConstants.GET_USERS_REQUEST:
      return { ...state, loading: true };
    case userConstants.GET_USERS_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case userConstants.GET_USERS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case userConstants.GET_USER_BY_ID_REQUEST:
      return { ...state, loading: true };
    case userConstants.GET_USER_BY_ID_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case userConstants.GET_USER_BY_ID_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case userConstants.USER_BY_TYPE_REQUEST:
      return { ...state, loading: true };
    case userConstants.USER_BY_TYPE_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case userConstants.USER_BY_TYPE_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default userReducer;
