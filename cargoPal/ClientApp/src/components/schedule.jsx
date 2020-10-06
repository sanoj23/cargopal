import React, { Component } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import FormInput from './form/formInput';

class Shedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: {},
      status: '',
    };
  }
  componentDidMount() {
    this.setState({ schedule: this.props.Schedule });
  }

  componentDidUpdate(prevProps) {}

  handleChange = (event) => {
    let { status } = this.state;
    this.setState({
      status: { ...status, [event.target.name]: event.target.value },
    });
    // make call here
  };

  handleDelete = () => {
    const shipmentID = this.state.schedule.shipmentId;
    this.props.onDelete(shipmentID);
  };

  render() {
    const {
      origin,
      destination,
      capacity,
      startDate,
      endDate,
    } = this.state.schedule;

    const statuses = [
      'Customs Cleared Local',
      'Processing',
      'Boarding',
      'Shipped',
      'Arrived at Destination',
      'Customs Cleared Destination',
      'Ready for Pickup',
    ];

    return (
      <div style={{ marginTop: 5, marginBottom: 5 }}>
        <Card style={{ width: '100%', borderRadius: 20 }}>
          <Card.Body>
            <div style={{ display: 'flex' }}>
              <Card.Title>
                {origin} - {destination}
              </Card.Title>
              <Button
                variant="danger"
                style={{ margin: 3, float: 'right', marginRight: 0 }}
                onClick={this.handleDelete}
              >
                Delete
              </Button>
            </div>

            <hr />

            <div>
              <Card.Text>
                Capacity: <b>{capacity}</b> Available: <b>{capacity}</b>
              </Card.Text>
              <div style={{ display: 'flex' }}>
                <Card.Text>
                  Departure: <b>{origin}</b> <br /> On:
                  <b>{new Date(startDate).toLocaleDateString()}</b>
                </Card.Text>

                <Card.Text style={{ marginLeft: 20 }}>
                  Arrival: <b>{destination}</b> <br />
                  On:
                  <b>{new Date(endDate).toLocaleDateString()}</b>
                </Card.Text>
              </div>
            </div>

            <div style={{ float: 'right' }}>
              <Row>
                <Col>
                  <FormInput
                    id="status"
                    name="status"
                    type="text"
                    label="Status"
                    placeholder="Status"
                    as="select"
                    options={statuses}
                    onChange={this.handleChange}
                  />
                </Col>
                {/* <Col>
                  
                </Col> */}
              </Row>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Shedule;
