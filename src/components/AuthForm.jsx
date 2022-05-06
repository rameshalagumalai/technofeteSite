import React, { useState } from "react";
import bg1 from "../assets/bg1.jpg";
import { useAuth } from "../context/authContext";

function AuthForm() {
  const [credentials, setCredetials] = useState({
    rollno: "",
    name: "",
    email: "",
    password: "",
    retypePassword: "",
  });

  const { login, signUp } = useAuth();
  const [noAccount, setAccount] = useState(false);

  const handleLogin = () => {
    setAccount(true);
  };

  const handleSignUp = async () => {
    if (
      credentials.password === credentials.retypePassword &&
      credentials.email.includes("@mcet.in")
    ) {
      await signUp(credentials.email, credentials.password);
    } else {
      alert("Invalid Password");
    }
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
      className="container-fluid d-flex justify-content-center align-items-center mt-5"
    >
      {noAccount ? (
        <form className="col-lg-3 col-md-6 col-sm-10 m-5 bg-white h-auto rounded d-flex flex-column justify-content-around align-items-center">
          <h4 className="text-center p-3 fw-bold">Log In</h4>
          <div className="container-fluid mb-3">
            <label htmlFor="mailid" className="form-label">
              College Mail ID
            </label>
            <input
              type="email"
              className="form-control"
              id="maidid"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="container-fluid mb-3">
            <label htmlFor="passwordfield" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordfield"
            />
          </div>

          <button type="submit" className="btn btn-primary">
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
          <div className="container-fluid mb-3">
            <label htmlFor="rollNumber" className="form-label">
              Roll Number
            </label>
            <input
              type="text"
              className="form-control"
              id="rollNumber"
              placeholder="eg: 19BCS010"
              onChange={(e) => {
                setCredetials({ ...credentials, rollno: e.target.value });
              }}
            />
          </div>
          <div className="container-fluid mb-3">
            <label htmlFor="studentName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="studentName"
              onChange={(e) => {
                setCredetials({ ...credentials, name: e.target.value });
              }}
            />
          </div>
          <div className="container-fluid mb-3">
            <label htmlFor="mailid" className="form-label">
              College Mail ID
            </label>
            <input
              type="email"
              className="form-control"
              id="maidid"
              placeholder="eg: 19bcs010@mcet.in"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setCredetials({ ...credentials, email: e.target.value });
              }}
            />
          </div>
          <div className="container-fluid mb-3">
            <label htmlFor="passwordfield" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordfield"
              onChange={(e) => {
                setCredetials({ ...credentials, password: e.target.value });
              }}
            />
          </div>
          <div className="container-fluid mb-3">
            <label htmlFor="retypepassword" className="form-label">
              Re-Enter Password
            </label>
            <input
              type="password"
              className="form-control"
              id="retypepassword"
              onChange={(e) => {
                setCredetials({
                  ...credentials,
                  retypePassword: e.target.value,
                });
              }}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              handleSignUp();
            }}
          >
            Sign Up
          </button>
          <h6 className="py-4">
            Already have an account? <a className="fw-bold pe-auto">Log In</a>
          </h6>
        </form>
      )}
    </div>
  );
}

export default AuthForm;
