import React, { Component } from 'react';
import Screen from '../components/screen';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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

export default ProfileScreen;
