import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Table, Alert, Button } from 'react-bootstrap';
import Screen from '../../components/screen';
import BookingForm from '../../components/bookingform';

class BookingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shipmentId: 0,
      show: false,
    };
  }

  componentDidMount() {
    if (this.props.location.state) {
      this.setState({ shipmentId: this.props.location.state.shipmentId });
    } else {
      this.props.history.push('/shipments');
    }
  }

  handleClose = () => {
    this.setState({ show: false });
    this.props.history.push('/shipments');
  };

  renderAlert = (value) => {
    if (value === true) {
      this.setState({ show: true });
    }
  };

  render() {
    const packaging = [
      { size: 'small', minWeight: 0, maxWeight: 10, avgWeight: 5 },
      { size: 'medium', minWeight: 11, maxWeight: 50, avgWeight: 25 },
      { size: 'large', minWeight: 51, maxWeight: 100, avgWeight: 75 },
    ];

    return (
      <Screen title="Booking">
        {this.state.show ? (
          <>
            <Alert show={this.state.show} variant="success">
              <Alert.Heading>Booking Successful</Alert.Heading>
              <p>
                Your booking was successfully. Our agent will get back to you
                within 2 to 4 business days.
              </p>
              <hr />
              <div className="d-flex justify-content-end">
                <Button onClick={this.handleClose} variant="outline-success">
                  Close
                </Button>
              </div>
            </Alert>
          </>
        ) : null}

        {this.state.shipmentId !== 0 ? (
          <BookingForm
            shipmentId={this.state.shipmentId}
            alert={this.renderAlert}
          />
        ) : null}

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Size</th>
              <th>Minimum Weight</th>
              <th>Maximum Weight</th>
              <th>Average Weight</th>
            </tr>
          </thead>
          <tbody>
            {packaging.map((pkg) => (
              <tr key={pkg.size}>
                <td>{pkg.size}</td>
                <td>{pkg.minWeight}</td>
                <td>{pkg.maxWeight}</td>
                <td>{pkg.avgWeight}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Screen>
    );
  }
}

export default withRouter(BookingScreen);
