import React from "react";

export default function Registration() {
  return (
    // <div className=" registrationdiv">
    //   {" "}
    //   <div className="shadow-lg card1 card-body">
    //     <form>
    //       <div class="form-group ">
    //         <label for="exampleInputEmail1">Name</label>
    //         <input
    //           type="name"
    //           class="form-control"
    //           aria-describedby="emailHelp"
    //           placeholder="Enter name"
    //         />
    //       </div>
    //       <div class="form-group ">
    //         <label for="exampleInputEmail1">Phone</label>
    //         <input
    //           type="number"
    //           class="form-control"
    //           aria-describedby="emailHelp"
    //           placeholder="Enter phone"
    //         />
    //       </div>
    //       <div class="form-group ">
    //         <label for="exampleInputEmail1">Email address</label>
    //         <input
    //           type="email"
    //           class="form-control"
    //           aria-describedby="emailHelp"
    //           placeholder="Enter email"
    //         />
    //       </div>
    //       <div class="form-group">
    //         <label for="exampleInputPassword1">Password</label>
    //         <input
    //           type="password"
    //           class="form-control"
    //           placeholder="Password"
    //         />
    //       </div>

    //       <button type="submit" class="btn btn-primary">
    //         Registration
    //       </button>
    //     </form>
    //   </div>
    // </div>

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
