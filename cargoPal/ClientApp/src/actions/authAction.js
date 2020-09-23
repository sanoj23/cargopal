import axios from 'axios';
import { userConstants } from '../constants/userConstants';

// Derive Constants
// const history = useHistory();

const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_USER,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  USER_BY_ID_REQUEST,
  USER_BY_ID_SUCCESS,
  USER_BY_ID_FAILURE,
} = userConstants;

// Get userId of logged in user
export const getUserId = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (localStorage.getItem('user') == null) {
    // history.push('/');
  } else {
    return user.userId;
  }
};

// Login User
const LoginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

const LoginFailure = (payload) => ({
  type: LOGIN_FAILURE,
  payload,
});

export const loginUser = (user) => (dispatch) => {
  console.log('check');
  dispatch({ type: LOGIN_REQUEST });
  return axios
    .post('api/user/authenticate', user)
    .then((res) => {
      dispatch(LoginSuccess(res.data));
      console.log('Loggeed in');
      if (localStorage.getItem('user') === null) {
        localStorage.setItem('user', JSON.stringify(res.data));
      } else {
        localStorage.clear();
        localStorage.setItem('user', JSON.stringify(res.data));
      }

      //   history.push('/home');
    })
    .catch((err) => dispatch(LoginFailure(err)));
};

// Logout User
export const logoutUser = () => (dispatch) => {
  console.log('logged out');
  dispatch({ type: LOGOUT_USER });
  localStorage.clear();
};

//Regsiter User
const RegisterSuccess = (payload) => ({
  type: REGISTER_USER_SUCCESS,
  payload,
});
const RegisterFailure = (payload) => ({
  type: REGISTER_USER_FAILURE,
  payload,
});
export const ResgisterUser = (user) => (dispatch) => {
  dispatch({ type: REGISTER_USER_REQUEST });
  return axios
    .post('api/user', user)
    .then((res) => {
      dispatch(RegisterSuccess(res.data));
      //   history.push('/');
    })
    .catch((err) => dispatch(RegisterFailure(err)));
};

// Get user by Id
const getUserByIdSuccess = (payload) => ({
  type: USER_BY_ID_SUCCESS,
  payload,
});
const getUserByIdFailure = (payload) => ({
  type: USER_BY_ID_FAILURE,
  payload,
});
export const GetAuthUser = () => (dispatch) => {
  dispatch({ type: USER_BY_ID_REQUEST });
  const userId = getUserId();
  return axios
    .get(`/api/user/${userId}`)
    .then((res) => {
      dispatch(getUserByIdSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getUserByIdFailure(err.data));
    });
};

// Update User Info
