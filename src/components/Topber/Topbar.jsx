import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Topbar() {
  const history=useHistory()
const logu= JSON.parse( localStorage.getItem("logeduser"))
  const [user, setuser] = useState(JSON.parse( localStorage.getItem("logeduser")))
  console.log('logu :>> ', logu);
  // useEffect(() => {
  //   setuser(logu)
   
  // }, [])

const hanldeLogout=()=>{
localStorage.removeItem("logeduser") 
history.push('login')
}

  
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
          {user?<li className="">
            {" "}
            <Link to="/writepost" onClick={()=>hanldeLogout()}> Logout </Link>
          </li>:<li className="">
            {" "}
            <Link to="login">Login </Link>
          </li> }
          
          <span>
          <li className="">
            {" "}
         
          </li></span>
        </ul>
   
      <div className="col-md-2 d-flex justify-content-center  ">
        <i class="fas fa-user "></i>
        <i class="fas fa-search"></i>
      </div>
    </div>
  );
}
