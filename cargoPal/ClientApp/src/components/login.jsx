import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

import FormInput from './form/formInput';

const validationSchema = Yup.object().shape({
  userType: Yup.string(),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const requestLogin = (values) => {
  console.log(values);
  // Make API call from here on
};

export default function Login() {
  const userType = ['admin', 'client', 'agent'];
  return (
    <>
      <Formik
        initialValues={{ email: '', password: '', userType: '' }}
        onSubmit={(values) => requestLogin(values)}
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
            <h1>Log In</h1>
            <hr style={{ marginBottom: 25 }} />

            <FormInput
              autoFocus
              id="userType"
              name="userType"
              as="select"
              options={userType}
              label="User Type"
              onBlur={() => setFieldTouched('userType')}
              onChange={handleChange('userType')}
              errors={errors.userType}
              touched={touched.userType}
            />

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

            <Button variant="primary" onClick={handleSubmit}>
              Sign In
            </Button>

            <div style={{ marginTop: 50 }}>
              <p style={{ display: 'inline' }}>Dont have an account? {'  '}</p>
              <a href="/register">Sign Up</a>
              <br />
              <a href="/resetPassword">Forgot my password?</a>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
