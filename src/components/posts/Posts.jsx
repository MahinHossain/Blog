import React from "react";
import Post from "../Post/Post";

export default function Posts({ post }) {
  return (
    <div className=" row ">
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status"></div>
      </div>

      {post.length ? (
        post.map((item) => (
          <div className="col-md-6">
            <Post item={item} />
          </div>
        ))
      ) : (
        <h2 className="text-center mt-5 p-5 text-danger">No Post</h2>
      )}
    </div>
  );
}
