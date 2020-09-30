import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import FormInput from './form/formInput';

import { loginUser, logoutUser } from '../actions/authAction';

class Login extends Component {
  constructor(props) {
    super(props);
    this.requestChange = this.requestChange.bind(this);
    this.requestLogin = this.requestLogin.bind(this);

    this.state = {
      email: '',
      password: '',
      status: {},
    };
  }

  requestLogin = (values) => {
    this.props.loginUser(values);
  };

  requestChange = (event) => {
    let { user } = this.state;
    this.setState({
      user: { ...user, [event.target.name]: event.target.value },
    });
  };

  componentDidMount() {
    this.props.logoutUser();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.auth.data !== this.props.auth.data) {
      this.setState({ status: this.props.auth.data });
    }

    if (this.state.status.token) {
      this.props.history.push('/home');
    }
  }

  render() {
    const validationSchema = Yup.object().shape({
      email: Yup.string().required().email().label('Email'),
      password: Yup.string().required().min(4).label('Password'),
    });

    return (
      <>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => this.requestLogin(values)}
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

              <Button variant="dark" onClick={handleSubmit}>
                Sign In
              </Button>
            </Form>
          )}
        </Formik>
      </>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
  loginUser: (user) => dispatch(loginUser(user)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
