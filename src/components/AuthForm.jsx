import React, { useState } from "react";
import bg1 from "../assets/bg1.jpg";

function AuthForm() {
  const [noAccount, setAccount] = useState(false);

  const handleLogin = () => {
    setAccount(true);
  };

  const handleSignUp = () => {
    setAccount(false);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
      }}
      className="container-fluid d-flex justify-content-center align-items-center"
    >
      {noAccount ? (
        <form className="col-lg-3 col-md-6 col-sm-10 m-5 bg-white h-auto rounded d-flex flex-column justify-content-around align-items-center">
          <h4 className="text-center p-3 fw-bold">Log In</h4>
          <div class="container-fluid mb-3">
            <label for="mailid" class="form-label">
              College Mail ID
            </label>
            <input
              type="email"
              class="form-control"
              id="maidid"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="container-fluid mb-3">
            <label for="passwordfield" class="form-label">
              Password
            </label>
            <input type="password" class="form-control" id="passwordfield" />
          </div>

          <button type="submit" class="btn btn-primary">
            Log In
          </button>
          <h6 className="py-4">
            Don't have an Account?{" "}
            <a
              className="fw-bold pe-auto"
              onClick={() => {
                handleSignUp();
              }}
            >
              Sign Up
            </a>
          </h6>
        </form>
      ) : (
        <form className="col-lg-3 col-md-6 col-sm-10 m-10 bg-white h-auto rounded d-flex flex-column justify-content-around align-items-center">
          <h4 className="text-center p-3 fw-bold">Sign Up</h4>
          <div class="container-fluid mb-3">
            <label for="rollNumber" class="form-label">
              Roll Number
            </label>
            <input type="text" class="form-control" id="rollNumber" />
          </div>
          <div class="container-fluid mb-3">
            <label for="studentName" class="form-label">
              Name
            </label>
            <input type="text" class="form-control" id="studentName" />
          </div>
          <div class="container-fluid mb-3">
            <label for="mailid" class="form-label">
              College Mail ID
            </label>
            <input
              type="email"
              class="form-control"
              id="maidid"
              placeholder="eg: 19bcs010@mcet.in"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="container-fluid mb-3">
            <label for="passwordfield" class="form-label">
              Password
            </label>
            <input type="password" class="form-control" id="passwordfield" />
          </div>
          <div class="container-fluid mb-3">
            <label for="retypepassword" class="form-label">
              Re-Enter Password
            </label>
            <input type="password" class="form-control" id="retypepassword" />
          </div>

          <button type="submit" class="btn btn-primary">
            Sign Up
          </button>
          <h6 className="py-4">
            Already have an account?{" "}
            <a
              className="fw-bold pe-auto"
              onClick={() => {
                handleLogin();
              }}
            >
              Log In
            </a>
          </h6>
        </form>
      )}
    </div>
  );
}

export default AuthForm;
