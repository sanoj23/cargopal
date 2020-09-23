import axios from 'axios';
import { userConstants } from '../constants/userConstants';

// Derive Constants
// const history = useHistory();

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
  console.log(user);
  return axios
    .post('api/user/authenticate', user)
    .then((res) => {
      dispatch(loginSuccess(res.data));

      if (localStorage.getItem('user') === null) {
        localStorage.setItem('user', JSON.stringify(res.data)); // Set up local storage
      } else {
        localStorage.clear();
        localStorage.setItem('user', JSON.stringify(res.data));
      }
      // history.push('/home');
      // window.location.reload();
    })
    .catch((error) => {
      dispatch(loginFailure(error));
    });
};

// // Logout User
// export const logoutUser = () => (dispatch) => {
//   console.log('logged out');
//   dispatch({ type: LOGOUT_USER });
//   localStorage.clear();
// };

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

// // Get user by Id
// const getUserByIdSuccess = (payload) => ({
//   type: USER_BY_ID_SUCCESS,
//   payload,
// });
// const getUserByIdFailure = (payload) => ({
//   type: USER_BY_ID_FAILURE,
//   payload,
// });
// export const GetAuthUser = () => (dispatch) => {
//   dispatch({ type: USER_BY_ID_REQUEST });
//   const userId = getUserId();
//   return axios
//     .get(`/api/user/${userId}`)
//     .then((res) => {
//       dispatch(getUserByIdSuccess(res.data));
//     })
//     .catch((err) => {
//       dispatch(getUserByIdFailure(err.data));
//     });
// };

// Update User Info