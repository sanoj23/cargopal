import React, { Component } from 'react';
import Screen from '../../components/screen';

class ShipmentsScreen extends Component {
  state = {
    shipments: [],
  };

  componentDidMount() {
    // get all shipments from all agents where the status is available
  }

  componentDidUpdate() {
    // update the state with the new shipments
  }

  render() {
    const { shipments } = this.state;

    return (
      <Screen
        title="View Availbale Shipments"
        subtitle="The user can select the shipment and agent here."
      >
        {/* {Shipment compoenents will rendered here with their prices and all } */}
        {shipments.map((shipment) => console.log(shipment))}
      </Screen>
    );
  }
}

export default ShipmentsScreen;
