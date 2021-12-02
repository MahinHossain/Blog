import React from "react";
import Post from "../Post/Post";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
export default function Posts({ post }) {
  return (
    <div className=" row ">
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
