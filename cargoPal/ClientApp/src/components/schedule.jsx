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
    // const {
    //   origin,
    //   destination,
    //   capacity,
    //   startDate,
    //   endDate,
    // } = this.props.Schedule;

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
            <Card.Title>
              {origin} - {destination}
            </Card.Title>
            <hr />
            <div>
              <Card.Text>
                Capacity: <b>{capacity}</b> Available: <b>{capacity}</b>
              </Card.Text>

              <Card.Text style={{ display: 'flex' }}>
                <div style={{ marginRight: 30 }}>
                  Departure: <b>{origin}</b> <br /> On:
                  <b>{new Date(startDate).toLocaleDateString()}</b>
                </div>

                <div>
                  Arrival: <b>{destination}</b> <br />
                  On:
                  <b>{new Date(endDate).toLocaleDateString()}</b>
                </div>
              </Card.Text>
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
                <Col>
                  <Button
                    variant="danger"
                    style={{ margin: 3 }}
                    onClick={() => console.log('Deleted')}
                  >
                    Delete{' '}
                  </Button>
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Shedule;
