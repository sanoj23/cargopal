import React, { Component } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

import FormInput from '../components/form/formInput';

class SearchShipment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      to: '',
      from: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const criteria = { to: this.state.to, from: this.state.from };
    this.props.handleSearch(criteria);
  };

  handleReset = (event) => {
    event.preventDefault();
    this.setState({ to: '', from: '' });
    this.props.handleReset();
  };

  render() {
    return (
      <Form>
        <Row style={{ display: 'table' }}>
          <Col
            style={{
              display: 'table-cell',
              verticalAlign: 'middle',
              width: '50%',
            }}
          >
            <FormInput
              id="from"
              name="from"
              type="text"
              label="From"
              value={this.state.from}
              placeholder="Enter From"
              onChange={this.handleChange}
            />
          </Col>
          <Col style={{ display: 'table-cell', verticalAlign: 'middle' }}>
            <FormInput
              id="to"
              name="to"
              type="text"
              label="To"
              value={this.state.to}
              placeholder="Enter Destination"
              onChange={this.handleChange}
            />
          </Col>
          <Col style={{ display: 'table-cell', verticalAlign: 'middle' }}>
            <Button variant="outline-info" onClick={this.handleSubmit}>
              Search
            </Button>
          </Col>
          <Col style={{ display: 'table-cell', verticalAlign: 'middle' }}>
            <Button variant="outline-info" onClick={this.handleReset}>
              Reset
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default SearchShipment;
