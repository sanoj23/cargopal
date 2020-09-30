import React, { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

import FormInput from "./form/formInput";

class ContactUsForm extends Component {
  state = {};

  componentDidMount() {
    // get current logge in user details
  }

  componentDidUpdate(prevProps) {
    if (prevProps.auth.data !== this.auth.data) {
      this.setState({ user: this.auth.data });
    }
  }

  render() {
    const validationSchema = Yup.object().shape({
      name: Yup.string().required().label("Your Name"),
      email: Yup.string().required().email().label("Email"),
      subject: Yup.string().required().label().label("Subject"),
      message: Yup.string().required().label("Message"),
    });

    return (
      <>
        <Formik
          initialValues={{
            name: "",
            email: "",
            subject: "",
            message: "",
          }}
          //onSubmit={}
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
                padding: 50,
                backgroundColor: "white",
                display: "flex",
              }}
            >
              <div style={{ width: "50%" }}>
                <h1>Contact Us</h1>
                <hr style={{ marginBottom: 25 }} />

                <Row>
                  <Col>
                    <FormInput
                      autoFocus
                      id="Name"
                      name="Name"
                      type="text"
                      label="Your Name"
                      placeholder="Enter Your Name"
                      onBlur={() => setFieldTouched("Name")}
                      onChange={handleChange("Name")}
                      errors={errors.name}
                      touched={touched.name}
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
                      onBlur={() => setFieldTouched("email")}
                      onChange={handleChange("email")}
                      errors={errors.email}
                      touched={touched.email}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <FormInput
                      id="subject"
                      name="subject"
                      type="text"
                      label="Subject"
                      placeholder="Subject"
                      onBlur={() => setFieldTouched("subject")}
                      onChange={handleChange("subject")}
                      errors={errors.subject}
                      touched={touched.subject}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <FormInput
                      id="message"
                      name="message"
                      type="textArea"
                      label="Your Message"
                      placeholder="Write message "
                      onBlur={() => setFieldTouched("message")}
                      onChange={handleChange("message")}
                      errors={errors.message}
                      touched={touched.message}
                    />
                  </Col>
                </Row>
                <Button variant="primary" onClick={handleSubmit}>
                  Send
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </>
    );
  }
}

export default ContactUsForm;
