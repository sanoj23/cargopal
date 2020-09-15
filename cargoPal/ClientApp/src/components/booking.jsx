import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

import FormInput from './form/formInput';

const validationSchema = Yup.object().shape({
  item: Yup.string().required().label('Item Name'),
  packaging: Yup.string().required().label('Packaging'),
  instructions: Yup.string().label('Special Instructions'),
});

const requestBooking = (values) => {
  console.log(values);
  // Make API call from here on
};

export default function Booking() {
  return (
    <>
      <Formik
        initialValues={{ item: '', packaging: '', instructions: '' }}
        onSubmit={(values) => requestBooking(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <Form
            style={{
              width: 600,
              padding: 50,
              backgroundColor: 'white',
            }}
          >
            <h1>Booking</h1>
            <hr style={{ marginBottom: 25 }} />

            <div style={{ borderStyle: 'solid', margin: 20 }}>
              <h2>Client Details</h2>
              {/* TODO: // details of logged in user */}
            </div>
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
          </Form>
        )}
      </Formik>
    </>
  );
}
