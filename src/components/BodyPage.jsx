import React from "react";
import Heading from "./Heading";
import Invited from "./Invited";
import DateBar from "./DateBar";
import Shifts from "./Shifts";
import { useState } from "react";

const BodyPage = ({ props }) => {
  //setting default week
  const [movement, setMovement] = useState(2);

  //only 4 weeks to make the app simple. However, this can be made more dynamic
  const dateArr = [
    { week: "01 Apr to 07 Apr" },
    { week: "08 Apr to 14 Apr" },
    { week: "15 Apr to 21 Apr" },
    { week: "22 Apr to 28 Apr" },
    { week: "01 May to 07 May" },
  ];

  let dateNow;
  //make sure the date is from 1st April to 7th May
  if (movement > -1 && movement < 5) {
    dateNow = dateArr[movement];
  }

  //date not allowed to go past 01st April backward
  if (movement <= -1) {
    dateNow = dateArr[0];
    setMovement(0);
  }
  //date not allowed to go past 7th May forward.
  if (movement >= 5) {
    dateNow = dateArr[4];
    setMovement(4);
  }
  //filtering props based on date
  let filteredProps = props.filter((obj) => {
    let requireDate = dateNow.week;
    let aStart = requireDate.slice(0, 2);
    let aEnd = requireDate.slice(10, 12);
    return obj.date.slice(0, 2) >= aStart && obj.date.slice(0, 2) < aEnd;
  });

  //setting array index based on value provided from children
  const leftMove = (info) => {
    setMovement(movement + info);
    return null;
  };

  return (
    <div className="bodypage">
      <Heading></Heading>
      <Invited props={props}></Invited>
      <DateBar leftMove={leftMove} dateNow={dateNow}></DateBar>
      <Shifts props={filteredProps}></Shifts>
    </div>
  );
};

export default BodyPage;
