import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Topbar() {
  const history = useHistory();
  const logu = JSON.parse(localStorage.getItem("logeduser"));
  const [user, setuser] = useState(
    JSON.parse(localStorage.getItem("logeduser"))
  );
  console.log("logu :>> ", logu);
  // useEffect(() => {
  //   setuser(logu)

  // }, [])

  const hanldeLogout = () => {
    localStorage.removeItem("logeduser");
    history.push("login");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark navbar-navbg container-fluid text-white
    "
    >
      <div className="container-fluid">
        <a className="navbar-brand col-md-3" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse col-md-9"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav  justify-content-around  mb-2 mb-lg-0  col-md-8">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page">
                <Link to="/"> Home </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <Link to="/writepost"> Write </Link>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link"></a>
            </li>
          </ul>
          {/* <form className="d-flex col-md-4 ">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          <div className=" col-md-4 d-flex justify-content-around ">
            <i class="   fab fa-facebook-f text-success  "></i>
            <i class="  fab fa-instagram "></i>
            <i class="  fab fa-twitter "></i>
          </div>
        </div>
      </div>
    </nav>
  );
}
