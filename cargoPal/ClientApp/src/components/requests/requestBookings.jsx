import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { getUserByUserId } from '../../actions/userAction';
// updtae booking

class RequestBooking extends Component {
  state = {
    booking: {},
    user: {},
  };

  componentDidMount() {
    this.props.getUserByUserId(this.props.booking.bookingId);
    this.setState({
      booking: this.props.booking,
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.users.data !== this.props.users.data) {
      this.setState({
        user: this.props.users.data,
      });
    }
  }

  handleAccept = () => {
    console.log('accepted', this.state.booking.bookingId);
  };
  handleReject = () => {
    console.log('rejected', this.state.booking.bookingId);
  };

  render() {
    const { bookingId, packaging, item, instructions } = this.state.booking;
    const { firstName, lastName } = this.state.user;
    return (
      <>
        <tr>
          <td>{bookingId}</td>
          <td>{firstName + ' ' + lastName}</td>
          <td>{packaging}</td>
          <td>{item}</td>
          <td>{instructions}</td>
          <td
            style={{ display: 'inline-block', margin: 'auto', width: '100%' }}
          >
            <Button
              style={{ marginRight: 2 }}
              onClick={this.handleAccept}
              variant="outline-success"
            >
              Accept
            </Button>
            <Button
              style={{ marginLeft: 2 }}
              onClick={this.handleReject}
              variant="outline-danger"
            >
              Reject
            </Button>
          </td>
        </tr>
      </>
    );
  }
}

const mapStateToProps = ({ users }) => ({ users });
export default connect(mapStateToProps, { getUserByUserId })(RequestBooking);
