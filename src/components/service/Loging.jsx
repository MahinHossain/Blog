import React from "react";
import "./style.css";
export default function Loging() {
  return (
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <div class="fadeIn first mt-5"></div>

        <form>
          <input
            type="text"
            id="login"
            class="fadeIn second"
            name="Username"
            placeholder="username"
          />
          <input
            type="text"
            id="password"
            class="fadeIn third"
            name="login"
            placeholder="password"
          />
          <input type="submit" class="fadeIn fourth" value="Log In" />
        </form>

        <div id="formFooter">
          <a class="underlineHover" href="#">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}
