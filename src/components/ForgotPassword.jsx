import React, { useState } from "react";
import bg1 from "../assets/bg1.jpg";
import { useAuth } from "../context/authContext";
import logo from "../assets/technofete-logo-2.jpeg";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const { resetPassword } = useAuth();
  const [clicked, setClicked] = useState(false);

  async function handleSubmit(e) {
    setClicked(true);
    e.preventDefault();
    if (email === "") {
      toast.error("Email is empty");
    } else {
      if (email.match("^[a-z0-9](\\.?[a-z0-9]){5,}@mcet\\.in$")) {
        await resetPassword(email);
      } else {
        toast.error("Enter your college email id");
      }
    }
    setClicked(false);
  }

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
        onSubmit={(e) => handleSubmit(e)}
        className="col-lg-4 br-super p-4 bg-white m-3"
      >
        <div className="text-center row">
          <img
            className="m-auto col-lg-5 col-md-6 col-sm-3"
            src={logo}
            alt="technofete"
          />
        </div>
        <h3 className="f-700 text-blue">Change password</h3>
        <p>A password reset link will be sent to the entered email</p>
        <label>College email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="eg: 19bcs007@mcet.in"
        />
        <div className="d-flex mt-4 align-items-center">
          <Link to="/sign-in">Back to sign in</Link>
          {!clicked ? <button type="submit" className="btn btn-success ms-auto">
            Send
          </button>:
          <button className="btn btn-success ms-auto" type="button" disabled>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Sending...
          </button>}
        </div>
        <p className="text-center mt-5">
          New user? <Link to="/sign-up">Sign up</Link>
        </p>
      </form>
    </div>
  );
}
