import React from "react";
import { Image, Button } from "react-bootstrap";

import { useHistory } from "react-router-dom";
import Screen from "../components/screen";

import LandingImage from "../assets/commons/LandingImage.jpg";

export default function LandingScreen(props) {
  let history = useHistory();
  const windowHeight = window.innerHeight;

  return (
    <div
      style={{
        backgroundImage: `url(${LandingImage})`,
        height: windowHeight,
        overflow: "hidden",
        backgroundSize: "cover",
        textAlign: "center",
      }}
    >
      <div
        style={{
          borderStyle: "solid",
          display: "inline-block",
        }}
      >
        <Button
          style={{ margin: 30 }}
          varient="Customer"
          size="lg"
          onClick={() => history.push("/login")}
        >
          Customer
        </Button>
        <Button
          style={{ margin: 30 }}
          varient="Agent"
          size="lg"
          onClick={() => history.push("/login")}
        >
          Agent
        </Button>
      </div>
    </div>
  );
}
