import React from "react";

export default function Registration() {
  return (
    <div className="registration w-50 card shadow-lg p-3">
      <form>
        <div class="form-group ">
          <label for="exampleInputEmail1">Name</label>
          <input
            type="name"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter name"
          />
        </div>
        <div class="form-group ">
          <label for="exampleInputEmail1">Phone</label>
          <input
            type="number"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter phone"
          />
        </div>
        <div class="form-group ">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" placeholder="Password" />
        </div>

        <button type="submit" class="btn btn-primary">
          Registration
        </button>
      </form>
    </div>
  );
}
