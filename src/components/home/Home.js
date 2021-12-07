import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import { useLocation } from "react-router";

import Posts from "../posts/Posts";
import axios from "axios";
export default function Home() {
  const [post, setpost] = useState([]);
  const [loading, setloading] = useState(true);
  const { search } = useLocation();
  // const postId = location.pathname.split("/")[2];
  console.log("search :>> ", search);
  const baseUrl = "http://localhost:5000/api/posts";

  useEffect(() => {
    axios
      .get(baseUrl + search)
      .then((res) => {
        setloading(false);
        setpost(res.data.sort().reverse());
      })
      .catch((err) => console.log(`err`, err));
  }, [search]);
  return (
    <div className="container-fluid">
      <Header />
      <div className="row">
        <div className="col-md-8 card-deck  row">
          <Posts post={post} loading={loading} />
        </div>
        <div className="col-md-4">
          {" "}
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
