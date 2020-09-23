import axios from 'axios';
import { userConstants } from '../constants/userConstants';

// Get user by userId
const getUserByIdSuccess = (payload) => ({
  type: userConstants.GET_USER_BY_ID_SUCCESS,
  payload,
});
const getUserByIdFailure = (payload) => ({
  type: userConstants.GET_USER_BY_ID_FAILURE,
  payload,
});
export const getUserByUserId = (userId) => (dispatch) => {
  dispatch({ type: userConstants.GET_USER_BY_ID_REQUEST });
  return axios
    .get(`api/user/${userId}`)
    .then((res) => {
      dispatch(getUserByIdSuccess(res.data));
    })
    .catch((error) => {
      dispatch(getUserByIdFailure(error));
    });
};
