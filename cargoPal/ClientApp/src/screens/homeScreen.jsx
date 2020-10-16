import React from 'react';

import { Button, Carousel, Jumbotron } from 'react-bootstrap';
import Screen from '../components/screen';

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
    </Screen>
  );
}
