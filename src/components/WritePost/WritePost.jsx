import React from "react";

export default function WritePost() {
  return (
    <div className="writepost">
      <div className="writepostItem">
        <img
          className="writepostimage"
          src="http://cdn30.us1.fansshare.com/image/horsewallpapers/wild-horses-wide-full-hd-wallpaper-download-wild-horses-images-free-wallpaper-1318523997.jpg"
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
