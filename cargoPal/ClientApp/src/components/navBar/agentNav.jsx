import React, { useState } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';

export default function AgentNav(props) {
  return (
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/orders">Orders</Nav.Link>
      <Nav.Link href="/schedule">Schedule</Nav.Link>
      <Nav.Link href="/requests">Requests</Nav.Link>

      <NavDropdown title="Account" id="basic-nav-dropdown">
        <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
        <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/">Logout</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}
