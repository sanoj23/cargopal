import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

import FormInput from './form/formInput';

// import { connect } from 'react-redux';
// import { getAuthUser } from '../actions/authAction';

class BookingForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    // get current logge in user details
  }

  componentDidUpdate(prevProps) {
    if (prevProps.auth.data !== this.auth.data) {
      this.setState({ user: this.auth.data });
    }
  }

  render() {
    const phoneRegex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const validationSchema = Yup.object().shape({
      item: Yup.string().required().label('Item Name'),
      //packaging: Yup.string().required().label('Packaging'),
      instructions: Yup.string().label('Special Instructions'),
      Name: Yup.string().required().label('Full Name'),

      email: Yup.string().required().email().label('Email'),
      phone: Yup.string()
        .required()
        .min(3)
        .max(20)
        .label('Phone')
        .matches(phoneRegex, 'Phone number is not valid'),
    });

    const requestBooking = (values) => {
      console.log(values);
      // Make API call from here on
    };

    return (
      <Formik
        initialValues={{
          item: '',
          instructions: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
        }}
        onSubmit={(values) => requestBooking(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <Form
            style={{
              padding: 50,
              backgroundColor: 'white',
              display: 'flex',
            }}
          >
            <div style={{ width: '50%' }}>
              <h1> Customer Details</h1>
              <hr style={{ marginBottom: 25 }} />

              <Row>
                <Col>
                  <FormInput
                    autoFocus
                    id="Name"
                    name="Name"
                    type="text"
                    label="Full Name"
                    placeholder="Enter receiver's name"
                    onBlur={() => setFieldTouched('Name')}
                    onChange={handleChange('Name')}
                    errors={errors.firstName}
                    touched={touched.firstName}
                  />
                </Col>
              </Row>

              <FormInput
                id="address"
                name="address"
                type="address"
                label="Address"
                placeholder="Enter receiver's address"
                onBlur={() => setFieldTouched('address')}
                onChange={handleChange('address')}
                errors={errors.address}
                touched={touched.address}
              />

              <Row>
                <Col>
                  <FormInput
                    id="email"
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="Enter email"
                    onBlur={() => setFieldTouched('email')}
                    onChange={handleChange('email')}
                    errors={errors.email}
                    touched={touched.email}
                  />
                </Col>
                <Col>
                  <FormInput
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    id="phone"
                    name="phone"
                    type="tel"
                    label="Phone"
                    placeholder="Enter phone number"
                    onBlur={() => setFieldTouched('phone')}
                    onChange={handleChange('phone')}
                    errors={errors.phone}
                    touched={touched.phone}
                  />
                </Col>
              </Row>
            </div>

            <div
              style={{
                borderLeft: '2px solid lightGrey',
                height: 'auto',
                marginRight: 25,
                marginLeft: 25,
              }}
            ></div>

            <div style={{ width: '50%' }}>
              <h1>Booking Form</h1>
              <hr style={{ marginBottom: 25 }} />

              <FormInput
                id="item"
                name="item"
                type="item"
                label="Item"
                placeholder="Enter Item"
                onBlur={() => setFieldTouched('item')}
                onChange={handleChange('item')}
                errors={errors.item}
                touched={touched.item}
              />

              <FormInput
                id="instructions"
                name="instructions"
                type="instructions"
                label="instructions"
                placeholder="Enter instructions"
                onBlur={() => setFieldTouched('instructions')}
                onChange={handleChange('instructions')}
                errors={errors.instructions}
                touched={touched.instructions}
              />

              <Button variant="primary" onClick={handleSubmit}>
                Book
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    );
  }
}
// const mapStateToProps = ({ auth }) => ({ auth });

// export default connect(mapStateToProps, getAuthUser)(Booking);
export default BookingForm;
