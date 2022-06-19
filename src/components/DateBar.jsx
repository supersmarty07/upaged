import React from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
//in this component, letf/right button click is read, the button icon comes from react-icon library and therefore button clicks
//send the value to the parent which in turn filters the data by date
const DateBar = (props) => {
  let leftMove = props.leftMove;
  let dateNow = props.dateNow.week;
  console.log(dateNow);
  return (
    <div className="datebar">
      <a
        className="carousel-left"
        onClick={() => {
          leftMove(-1);
        }}
      >
        <FaArrowCircleLeft />
      </a>
      <div className="date"> {dateNow}</div>
      <a
        className="carousel-right"
        onClick={() => {
          leftMove(1);
        }}
      >
        <FaArrowCircleRight />
      </a>
    </div>
  );
};

export default DateBar;
