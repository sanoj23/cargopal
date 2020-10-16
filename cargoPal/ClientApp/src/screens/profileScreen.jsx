import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Screen from '../components/screen';

import { getUserId } from '../actions/authAction';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const user = getUserId();

    if (user === null) {
      this.props.history.push('/');
    } else {
      // get the user details here
    }
  }

  render() {
    return (
      <div>
        <Screen
          title="Profile Screen"
          subtitle="Your profile details are here"
        ></Screen>
      </div>
    );
  }
}

export default withRouter(ProfileScreen);
