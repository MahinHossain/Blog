import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function Sidebar() {

  const [categories, setcategories] = useState([]);
  const { search } = useLocation();
  // const postId = location.pathname.split("/")[2];
  console.log("search :>> ", search);
  const baseUrl = "http://localhost:5000/api/categories";

  useEffect(() => {
    axios
      .get(baseUrl + search)
      .then((res) => setcategories(res.data))
      .catch((err) => console.log(`err`, err));
  }, []);
  console.log("categories :>> ", categories);










  return (
    <div className="sidebar p-4">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img
          src="http://cdn30.us1.fansshare.com/image/horsewallpapers/wild-horses-wide-full-hd-wallpaper-download-wild-horses-images-free-wallpaper-1318523997.jpg"
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
        <ul className="sidebarList">
       

          {categories.map((item)=>  
          
          <Link to={`/?user=${item.name}`} className="text-decoration-none">
         <li className="sidebarListitem">{item.name} </li></Link>
          
          
          
          
          
          
          
          
         )}
         
        </ul>
      </div>
      <div className="sidebarItem">
        {" "}
        <span className="sidebarTitle">Follow us</span>
        <div className="topleft">
          <i class=" topIcon  fab fa-facebook-f"></i>
          <i class=" topIcon fab fa-instagram"></i>
          <i class=" topIcon     fab fa-twitter"></i>
        </div>
      </div>
    </div>
  );
}
