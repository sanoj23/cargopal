import React from 'react';
import { Button, Carousel, Jumbotron } from 'react-bootstrap';
import Screen from '../components/screen';

// import ContactUsForm from '../components/ContactUsForm';

export default function HomeScreen(props) {
  return (
    <Screen title="Home">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../assets/commons/LandingImage.jpg')}
            alt="First slide"
            height={500}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../assets/commons/background.jpeg')}
            alt="Third slide"
            height={500}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Jumbotron>
        <h1>Cargo Pal</h1>
        <p>The simplest and easiest way to manage your cargo</p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>

      {/* <ContactUsForm /> */}

      {/* <Card border="info">
        <Card.Header textSize="large">Contact Us</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group controlId="contactUs.ControlTextarea1">
              <Form.Label>Your Name</Form.Label>
              <Form.Control as="textarea" rows="1" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="contactUs.ControlTextarea1">
              <Form.Label>Subject</Form.Label>
              <Form.Control as="textarea" rows="2" />
            </Form.Group>

            <Form.Group controlId="contactUsForm.ControlTextarea2">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows="10" />
            </Form.Group>
          </Form>
          <p>
            <Button variant="primary" onClick={() => {}}>
              Send
            </Button>
          </p>
        </Card.Body>
      </Card> */}
    </Screen>
  );
}
