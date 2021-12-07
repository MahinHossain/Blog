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
    // <div className=" row mx-3 p-3 ">
    //   <div className=" col-md-2 d-flex justify-content-around ">
    //     <i class="   fab fa-facebook-f "></i>
    //     <i class="  fab fa-instagram"></i>
    //     <i class="  fab fa-twitter"></i>
    //   </div>

    //   <ul className="d-flex col-md-8 justify-content-around ">
    //     <li className="">
    //       {" "}
    //       <Link to="/"> Home </Link>
    //     </li>
    //     <li className="">About</li>

    //     <li className="">
    //       {" "}
    //       <Link to="/writepost"> Write </Link>
    //     </li>
    //     {user ? (
    //       <li className="">
    //         {" "}
    //         <Link to="/writepost" onClick={() => hanldeLogout()}>
    //           {" "}
    //           Logout{" "}
    //         </Link>
    //       </li>
    //     ) : (
    //       <li className="">
    //         {" "}
    //         <Link to="login">Login </Link>
    //       </li>
    //     )}

    //     <span>
    //       <li className=""> </li>
    //     </span>
    //   </ul>

    //   <div className="col-md-2 d-flex justify-content-center  ">
    //     <i class="fas fa-user "></i>
    //     <i class="fas fa-search"></i>
    //   </div>
    // </div>

    // nacv
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid
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
            <i class="   fab fa-facebook-f text-success bg-light "></i>
            <i class="  fab fa-instagram bg-light"></i>
            <i class="  fab fa-twitter bg-light"></i>
          </div>
        </div>
      </div>
    </nav>
  );
}
