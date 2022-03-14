import React, { useState } from "react";
import Cell from "./Cell";
import "../assets/Grid.css";
const Grid = () => {
  const [count, setCount] = useState(0);
  const onCounterChange = (countValue) => {
    setCount((prev) => prev + countValue);
  };
  return (
    <div className="grid-wrapper">
      <h1>Count: {count}</h1>
      <div className="grid-container">
        <Cell {...{ onCounterChange }} />
        <Cell {...{ onCounterChange }} />
        <Cell {...{ onCounterChange }} />
        <Cell {...{ onCounterChange }} />
      </div>
    </div>
  );
};

export default Grid;
