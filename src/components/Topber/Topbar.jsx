import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="top">
      <div className="topleft">
        <i class=" topIcon  fab fa-facebook-f"></i>
        <i class=" topIcon fab fa-instagram"></i>
        <i class=" topIcon fab fa-twitter"></i>
      </div>
      <div className="topmidle">
        <ul className="item-ul">
          <li className="itemList">
            {" "}
            <Link to="/"> Home </Link>
          </li>
          <li className="itemList">About</li>
          <li className="itemList">
            {" "}
            <Link to="/singlepost"> Single post </Link>
          </li>
          <li className="itemList">
            {" "}
            <Link to="/writepost"> Write </Link>
          </li>
          <li className="itemList">
            {" "}
            <Link to="login"> Login </Link>
          </li>
          <li className="itemList">
            {" "}
            <Link to="/registration"> Registration </Link>
          </li>
        </ul>
      </div>
      <div className="topright">
        <i class="fas fa-user"></i>
        <i class="fas fa-search"></i>
      </div>
    </div>
  );
}
