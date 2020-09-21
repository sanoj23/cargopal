import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Screen from '../../components/screen';
import Shipment from '../../components/shipment';

import { Shipments } from '../../fakeData';

class ShipmentsScreen extends Component {
  state = {
    shipments: [],
  };

  componentDidMount() {
    // get all shipments from all agents where the status is available
    this.setState({ shipments: Shipments });
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
        <Container>
          <Row>
            {shipments.map((shipment) => (
              <Col sm={3}>
                <Shipment key={shipment.shipmentId} shipment={shipment} />
              </Col>
            ))}
          </Row>
        </Container>
      </Screen>
    );
  }
}

export default ShipmentsScreen;
