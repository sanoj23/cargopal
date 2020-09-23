import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

import FormInput from './form/formInput';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const requestLogin = (values) => {
  console.log(values);
  // Make API call from here on
};

export default function Login() {
  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => requestLogin(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <Form
            style={{
              width: 600,
              padding: 50,
              backgroundColor: 'inherit',
            }}
          >
            <h1>Sign In</h1>
            <hr style={{ marginBottom: 25, backgroundColor: 'white' }} />

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

            <FormInput
              id="password"
              name="password"
              type="password"
              label="Password"
              placeholder="Enter password"
              onBlur={() => setFieldTouched('password')}
              onChange={handleChange('password')}
              errors={errors.password}
              touched={touched.password}
            />

            <FormInput
              id="remeberMe"
              name="rememberMe"
              type="checkbox"
              label="Remeber me"
            />

            <Button variant="dark" onClick={handleSubmit}>
              Sign In
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
