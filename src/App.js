import React from "react";
import CircleProgress from "./CircleProgress";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CircleProgress bgColor={"#e19181"} percent={30} fontSize={"30px"} />
      <CircleProgress bgColor={"#6ca5de"} percent={35} fontSize={"35px"} />
      <CircleProgress bgColor={"#bbd378"} percent={60} fontSize={"60px"} />
      <CircleProgress bgColor={"#68d0cd"} percent={99} fontSize={"99px"} />
      <CircleProgress bgColor={"#deac73"} percent={100} fontSize={"100px"} />
      <CircleProgress bgColor={"#979cd5"} percent={0} fontSize={"60px"} />
    </div>
  );
}

export default App;
