import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Card, Button } from 'react-bootstrap';
import { getUserByUserId } from '../actions/userAction';

class Shipment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shipment: {},
      user: {},
    };
  }

  componentDidMount() {
    this.setState({ shipment: this.props.shipment });
    this.props.getUserByUserId(this.props.shipment.userId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.users.data !== this.props.users.data) {
      this.setState({ user: this.props.users.data });
    }
  }

  handleClick = () => {
    console.log('check');
    return <Redirect to="/booking" shipment={this.state.shipment} />;
  };

  render() {
    const {
      origin,
      destination,
      endDate,
      startDate,
      capacity,
    } = this.state.shipment;

    const { companyName } = this.state.user;
    return (
      <>
        <Card style={{ marginTop: 10, borderRadius: 10, overflow: 'hidden' }}>
          <Card.Body>
            <Card.Title>{companyName}</Card.Title>

            <Card.Text>
              To: <br />
              <b>{destination}</b> -{' '}
              <b>{new Date(endDate).toLocaleDateString()}</b>
            </Card.Text>
            <Card.Text>
              From: <br />
              <b>{origin}</b> -{' '}
              <b>{new Date(startDate).toLocaleDateString()}</b>
            </Card.Text>
            <Card.Text>
              Availability: <b>{capacity} </b>kg
            </Card.Text>

            <Button
              variant="outline-success"
              onClick={() =>
                this.props.history.push('/booking', this.state.shipment)
              }
            >
              Book Shipment
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

const mapStateToProps = ({ users }) => ({ users });

export default withRouter(
  connect(mapStateToProps, { getUserByUserId })(Shipment)
);
