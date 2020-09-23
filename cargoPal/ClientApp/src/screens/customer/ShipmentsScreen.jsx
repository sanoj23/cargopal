import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Screen from '../../components/screen';
import Shipment from '../../components/shipment';

import { connect } from 'react-redux';

import { GetShipment } from '../../actions/shipmentAction';

class ShipmentsScreen extends Component {
  state = {
    shipments: [],
  };

  componentDidMount() {
    this.props.GetShipment();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.shipments.data !== this.props.shipments.data) {
      this.setState({ shipments: this.props.shipments.data });
    }
  }

  render() {
    const { shipments } = this.state;
    console.log(shipments);
    return (
      <Screen
        title="View Availbale Shipments"
        subtitle="The user can select the shipment and agent here."
      >
        <Container>
          <Row>
            {shipments.map((shipment) => (
              <Col sm={3} key={shipment.shipmentId}>
                <Shipment key={shipment} shipment={shipment} />
              </Col>
            ))}
          </Row>
        </Container>
      </Screen>
    );
  }
}

const mapStateToProps = ({ shipments }) => ({ shipments });

export default connect(mapStateToProps, { GetShipment })(ShipmentsScreen);
