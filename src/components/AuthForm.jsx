import React, { useState } from "react";
import bg1 from "../assets/bg1.jpg";
import { useAuth } from "../context/authContext";
import logo from "../assets/technofete-logo-2.jpeg";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [clicked, setClicked] = useState(false);

  async function handleLogin(e) {
    setClicked(true);
    e.preventDefault();
    if (email === "") {
      toast.error("Email is empty");
    } else {
      if (password === "") {
        toast.error("Password is empty");
      } else {
        if (
          email.match("^[a-z0-9](\\.?[a-z0-9]){5,}@mcet|@drmcet\\.in|.ac.in$")
        ) {
          await login(email, password);
        } else {
          toast.error("Enter your college email id");
        }
      }
    }
    setClicked(false);
  }

  const { login } = useAuth();

  return (
    <div
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
      }}
      className="container-fluid d-flex justify-content-center align-items-center page"
    >
      <form
        onSubmit={(e) => handleLogin(e)}
        className="col-lg-4 br-super p-4 bg-white m-3"
      >
        <div className="text-center row">
          <img
            className="m-auto col-lg-5 col-md-6 col-sm-3"
            src={logo}
            alt="technofete"
          />
        </div>
        <h3 className="f-700 text-blue">Sign In</h3>
        <label>College email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="eg: 19bcs007@mcet.in"
        />
        <label className="mt-3">Password</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your password"
        />
        <div className="d-flex mt-4 align-items-center">
          <Link to="/forgot-password">Forgot password?</Link>
          {!clicked ? <button type="submit" className="btn btn-success ms-auto">
            Log in
          </button>:
          <button className="btn btn-success ms-auto" type="button" disabled>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Signing in...
          </button>}
        </div>
        <p className="text-center mt-5">
          New user? <Link to="/sign-up">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default AuthForm;
