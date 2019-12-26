import React from "react";
import "./CircleProgress.css";
const CircleProgress = props => {
  const { bgColor, percent, fontSize = "200px" } = props;
  let circleRightStyle = {};
  let circleLeftStyle = {};
  if (percent < 50) {
    circleRightStyle.transform = "rotate(" + percent * 3.6 + "deg)";
  } else {
    circleRightStyle.transform = "rotate(0deg)";
    circleRightStyle.backgroundColor = bgColor;
    circleLeftStyle.transform = "rotate(" + (percent - 50) * 3.6 + "deg)";
  }
  return (
    <div
      className="circle-bar"
      style={{
        backgroundColor: bgColor,
        fontSize: fontSize
      }}
    >
      <div className="circle-bar-left" style={circleLeftStyle}></div>
      <div className="circle-bar-right" style={circleRightStyle}></div>

      <div className="mask">
        <span className="percent">{percent}%</span>
      </div>
    </div>
  );
};
export default CircleProgress;
