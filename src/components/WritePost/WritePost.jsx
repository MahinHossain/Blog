import React from "react";

export default function WritePost() {
  return (
    <div className="writepost col-md-8 mx-auto">
      <img
        className=""
        src="https://images.pexels.com/photos/8954101/pexels-photo-8954101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      />

      <div className=" d-flex justify-content-center flex-wrap">
        <i class="fas fa-plus-circle"></i>
        <input className="form-control-sm" placeholder="Title" />

        <input
          className="form-control-sm"
          placeholder="Write  your story here......"
        />
        <button className="btn btn-outline-warning">Publish</button>
      </div>
    </div>
  );
}
