import React, { Component } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { getUserId } from '../../actions/authAction';
import { AddShipment } from '../../actions/shipmentAction';

import Screen from '../../components/screen';

import FormInput from '../../components/form/formInput';

class AddShipmentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shipment: {
        userId: 0,
        origin: '',
        destination: '',
        startDate: null,
        endDate: null,
        capacity: 0,
        price: 0,
        status: '',
      },
      status: {},
      showSuccess: false,
      showFailure: false,
    };
  }

  componentDidMount() {
    const user = getUserId();
    if (user === null) {
      this.props.history.push('/');
    } else {
      const { shipment } = this.state;
      this.setState({
        shipment: { ...shipment, userId: user.userId, status: 'open' },
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.shipments.data !== this.props.shipments.data) {
      this.setState({ shipment: this.props.shipments.data });
    }
  }

  handleChange = (event) => {
    const { shipment } = this.state;
    this.setState({
      shipment: { ...shipment, [event.target.name]: event.target.value },
    });
  };

  handleSubmit = (values) => {
    console.log(values);
    this.props.AddShipment(values);

    if (this.props.shipments.error) {
      this.setState({ showFailure: true });
    } else {
      this.setState({ showSuccess: true });
    }
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
    const validationSchema = Yup.object().shape({
      origin: Yup.string().required().label('Origin'),
      destination: Yup.string().required().label('Destination'),
      startDate: Yup.date().required().label('Start Date'),
      endDate: Yup.date().required().label('End Date'),
      capacity: Yup.number().required().label('Capacity'),
      price: Yup.number().required().label('Price'),
    });

    let userId;
    const user = getUserId();
    if (user !== null) {
      userId = user.userId;
    } else {
      this.props.history.push('/');
    }

    const alertSuccess = (
      <>
        <Alert show={this.state.showSuccess} variant="success">
          <Alert.Heading>Shipment Created Successfully!</Alert.Heading>
          <p>Your shipment was created successfully.</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button
              onClick={() => {
                this.setState({ showSuccess: false });
                this.props.history.push('/schedule');
              }}
              variant="outline-success"
            >
              Close
            </Button>
          </div>
        </Alert>
      </>
    );

    const alertFailure = (
      <>
        <Alert show={this.state.showFailure} variant="danger">
          <Alert.Heading>Shipment Was Not Created Successfully!</Alert.Heading>
          <p>Your shipment was created successfully. Please try again.</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button
              onClick={() => {
                this.setState({ showFailure: false });
                window.location.reload();
              }}
              variant="outline-success"
            >
              Close
            </Button>
          </div>
        </Alert>
      </>
    );

    return (
      <Screen title="Add Shipment" subtitle="Please fill in the form">
        {alertSuccess}
        {alertFailure}

        <Formik
          initialValues={{
            userId: userId,
            origin: '',
            destination: '',
            startDate: null,
            endDate: null,
            capacity: '',
            price: '',
            status: 'open',
          }}
          onSubmit={(values) => this.handleSubmit(values)}
          onChange={(event) => this.handleChange(event)}
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
              <FormInput
                id="origin"
                name="origin"
                type="text"
                label="Origin"
                placeholder="Enter origin"
                onBlur={() => setFieldTouched('origin')}
                onChange={handleChange('origin')}
                errors={errors.origin}
                touched={touched.origin}
              />

              <FormInput
                id="destination"
                name="destination"
                type="text"
                label="Destination"
                placeholder="Enter destination"
                onBlur={() => setFieldTouched('destination')}
                onChange={handleChange('destination')}
                errors={errors.destination}
                touched={touched.destination}
              />

              <FormInput
                id="startDate"
                name="startDate"
                type="date"
                label="Start Date"
                placeholder="Enter start date"
                onBlur={() => setFieldTouched('startDate')}
                onChange={handleChange('startDate')}
                errors={errors.startDate}
                touched={touched.startDate}
              />

              <FormInput
                id="endDate"
                name="endDate"
                type="date"
                label="End Date"
                placeholder="Enter end date"
                onBlur={() => setFieldTouched('endDate')}
                onChange={handleChange('endDate')}
                errors={errors.endDate}
                touched={touched.endDate}
              />

              <FormInput
                id="capacity"
                name="capacity"
                type="number"
                label="Capacity"
                placeholder="Enter capacity"
                onBlur={() => setFieldTouched('capacity')}
                onChange={handleChange('capacity')}
                errors={errors.capacity}
                touched={touched.capacity}
              />

              <FormInput
                id="price"
                name="price"
                type="number"
                label="Price"
                placeholder="Enter price per kilo"
                onBlur={() => setFieldTouched('price')}
                onChange={handleChange('price')}
                errors={errors.price}
                touched={touched.price}
              />

              <Button variant="dark" onClick={handleSubmit}>
                Add Shipment
              </Button>
            </Form>
          )}
        </Formik>
      </Screen>
    );
  }
}

const mapStateToProps = ({ shipments }) => ({ shipments });

export default withRouter(
  connect(mapStateToProps, { AddShipment })(AddShipmentScreen)
);
