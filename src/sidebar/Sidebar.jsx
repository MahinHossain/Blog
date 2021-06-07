import React from "react";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png"
          className="sidebarImg"
        />
        <p>
          lorIsle dares saw rhyme that go. The like pomp from visit they to. But
          are the cheer sought, his full break and saw way blast for. Saw chaste
          finds and.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Ctegory</span>
        <ul className="sidebarList  ">
          <li className="sidebarListitem">Music</li>
          <li className="sidebarListitem">Tour</li>
          <li className="sidebarListitem">Sing</li>
          <li className="sidebarListitem">Actor</li>
          <li className="sidebarListitem">Life</li>
        </ul>
      </div>
      <div className="sidebarItem">
        {" "}
        <span className="sidebarTitle">Follow us</span>
        <div className="topleft">
          <i class=" sideicon  fab fa-facebook-f"></i>
          <i class=" sideicon fab fa-instagram"></i>
          <i class=" sideicon fab fa-twitter"></i>
        </div>
      </div>
    </div>
  );
}
