import axios from 'axios';
import { userConstants } from '../constants/userConstants';

// Get all users
const GetUsersSuccess = (payload) => ({
  type: userConstants.GET_USERS_SUCCESS,
  payload,
});
const GetUsersFailure = (payload) => ({
  type: userConstants.GET_USERS_FAILURE,
  payload,
});
export const GetUsers = () => (dispatch) => {
  dispatch({ type: userConstants.GET_USERS_REQUEST });
  return axios
    .get(`api/user/`)
    .then((res) => {
      dispatch(GetUsersSuccess(res.data));
    })
    .catch((error) => {
      dispatch(GetUsersFailure(error));
    });
};

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

// Get user by type - agent/client
const GetUserByTypeSuccess = (payload) => ({
  type: userConstants.USER_BY_TYPE_SUCCESS,
  payload,
});
const GetUserByTypeFailure = (payload) => ({
  type: userConstants.USER_BY_TYPE_FAILURE,
  payload,
});
export const GetUserByType = (type) => (dispatch) => {
  dispatch({ type: userConstants.USER_BY_TYPE_REQUEST });
  return axios
    .get(`api/user/type/${type}`)
    .then((res) => {
      dispatch(GetUserByTypeSuccess(res.data));
    })
    .catch((error) => {
      dispatch(GetUserByTypeFailure(error));
    });
};
