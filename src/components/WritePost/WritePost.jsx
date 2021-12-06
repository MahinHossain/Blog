import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";

export default function WritePost() {
  const baseUrl = "http://localhost:5000/api";
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [file, setfile] = useState(null);

  const loged = JSON.parse(localStorage.getItem("logeduser"));
  const username = loged.username;
  const handlesubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      desc,
      username,
    };
    console.log("newPost :>> ", newPost);

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post(baseUrl + "/upload", data);
      } catch (error) {
        console.log("error :>> ", error);
      }
    }
    try {
      await axios
        .post(baseUrl + "/posts", newPost)
        .then((res) => res.data && window.location.replace("/"))
        .catch((err) => console.log(`err`, err));
    } catch (error) {
      console.log("error :>> ", error);
    }
  };
  return (
    <div className="">
      <div class="card mb-3">
        <div className="border">
          {file && (
            <img
              class=" h-50 w-100 "
              src={URL.createObjectURL(file)}
              alt="img"
            />
          )}
        </div>
        <div class="card-body">
          <input
            type="file"
            onChange={(e) => setfile(e.target.files[0])}
            className=" fas fa-plus-circle"
            placeholder="Title"
          />

          <h5 class="card-title">Title</h5>
          <input
            required
            // className="form-control-sm"
            placeholder=""
            onChange={(e) => settitle(e.target.value)}
          />

          <div class="form-group">
            <label for="exampleFormControlTextarea1">Description</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(e) => setdesc(e.target.value)}
            ></textarea>
          </div>
          <button
            className="btn btn-warning  justify-content-end"
            onClick={(e) => handlesubmit(e)}
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}
