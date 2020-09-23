import axios from 'axios';
import { shipmentsConstants } from '../constants/shipmentConstants';

// get all shipments
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

// get shipment by Id
// get shipment by user Id
// Update shipment
// delete shipment
