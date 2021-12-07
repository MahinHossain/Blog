import React from "react";
import Post from "../Post/Post";

export default function Posts({ post, loading }) {
  return (
    <div className="  container">
      {loading ? (
        <div className=" text-center  bg-">
          {" "}
          <div
            className="spinner-grow text-danger"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          ></div>
        </div>
      ) : (
        <div className="row">
          {post.map((item) => (
            <div className="col-md-6 ">
              <Post item={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
