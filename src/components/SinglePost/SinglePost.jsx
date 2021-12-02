import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import  axios  from 'axios';
import { Link } from "react-router-dom";

export default function Single() {
  const location = useLocation();
  const postId= location.pathname.split('/')[2]

  const [post, setpost] = useState([]);

  const baseUrl = "http://localhost:5000/api/posts/";

  useEffect(() => {
    axios
      .get(baseUrl+postId)
      .then((res) => setpost(res.data))
      .catch((err) => console.log(`err`, err));
  }, []);
  return (
    <div className="mx-auto col-md-10">
      <div className="">
        <img
          alt="not load"
          className="singlePostimg img-fluid"
          src="http://cdn30.us1.fansshare.com/image/horsewallpapers/wild-horses-wide-full-hd-wallpaper-download-wild-horses-images-free-wallpaper-1318523997.jpg"
        />{" "}
        <div className="singlepostimageitem mt-3">
          <h4 className="singlepostTitle">{post.title}</h4>

          <i class="fas fa-edit text-success"></i>
          <i class="fas fa-trash"></i>
        </div>
      </div>
      <p className="singlePostFesc ml-2">
       {post.desc}
      </p>
      <Link to={`/?user=${post.username}`} className="text-decoration-none">
      <h5 className="text-danger">Author:{post.username}</h5></Link>
    </div>
  );
}
