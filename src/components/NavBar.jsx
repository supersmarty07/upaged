import React from "react";
import logo from "../backend/logo.png";
import avatar from "../backend/avatar.png";
//provides json for the data
const NavBar = () => {
  return (
    <div className="navBar">
      <hr />
      <ul>
        <li>
          <img className="logo" alt="logo" src={logo} />
        </li>
        <li>
          <a href="#findwork">Find Work</a>
        </li>
        <li>
          <a href="#timesheet">Timesheets</a>
        </li>
        <li>
          <a href="#messaging">Messaging</a>
        </li>
        <li className="avatar">
          <img src={avatar} alt="avatar" />
        </li>
        <li className="avatar">
          <a href="#logOut">Log Out</a>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default NavBar;
