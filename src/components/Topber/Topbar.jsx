import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className=" row mx-3 p-3 ">
      <div className=" col-md-2 d-flex justify-content-around ">
        <i class="   fab fa-facebook-f "></i>
        <i class="  fab fa-instagram"></i>
        <i class="  fab fa-twitter"></i>
      </div>
     
        <ul className="d-flex col-md-8 justify-content-around ">
          <li className="">
            {" "}
            <Link to="/"> Home </Link>
          </li>
          <li className="">About</li>
          <li className="">
            {" "}
            <Link to="/singlepost"> Single post </Link>
          </li>
          <li className="">
            {" "}
            <Link to="/writepost"> Write </Link>
          </li>
          <li className="">
            {" "}
            <Link to="login">Login </Link>
          </li>
          <li className="">
            {" "}
            <Link to="/registration"> Registration </Link>
          </li>
        </ul>
   
      <div className="col-md-2 d-flex justify-content-center  ">
        <i class="fas fa-user "></i>
        <i class="fas fa-search"></i>
      </div>
    </div>
  );
}
