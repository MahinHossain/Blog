import React from "react";

export default function Loging() {
  return (
    <div className="loging w-50 card shadow-lg p-3">
      <form>
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
          Login
        </button>
      </form>
    </div>
  );
}
