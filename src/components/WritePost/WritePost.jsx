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
    <div className="writepost col-md-8 mx-auto">
      {file && (
        <img className=" img-fluid h-50 w-50" src={URL.createObjectURL(file)} />
      )}

      <div className=" d-flex justify-content-center flex-wrap">
        <i class="fas fa-plus-circle "></i>{" "}
        <input
          type="file"
          onChange={(e) => setfile(e.target.files[0])}
          className="form-control-sm"
          placeholder="Title"
        />
        <input
          required
          className="form-control-sm"
          placeholder="Write  your story here......"
          onChange={(e) => setdesc(e.target.value)}
        />
        <input
          required
          className="form-control-sm"
          placeholder=""
          onChange={(e) => settitle(e.target.value)}
        />
        <button
          className="btn btn-outline-warning"
          onClick={(e) => handlesubmit(e)}
        >
          Publish
        </button>
      </div>
    </div>
  );
}
