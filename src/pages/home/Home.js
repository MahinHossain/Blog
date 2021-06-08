import React from "react";
import Header from "../../header/Header";
import Sidebar from "../../sidebar/Sidebar";
import Posts from "../../posts/Posts";
import SinglePost from "../../SinglePost/SinglePost";
export default function Home() {
  return (
    <>
      {" "}
      <Header />
      <div className="home">
        <Posts />
        {/* <SinglePost /> */}
        <Sidebar />
      </div>
    </>
  );
}
