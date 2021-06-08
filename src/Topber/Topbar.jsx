import React from "react";

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
          <li className="itemList">Home</li>
          <li className="itemList">About</li>
          <li className="itemList">Contact</li>
          <li className="itemList">Write</li>
          <li className="itemList">Login</li>
          <li className="itemList">Registration</li>
        </ul>
      </div>
      <div className="topright">
        <i class="fas fa-user"></i>
        <i class="fas fa-search"></i>
      </div>
    </div>
  );
}
