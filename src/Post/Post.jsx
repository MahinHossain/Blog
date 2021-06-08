import React from "react";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postimage"
        src="https://images.unsplash.com/photo-1547039996-61c1135690c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1797&q=80"
      />

      <div className="postItem">
        {" "}
        <h4 className="postTitle">Sanctus nonumy et duo</h4>
        <span className="sidebarListitem">music</span>
        <h6 className="postDate">1 hour ago</h6>
      </div>
      <p className="text-danger">Author:Mahin Hossain </p>
      <p className="postDescription">
        Sanctus nonumy et duo dolor stet dolor invidunt. Erat kasd stet dolor
        eirmod diam stet. Est gubergren sadipscing gubergren at. Sanctus nonumy
        et duo dolor stet dolor invidunt. Erat kasd stet dolor eirmod diam stet.
      </p>
    </div>
  );
}
