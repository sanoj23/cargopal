import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { GetBookingById } from '../actions/bookingAction';

import FormInput from './form/formInput';

class Tracking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booking: {},
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.bookings.data !== this.props.bookings.data) {
      this.setState({ booking: this.props.bookings.data });
      if (!this.props.bookings.error && this.state.booking) {
        this.props.func(this.props.bookings.data);
      }
    }
  }

  componentWillUnmount() {
    this.setState({ booking: null });
  }

  track = ({ trackingNumber }) => {
    this.props.GetBookingById(trackingNumber);
  };

  returnValues = () => {};

  render() {
    const validationSchema = Yup.object().shape({
      trackingNumber: Yup.string()
        .required()
        .min(1)
        .max(7)
        .label('Tracking Number'),
    });
    return (
      <>
        <Formik
          initialValues={{ trackingNumber: '' }}
          onSubmit={(values) => this.track(values)}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched,
          }) => (
            <Form>
              <FormInput
                id="trackingNumber"
                name="trackingNumber"
                type="number"
                label="Booking Number:"
                placeholder="Enter Booking Number"
                onBlur={() => setFieldTouched('trackingNumber')}
                onChange={handleChange('trackingNumber')}
                errors={errors.trackingNumber}
                touched={touched.trackingNumber}
              />

              <Button variant="secondary" onClick={handleSubmit}>
                Track Booking
              </Button>
            </Form>
          )}
        </Formik>
      </>
    );
  }
}

const mapStateToProps = ({ bookings }) => ({ bookings });
export default connect(mapStateToProps, { GetBookingById })(Tracking);
