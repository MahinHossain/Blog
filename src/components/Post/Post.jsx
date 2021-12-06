import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

export default function Post({ item }) {
  const publicFolder = "http://localhost:5000/images/";
  return (
    <div class="card">
      <Link to={"/singlepost/" + item._id} className="  text-decoration-none">
        <img
          class="card-img-top"
          src={publicFolder + item.photo}
          alt="Cardimage"
        />
        <div class="card-body">
          <h5 class="card-title">{item.title}</h5>
          <p class="card-text">{item.desc}</p>
          <p class="card-text text-danger float-right">
            author:{item.username}
          </p>

          <p class="card-text">
            <small class="text-muted">
              {new Date(item.createdAt).toDateString()}
            </small>
          </p>
        </div>
      </Link>
    </div>
  );
}
