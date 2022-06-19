import React from "react";
import Card from "./Card";
const Shifts = ({ props }) => {
  return (
    <div className="shifts">
      {props.map((el, i) => (
        <Card props={el} key={i}></Card>
      ))}
    </div>
  );
};

export default Shifts;
