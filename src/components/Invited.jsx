import React from "react";
import CardInvited from "./CardInvited";
//sets the invited shift by filtering based on the value of the invited key in the json
const Invited = ({ props }) => {
  const data = props.filter((obj) => {
    return obj.invited === true;
  });
  return (
    <div className="invited">
      <div>You've been invited: </div>
      <hr />
      {data.map((el, i) => (
        <CardInvited props={el} key={i}></CardInvited>
      ))}
    </div>
  );
};

export default Invited;
