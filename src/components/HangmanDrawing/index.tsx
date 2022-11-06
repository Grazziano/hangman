import React from 'react';
import './HangmanDrawing.css';

const HEAD = <div className="head"></div>;

const BODY = <div className="body"></div>;

const RIGHT_ARM = <div className="rightArm"></div>;

const LEFT_ARM = <div className="leftArm"></div>;

const RIGHT_LEG = <div className="rightLeg"></div>;

const LEFT_LEG = <div className="leftLeg"></div>;

function HangmanDrawing() {
  return (
    <div className="container">
      {HEAD}
      {BODY}
      {RIGHT_ARM}
      {LEFT_ARM}
      {RIGHT_LEG}
      {LEFT_LEG}
      <div className="verticalLine"></div>
      <div className="topVertical"></div>
      <div className="vertical"></div>
      <div className="horizontal"></div>
    </div>
  );
}

export default HangmanDrawing;
