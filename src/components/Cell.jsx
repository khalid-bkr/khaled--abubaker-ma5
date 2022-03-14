import React, { useState } from "react";
import "../assets/Cell.css";

const Cell = (props) => {
  const [checked, setChecked] = useState(false);
  const onCellClick = () => {
    setChecked((prev) => {
      const checkedUpdated = !prev;
      props.onCounterChange(checkedUpdated ? 1 : -1);
      return checkedUpdated;
    });
  };
  return (
    <div
      className={`cell-box ${checked ? "black" : "white"}`}
      onClick={onCellClick}
    ></div>
  );
};

export default Cell;
