import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Button, Col, Form, Row } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { RegisterUser } from '../../actions/authAction';
import FormInput from '../form/formInput';

class RegisterAgent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate(prevProps) {
    if (prevProps.auth.data !== this.props.auth.data) {
      this.setState({ status: this.props.auth.data });
    }

    if (this.state.status) {
      this.props.alert();
    }
  }

  requestChange = (event) => {
    let { user } = this.state;
    this.setState({
      user: { ...user, [event.target.name]: event.target.value },
    });
  };

  requestRegister = (values) => {
    this.setState({ status: null });
    this.props.RegisterUser(values);
  };

  componentWillUnmount() {
    this.setState({ user: null, status: null });
  }

  render() {
    const phoneRegex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const validationSchema = Yup.object().shape({
      name: Yup.string().required().label('Company Name'),
      address: Yup.string().required().label('Company Address'),
      email: Yup.string().required().email().label('Email'),
      phone: Yup.string()
        .required()
        .min(3)
        .max(20)
        .label('Phone')
        .matches(phoneRegex, 'Phone number is not valid'),
      password: Yup.string().required().min(4).label('Password'),
      confirmPassword: Yup.string()
        .required()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .label('Confirm Passowrd'),
    });

    return (
      <>
        <Formik
          initialValues={{
            name: '',
            address: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
            userType: 'Agent',
          }}
          onSubmit={(values) => this.requestRegister(values)}
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
              style={{ backgroundColor: 'inherit', padding: 50, width: 600 }}
            >
              <Row>
                <Col>
                  <FormInput
                    autoFocus
                    id="name"
                    name="name"
                    type="text"
                    label="Company Name"
                    placeholder="Enter company name"
                    onBlur={() => setFieldTouched('name')}
                    onChange={handleChange('name')}
                    errors={errors.name}
                    touched={touched.name}
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <FormInput
                    autoFocus
                    id="address"
                    name="address"
                    type="text"
                    label="Company Address"
                    placeholder="Enter company address"
                    onBlur={() => setFieldTouched('address')}
                    onChange={handleChange('address')}
                    errors={errors.address}
                    touched={touched.address}
                  />
                </Col>
              </Row>

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
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                label="Confirm Password"
                placeholder="Re-enter Password"
                onBlur={() => setFieldTouched('confirmPassword')}
                onChange={handleChange('confirmPassword')}
                errors={errors.confirmPassword}
                touched={touched.confirmPassword}
              />

              <Button variant="primary" onClick={handleSubmit}>
                Register
              </Button>

              <a
                href="/"
                style={{
                  float: 'right',
                  marginTop: 10,
                  color: 'white',
                  size: 'large',
                }}
              >
                I have an account already
              </a>
            </Form>
          )}
        </Formik>
      </>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });
export default withRouter(
  connect(mapStateToProps, { RegisterUser })(RegisterAgent)
);
