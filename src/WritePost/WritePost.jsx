import React from "react";

export default function WritePost() {
  return (
    <div className="writepost">
      <div className="writepostItem">
        <img
          className="writepostimage"
          src="https://images.unsplash.com/photo-1547039996-61c1135690c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1797&q=80"
        />
        <button className="btn btn-outline-warning ml-auto mybtn mt-4">
          Publish
        </button>

        <div className="row ml-5 writeItem">
          <i class="fas fa-plus-circle "></i>
          <input
            className=" form-control-sm float-left sharestoryTitle"
            placeholder="Title"
          />
        </div>
        <input
          className="sharestory"
          placeholder="Write  your story here......"
        />
      </div>
    </div>
  );
}
