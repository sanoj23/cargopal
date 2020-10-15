import React from 'react';

import bgImage from '../assets/commons/error-404.jpg';

//wrapr whole thing in screen and add the heading and subtitle
const windowHeight = window.innerHeight;
export default function notFound(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        height: windowHeight,
        width: window.innerWidth,
        backgroundSize: 'cover',
        color: 'white',
      }}
    ></div>
  );
}
