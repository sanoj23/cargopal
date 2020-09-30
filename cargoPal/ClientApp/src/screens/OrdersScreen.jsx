import React, { Component } from 'react';
import { connect } from 'react-redux';

import Screen from '../components/screen';
import OrderShipment from '../components/orders/orderShipment';

import { GetShipmentByUser } from '../actions/shipmentAction';

class OrdersScreen extends Component {
  state = {
    shipments: [],
  };

  componentDidMount() {
    this.props.GetShipmentByUser();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.shipments.data !== this.props.shipments.data) {
      this.setState({ shipments: this.props.shipments.data });
    }
  }

  render() {
    const { shipments } = this.state;

    return (
      <Screen title="View Orders" subtitle="List of approved customer orders.">
        {shipments &&
          shipments.map((shipment) => (
            <OrderShipment key={shipment.shipmentId} shipment={shipment} />
          ))}
      </Screen>
    );
  }
}

const mapStateToProps = ({ shipments }) => ({ shipments });

export default connect(mapStateToProps, {
  GetShipmentByUser,
})(OrdersScreen);
