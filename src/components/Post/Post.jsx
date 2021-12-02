import React from "react";
import { BrowserRouter as Router, Switch, Route, Link,useLocation } from "react-router-dom";

export default function Post({item}) {
  return (
    <div className=" p-3 border-right">
    <Link to={'/singlepost/'+item._id  } className="  text-decoration-none" > 

      <img
        className=" img-fluid img-thumbnail"
        src="http://cdn30.us1.fansshare.com/image/horsewallpapers/wild-horses-wide-full-hd-wallpaper-download-wild-horses-images-free-wallpaper-1318523997.jpg"
      />

      <p className=" row mt-2  justify-content-around">
        <h5 className="">{item.title}</h5>
        <span className="">music</span>
        <h6 className="">{  new Date (item.createdAt).toDateString()}</h6>
      </p>
      <p className="text-danger">{item.username} </p>
      <p className="postDescription">
      {item.desc}
      </p></Link>
    </div>
  );
}
