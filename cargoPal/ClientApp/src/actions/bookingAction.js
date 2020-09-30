import axios from 'axios';
import { bookingConstants } from '../constants/bookingConstants';
import { getUserId } from '../actions/authAction';

// Get all bookings
const GetBookingSuccess = (payload) => ({
  type: bookingConstants.GET_BOOKING_SUCCESS,
  payload,
});
const GetBookingFailure = (payload) => ({
  type: bookingConstants.GET_BOOKING_FAILURE,
  payload,
});
export const GetBooking = () => (dispatch) => {
  dispatch({ type: bookingConstants.GET_BOOKING_REQUEST });
  return axios
    .get('api/bookings')
    .then((res) => {
      dispatch(GetBookingSuccess(res.data));
    })
    .catch((err) => {
      dispatch(GetBookingFailure(err));
    });
};

// Get booking by Id
const GetBookingByIdSuccess = (payload) => ({
  type: bookingConstants.BOOKING_BY_ID_SUCCESS,
  payload,
});
const GetBookingByIdFailure = (payload) => ({
  type: bookingConstants.BOOKING_BY_ID_FAILURE,
  payload,
});
export const GetBookingById = (bookingId) => (dispatch) => {
  dispatch({ type: bookingConstants.BOOKING_BY_ID_REQUEST });
  return axios
    .get(`api/bookings/${bookingId}`)
    .then((res) => {
      dispatch(GetBookingByIdSuccess(res.data));
    })
    .catch((err) => {
      dispatch(GetBookingByIdFailure(err));
    });
};

// Get booking by user Id
const GetBookingByUserSuccess = (payload) => ({
  type: bookingConstants.BOOKING_BY_USER_SUCCESS,
  payload,
});
const GetBookingByUserFailure = (payload) => ({
  type: bookingConstants.BOOKING_BY_USER_FAILURE,
  payload,
});
export const GetBookingByUser = () => (dispatch) => {
  dispatch({ type: bookingConstants.BOOKING_BY_USER_REQUEST });
  const { userId } = getUserId();
  return axios
    .get(`api/bookings/user/${userId}`)
    .then((res) => {
      dispatch(GetBookingByUserSuccess(res.data));
    })
    .catch((err) => {
      dispatch(GetBookingByUserFailure(err));
    });
};

// Get booking by shipment Id
const GetBookingByShipmentSuccess = (payload) => ({
  type: bookingConstants.BOOKING_BY_SHIPMENT_SUCCESS,
  payload,
});
const GetBookingByShipmentFailure = (payload) => ({
  type: bookingConstants.BOOKING_BY_SHIPMENT_FAILURE,
  payload,
});
export const GetBookingByShipment = (shipmentId) => (dispatch) => {
  dispatch({ type: bookingConstants.BOOKING_BY_SHIPMENT_REQUEST });
  return axios
    .get(`api/bookings/shipment/${shipmentId}`)
    .then((res) => {
      dispatch(GetBookingByShipmentSuccess(res.data));
    })
    .catch((err) => {
      dispatch(GetBookingByShipmentFailure(err.response.status));
    });
};

// Add new booking
const AddBookingSuccess = (payload) => ({
  type: bookingConstants.ADD_BOOKING_SUCCESS,
  payload,
});
const AddBookingFailure = (payload) => ({
  type: bookingConstants.ADD_BOOKING_FAILURE,
  payload,
});
export const AddBooking = (booking) => (dispatch) => {
  dispatch({ type: bookingConstants.ADD_BOOKING_REQUEST });
  return axios
    .post(`api/bookings/`, booking)
    .then((res) => {
      dispatch(AddBookingSuccess(res.data));
    })
    .catch((err) => {
      dispatch(AddBookingFailure(err));
    });
};

// Update booking
const UpdateBookingSuccess = (payload) => ({
  type: bookingConstants.UPDATE_BOOKING_SUCCESS,
  payload,
});
const UpdateBookingFailure = (payload) => ({
  type: bookingConstants.UPDATE_BOOKING_FAILURE,
  payload,
});
export const UpdateBooking = (booking) => (dispatch) => {
  dispatch({ type: bookingConstants.UPDATE_BOOKING_REQUEST });
  let { bookingId } = booking;
  return axios
    .put(`api/bookings/${bookingId}`, booking)
    .then((res) => {
      dispatch(UpdateBookingSuccess(res.data));
    })
    .catch((err) => {
      dispatch(UpdateBookingFailure(err));
    });
};

// Delete booking
const DeleteBookingSuccess = (payload) => ({
  type: bookingConstants.DELETE_BOOKING_SUCCESS,
  payload,
});
const DeleteBookingFailure = (payload) => ({
  type: bookingConstants.DELETE_BOOKING_FAILURE,
  payload,
});
export const DeleteBooking = (bookingId) => (dispatch) => {
  dispatch({ type: bookingConstants.DELETE_BOOKING_REQUEST });
  return axios
    .delete(`api/bookings/${bookingId}`)
    .then((res) => {
      dispatch(DeleteBookingSuccess(res.data));
    })
    .catch((err) => {
      dispatch(DeleteBookingFailure(err));
    });
};
