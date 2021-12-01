import React from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Posts from "../posts/Posts";
export default function Home() {
  return (
    <div className="container-fluid">
      <Header />
      <div className="row">
        <div className="col-md-8">
          <Posts />
        </div>
        <div className="col-md-4">
          {" "}
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
