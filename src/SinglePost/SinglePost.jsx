import React from "react";

export default function single() {
  return (
    <div className="singlepostpage">
      <div className="spd">
        <img
          className="singlePostimg"
          src="https://images.unsplash.com/photo-1547039996-61c1135690c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1797&q=80"
        />{" "}
        <div className="singlepostimageitem">
          <h4 className="singlepostTitle">Title</h4>
          <i class="fas fa-trash"></i>
          <i class="fas fa-edit bg-danger"></i>
          {/* <span className="singlepostCat">music</span>
            <h6 className="singlepostdate">1 hour ago</h6> */}
        </div>
      </div>
      <p className="singlePostFesc">
        Sanctus nonumy et duo dolor stet dolor invidunt. Erat kasd stet dolor
        eirmod diam stet. Est gubergren sadipscing gubergren at. Sanctus nonumy
        et duo dolor stet dolor invidunt. Erat kasd stet dolor eirmod diam stet.
        Est gubergren sadipscing gubergren at.
      </p>
    </div>
  );
}
