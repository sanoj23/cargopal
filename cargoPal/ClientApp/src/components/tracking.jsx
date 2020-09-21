import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormInput from './form/formInput';

const validationSchema = Yup.object().shape({
  trackingNumber: Yup.string().required().min(1).max(7).label('Email'),
});

export default function Tracking({ track }) {
  return (
    <>
      <Formik
        initialValues={{ trackingNumber: '' }}
        onSubmit={(values) => track(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <Form>
            <FormInput
              id="trackingNumber"
              name="trackingNumber"
              type="trackingNumber"
              label="Tracking Number:"
              placeholder="Enter Tracking Number"
              onBlur={() => setFieldTouched('trackingNumber')}
              onChange={handleChange('trackingNumber')}
              errors={errors.trackingNumber}
              touched={touched.trackingNumber}
            />

            <Button variant="primary" onClick={handleSubmit}>
              Track
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
