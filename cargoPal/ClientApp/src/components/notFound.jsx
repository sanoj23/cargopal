import React from "react";

import bgImage from "../assets/commons/error-404.jpg";

//wrapr whole thing in screen and add the heading and subtitle
const windowHeight = window.innerHeight;
export default function notFound(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        display: "table-cell",
        height: windowHeight,
        width: window.innerWidth,
        verticalAlign: "middle",
        textAlign: "center",
        backgroundSize: "cover",
        color: "white",
      }}
    ></div>
  );
}
