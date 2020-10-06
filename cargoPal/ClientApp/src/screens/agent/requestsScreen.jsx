import React, { Component } from 'react';
import { connect } from 'react-redux';

import Screen from '../../components/screen';
import Request from '../../components/requests/request';

import { GetShipmentByUser } from '../../actions/shipmentAction';

class RequestsScreen extends Component {
  state = {
    shipments: [],
  };

  componentDidMount() {
    this.props.GetShipmentByUser();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.shipments.data !== this.props.shipments.data) {
      this.setState({
        shipments: this.props.shipments.data.filter((s) => s.status === 'open'),
      });
    }
  }
  render() {
    const { shipments } = this.state;
    return (
      <Screen title="Customer Requests" subtitle="List of Customer Requests.">
        {shipments &&
          shipments.map((shipment) => (
            <Request key={shipment.shipmentId} shipment={shipment} />
          ))}
      </Screen>
    );
  }
}

const mapStateToProps = ({ shipments }) => ({ shipments });

export default connect(mapStateToProps, {
  GetShipmentByUser,
})(RequestsScreen);
