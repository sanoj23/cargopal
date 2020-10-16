import axios from 'axios';
import { userConstants } from '../constants/userConstants';

// Get userId of logged in user
export const getUserId = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (localStorage.getItem('user') == null) {
    return null;
  } else {
    return user;
  }
};

// Login User
const loginSuccess = (payload) => ({
  type: userConstants.LOGIN_SUCCESS,
  payload,
});
const loginFailure = (payload) => ({
  type: userConstants.LOGIN_FAILURE,
  payload,
});
export const loginUser = (user) => (dispatch) => {
  dispatch({ type: userConstants.LOGIN_REQUEST });

  return axios
    .post('api/user/authenticate', user)
    .then((res) => {
      dispatch(loginSuccess(res.data));
      if (!localStorage.getItem('user')) {
        localStorage.setItem('user', JSON.stringify(res.data)); // Set up local storage
      } else {
        localStorage.clear();
        localStorage.setItem('user', JSON.stringify(res.data));
      }
    })
    .catch((error) => {
      dispatch(loginFailure(error));
    });
};

// Logout User
export const logoutUser = () => (dispatch) => {
  dispatch({ type: userConstants.LOGOUT_USER });
  localStorage.clear();
};

// Get user by Id - authenticated
const getUserByIdSuccess = (payload) => ({
  type: userConstants.USER_BY_ID_SUCCESS,
  payload,
});
const getUserByIdFailure = (payload) => ({
  type: userConstants.USER_BY_ID_FAILURE,
  payload,
});
export const getAuthUser = () => (dispatch) => {
  dispatch({ type: userConstants.USER_BY_ID_REQUEST });

  const user = getUserId();

  return axios
    .get(`/api/user/${user.userId}`)
    .then((res) => {
      dispatch(getUserByIdSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getUserByIdFailure(err));
    });
};

// Register User
const resgiterSuccess = (payload) => ({
  type: userConstants.REGISTER_SUCCESS,
  payload,
});
const registerFailure = (payload) => ({
  type: userConstants.REGISTER_FAILURE,
  payload,
});
export const RegisterUser = (user) => (dispatch) => {
  dispatch({ type: userConstants.REGISTER_REQUEST });

  return axios
    .post('api/user', user)
    .then((res) => {
      dispatch(resgiterSuccess(res.data));
      console.log(res.data);
    })
    .catch((err) => {
      dispatch(registerFailure(err));
      console.log(err);
    });
};

// Update User Info

// Reset Password

// //Regsiter User
// const RegisterSuccess = (payload) => ({
//   type: REGISTER_USER_SUCCESS,
//   payload,
// });
// const RegisterFailure = (payload) => ({
//   type: REGISTER_USER_FAILURE,
//   payload,
// });
// export const ResgisterUser = (user) => (dispatch) => {
//   dispatch({ type: REGISTER_USER_REQUEST });
//   return axios
//     .post('api/user', user)
//     .then((res) => {
//       dispatch(RegisterSuccess(res.data));
//       //   history.push('/');
//     })
//     .catch((err) => dispatch(RegisterFailure(err)));
// };
