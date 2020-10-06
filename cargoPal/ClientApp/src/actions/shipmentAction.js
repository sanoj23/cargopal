import axios from 'axios';
import { shipmentsConstants } from '../constants/shipmentConstants';
import { getUserId } from '../actions/authAction';

// Get all shipments
const GetShipmentSuccess = (payload) => ({
  type: shipmentsConstants.GET_SHIPMENTS_SUCCESS,
  payload,
});
const GetShipmentFailure = (payload) => ({
  type: shipmentsConstants.GET_SHIPMENTS_FAILURE,
  payload,
});
export const GetShipment = () => (dispatch) => {
  dispatch({ type: shipmentsConstants.GET_SHIPMENTS_REQUEST });
  return axios
    .get('api/shipments')
    .then((res) => {
      dispatch(GetShipmentSuccess(res.data));
    })
    .catch((err) => {
      dispatch(GetShipmentFailure(err));
    });
};

// Get shipment by Id
const GetShipmentByIdSuccess = (payload) => ({
  type: shipmentsConstants.SHIPMENTS_BY_ID_SUCCESS,
  payload,
});
const GetShipmentByIdFailure = (payload) => ({
  type: shipmentsConstants.SHIPMENTS_BY_ID_FAILURE,
  payload,
});
export const GetShipmentById = (shipmentId) => (dispatch) => {
  dispatch({ type: shipmentsConstants.SHIPMENTS_BY_ID_REQUEST });
  return axios
    .get(`api/shipments/${shipmentId}`)
    .then((res) => {
      dispatch(GetShipmentByIdSuccess(res.data));
    })
    .catch((err) => {
      dispatch(GetShipmentByIdFailure(err));
    });
};

// Get shipment by user Id
const GetShipmentByUserSuccess = (payload) => ({
  type: shipmentsConstants.SHIPMENTS_BY_USER_SUCCESS,
  payload,
});
const GetShipmentByUserFailure = (payload) => ({
  type: shipmentsConstants.SHIPMENTS_BY_USER_FAILURE,
  payload,
});
export const GetShipmentByUser = () => (dispatch) => {
  dispatch({ type: shipmentsConstants.SHIPMENTS_BY_USER_REQUEST });
  const { userId } = getUserId();

  return axios
    .get(`api/shipments/user/${userId}`)
    .then((res) => {
      dispatch(GetShipmentByUserSuccess(res.data));
    })
    .catch((err) => {
      dispatch(GetShipmentByUserFailure(err));
    });
};

// Add new shipment
const AddShipmentSuccess = (payload) => ({
  type: shipmentsConstants.ADD_SHIPMENTS_SUCCESS,
  payload,
});
const AddShipmentFailure = (payload) => ({
  type: shipmentsConstants.ADD_SHIPMENTS_FAILURE,
  payload,
});
export const AddShipment = (shipment) => (dispatch) => {
  dispatch({ type: shipmentsConstants.ADD_SHIPMENTS_REQUEST });
  return axios
    .post(`api/shipments/`, shipment)
    .then((res) => {
      dispatch(AddShipmentSuccess(res.data));
    })
    .catch((err) => {
      dispatch(AddShipmentFailure(err));
      console.log({ err });
    });
};

// Update shipment
const UpdateShipmentSuccess = (payload) => ({
  type: shipmentsConstants.UPDATE_SHIPMENTS_SUCCESS,
  payload,
});
const UpdateShipmentFailure = (payload) => ({
  type: shipmentsConstants.UPDATE_SHIPMENTS_FAILURE,
  payload,
});
export const UpdateShipment = (shipment) => (dispatch) => {
  dispatch({ type: shipmentsConstants.UPDATE_SHIPMENTS_REQUEST });
  let { shipmentId } = shipment;
  return axios
    .put(`api/shipments/${shipmentId}`, shipment)
    .then((res) => {
      dispatch(UpdateShipmentSuccess(res.data));
    })
    .catch((err) => {
      dispatch(UpdateShipmentFailure(err));
    });
};

// Delete shipment
const DeleteShipmentSuccess = (payload) => ({
  type: shipmentsConstants.DELETE_SHIPMENTS_SUCCESS,
  payload,
});
const DeleteShipmentFailure = (payload) => ({
  type: shipmentsConstants.DELETE_SHIPMENTS_FAILURE,
  payload,
});
export const DeleteShipment = (shipmentId) => (dispatch) => {
  dispatch({ type: shipmentsConstants.DELETE_SHIPMENTS_REQUEST });
  return axios
    .delete(`api/shipments/${shipmentId}`)
    .then((res) => {
      dispatch(DeleteShipmentSuccess(res.data));
    })
    .catch((err) => {
      dispatch(DeleteShipmentFailure(err));
    });
};
