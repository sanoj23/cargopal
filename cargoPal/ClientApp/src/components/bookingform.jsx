import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

import FormInput from './form/formInput';

import { connect } from 'react-redux';

import { packaging } from '../constants/general';
import { getUserId } from '../actions/authAction';
import { AddBooking } from '../actions/bookingAction';

class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.requestChange = this.requestChange.bind(this);
    this.requestBooking = this.requestBooking.bind(this);

    this.state = {
      booking: {
        userId: 0,
        shipmentId: 0,
        receiverName: '',
        receiverPhone: '',
        receiverAddress: '',
        item: '',
        instructions: '',
        packaging: '',
        status: '',
      },
      error: {},
      packages: [],
    };
  }

  requestBooking = (values) => {
    this.props.AddBooking(values);
    if (!this.props.bookings.error) {
      this.props.alert(true);
    }
  };

  requestChange = (event) => {
    let { boooking } = this.state;
    this.setState({
      boooking: { ...boooking, [event.target.name]: event.target.value },
    });
  };

  componentDidMount() {
    let array = [];
    packaging.forEach((element) => {
      array.push(element.size);
    });
    this.setState({ packages: array });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.bookings.data !== this.props.bookings.data) {
      this.setState({ error: this.props.bookings.error });
    }
  }

  render() {
    const validationSchema = Yup.object().shape({
      receiverName: Yup.string().required().label('Receiver Name'),
      receiverPhone: Yup.string().required().label('Receiver Phone'),
      receiverAddress: Yup.string().required().label('Receiver Address'),
      item: Yup.string().required().label('Item'),
      instructions: Yup.string().required().label('Instructions'),
      packaging: Yup.string().required().label('Packaging'),
    });

    return (
      <>
        <Formik
          initialValues={{
            userId: getUserId().userId,
            shipmentId: this.props.shipmentId,
            receiverName: '',
            receiverPhone: '',
            receiverAddress: '',
            item: '',
            instructions: '',
            packaging: '',
            status: 'pending',
          }}
          onSubmit={(values) => this.requestBooking(values)}
          onChange={(event) => this.requestChange(event)}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched,
          }) => (
            <Form
              style={{
                padding: 50,
                backgroundColor: 'inherit',
              }}
            >
              <Row>
                <Col>
                  <h1>Receiver Details</h1>
                  <hr style={{ marginBottom: 25, backgroundColor: 'white' }} />
                  <FormInput
                    id="receiverName"
                    name="receiverName"
                    type="text"
                    label="Receiver Name"
                    placeholder="Enter receiver name"
                    onBlur={() => setFieldTouched('receiverName')}
                    onChange={handleChange('receiverName')}
                    errors={errors.receiverName}
                    touched={touched.receiverName}
                  />
                  <FormInput
                    id="receiverPhone"
                    name="receiverPhone"
                    type="text"
                    label="Receiver Phone"
                    placeholder="Enter receiver phone"
                    onBlur={() => setFieldTouched('receiverPhone')}
                    onChange={handleChange('receiverPhone')}
                    errors={errors.receiverPhone}
                    touched={touched.receiverPhone}
                  />
                  <FormInput
                    id="receiverAddress"
                    name="receiverAddress"
                    type="text"
                    label="Receiver Address"
                    placeholder="Enter receiver address"
                    onBlur={() => setFieldTouched('receiverAddress')}
                    onChange={handleChange('receiverAddress')}
                    errors={errors.receiverAddress}
                    touched={touched.receiverAddress}
                  />
                </Col>

                <div
                  style={{ borderLeft: '2px solid grey', height: 'auto' }}
                ></div>
                <Col>
                  <h1>Booking Details</h1>
                  <hr style={{ marginBottom: 25, backgroundColor: 'white' }} />
                  <FormInput
                    id="item"
                    name="item"
                    type="text"
                    label="Item"
                    placeholder="Enter item(s)"
                    onBlur={() => setFieldTouched('item')}
                    onChange={handleChange('item')}
                    errors={errors.item}
                    touched={touched.item}
                  />
                  <FormInput
                    id="instructions"
                    name="instructions"
                    as="select"
                    options={['fragile', 'not fragile']}
                    label="Instructions"
                    placeholder="Enter instructions"
                    onBlur={() => setFieldTouched('instructions')}
                    onChange={handleChange('instructions')}
                    errors={errors.instructions}
                    touched={touched.instructions}
                  />

                  <FormInput
                    id="packaging"
                    name="packaging"
                    as="select"
                    label="Packaging"
                    options={this.state.packages}
                    placeholder="Enter packaging"
                    onBlur={() => setFieldTouched('packaging')}
                    onChange={handleChange('packaging')}
                    errors={errors.packaging}
                    touched={touched.packaging}
                  />

                  <Button
                    variant="dark"
                    onClick={handleSubmit}
                    style={{ float: 'right' }}
                  >
                    Book
                  </Button>
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
      </>
    );
  }
}

const mapStateToProps = ({ bookings }) => ({ bookings });
export default withRouter(
  connect(mapStateToProps, { AddBooking })(BookingForm)
);
