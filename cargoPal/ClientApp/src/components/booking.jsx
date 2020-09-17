import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

import FormInput from './form/formInput';

const phoneRegex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationSchema = Yup.object().shape({
  item: Yup.string().required().label('Item Name'),
  packaging: Yup.string().required().label('Packaging'),
  instructions: Yup.string().label('Special Instructions'),
  firstName: Yup.string().required().label('First Name'),
  lastName: Yup.string().required().label('Last Name'),
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

export default function Booking() {
  return (
    <Formik
      initialValues={{
        item: '',
        packaging: '',
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
                  id="firstName"
                  name="firstName"
                  type="text"
                  label="First Name"
                  placeholder="Enter first name"
                  onBlur={() => setFieldTouched('firstName')}
                  onChange={handleChange('firstName')}
                  errors={errors.firstName}
                  touched={touched.firstName}
                />
              </Col>
              <Col>
                <FormInput
                  id="lastName"
                  name="lastName"
                  type="text"
                  label="Last Name"
                  placeholder="Enter last name"
                  onBlur={() => setFieldTouched('lastName')}
                  onChange={handleChange('lastName')}
                  errors={errors.lastName}
                  touched={touched.lastName}
                />
              </Col>
            </Row>

            <FormInput
              id="destination"
              name="destination"
              type="destination"
              label="Destination"
              placeholder="Enter destination"
              onBlur={() => setFieldTouched('destination')}
              onChange={handleChange('destination')}
              errors={errors.destination}
              touched={touched.destination}
            />

            <FormInput
              id="address"
              name="address"
              type="address"
              label="Address"
              placeholder="Enter address"
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
              id="packaging"
              name="packaging"
              type="packaging"
              label="packaging"
              placeholder="Enter packaging"
              onBlur={() => setFieldTouched('packaging')}
              onChange={handleChange('packaging')}
              errors={errors.packaging}
              touched={touched.packaging}
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
