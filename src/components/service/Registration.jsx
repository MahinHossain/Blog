import React from "react";

export default function Registration() {
  return (
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <div class="fadeIn first"></div>

        <form>
          <input
            type="text"
            id="login"
            class="fadeIn second"
            name="name"
            placeholder="Name..."
          />
          <input
            type="text"
            id="login"
            class="fadeIn second"
            name="Username"
            placeholder="Email.."
          />
          <input
            type="text"
            id="login"
            class="fadeIn second"
            name="Username"
            placeholder="Phone.."
          />

          <input
            type="text"
            id="password"
            class="fadeIn third"
            name="login"
            placeholder="password"
          />
          <input type="submit" class="fadeIn fourth" value="Register" />
        </form>

        <div id="formFooter">
          <a class="underlineHover" href="#">
            Already have an account?? Login
          </a>
        </div>
      </div>
    </div>
  );
}
