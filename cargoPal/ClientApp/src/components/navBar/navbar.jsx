import React, { useState, useEffect } from 'react';

import { getUserId } from '../../actions/authAction';
import AgentNav from './agentNav';
import ClientNav from './clientNav';

export default function Navigationbar(props) {
  const [nav, setNav] = useState(null);

  useEffect(() => {
    const user = getUserId();
    if (user) {
      if (user.type === 'Client') {
        setNav(true);
      } else {
        setNav(false);
      }
    } else {
      setNav(null);
    }
  }, []);

  return (
    <>{nav === true ? <ClientNav /> : nav === false ? <AgentNav /> : null}</>
  );
}
