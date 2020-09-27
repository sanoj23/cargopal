import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Screen from '../../components/screen';
import Shipment from '../../components/shipment';

import { connect } from 'react-redux';

import { GetShipment } from '../../actions/shipmentAction';
import SearchShipment from '../../components/searchShipments';

class ShipmentsScreen extends Component {
  state = {
    shipments: [],
    search: [],
  };

  componentDidMount() {
    this.props.GetShipment();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.shipments.data !== this.props.shipments.data) {
      this.setState({ shipments: this.props.shipments.data });
    }
  }

  handleSearch = ({ to, from }) => {
    console.log({ to, from });
    const shipments = this.state.shipments;

    this.setState({
      search: shipments.filter(
        (shipment) => shipment.origin === from && shipment.destination === to
      ),
    });
  };

  handleReset = () => {
    this.setState({ search: [] });
  };

  render() {
    const { shipments, search } = this.state;

    return (
      <Screen
        title="View Availbale Shipments"
        subtitle="The user can select the shipment and agent here."
      >
        <SearchShipment
          handleSearch={this.handleSearch}
          handleReset={this.handleReset}
        />
        <hr />
        <Container>
          <Row>
            {search.length > 0 &&
              search.map((search) => (
                <Col sm={3} key={search.shipmentId}>
                  <Shipment key={search} shipment={search} />
                </Col>
              ))}
          </Row>
          <Row>
            {search.length <= 0 &&
              shipments.map((shipment) => (
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
