import React from 'react';
import {
  Button,
  Nav,
  Navbar,
  Form,
  FormControl,
  NavDropdown,
} from 'react-bootstrap';

export default function Navigationbar(props) {
  return (
    <Navbar bg="white" expand="lg" sticky="top">
      <Navbar.Brand href="/home">CargoPal</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/tracking">Tracking</Nav.Link>
          <Nav.Link href="/booking">Booking</Nav.Link>
          <Nav.Link href="/shipments">Shipments</Nav.Link>
          <Nav.Link href="/orders">Orders</Nav.Link>
          <Nav.Link href="/schedule">Schedule</Nav.Link>
          <Nav.Link href="/requests">Requests</Nav.Link>

          <NavDropdown title="Account" id="basic-nav-dropdown">
            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
