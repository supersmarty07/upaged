import React from "react";
//this component can be further broken down to more components. I avoided this to prevent prop-drilling
const Card = ({ props }) => {
  //setting ratings. However, this code can be more shorter with switch statment or map/foreach loop
  const ratings = (score) => {
    if (score === 1) return "⭐";
    if (score === 2) return "⭐⭐";
    if (score === 3) return "⭐⭐⭐";
    if (score === 4) return "⭐⭐⭐⭐";
    if (score === 5) return "⭐⭐⭐⭐⭐";
  };
  return (
    <div className="card">
      <div className="card-core">
        <div className="vr-bold"></div>
        <div className="vertical-card">
          <div>{props.date}</div>
          <div>
            {props.shiftStart} - {props.shiftEnd}
          </div>
          <div>{props.hospitalDepartment}</div>
          <div>${props.hourlyRate}</div>
        </div>
        <div className="vr-soft"></div>
        <div className="vertical-card">
          <div>{props.hospitalName}</div>
          <div>{ratings(props.rating)}</div>
          <div>{props.addressStreet}</div>
          <div>{props.addressSuburb}</div>
        </div>
        <div className="btn">
          <div className="align-items-center">
            <button href="#" className="accept">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
