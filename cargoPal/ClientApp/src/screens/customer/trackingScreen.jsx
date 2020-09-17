import React from 'react';

import Screen from '../../components/screen';
import Tracking from '../../components/tracking';

export default function TrackingScreen(props) {
  return (
    <Screen title="Tracking">
      <div
        style={{ borderStyle: 'solid', padding: 20, width: 'auto', left: 10 }}
      >
        <Tracking />
        <div>Status: </div>
      </div>
    </Screen>
  );
}
