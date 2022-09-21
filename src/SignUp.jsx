import React, { useState } from "react";
import bg1 from "./assets/bg1.jpg";
import logo from "./assets/technofete-logo-2.jpeg";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "./components/apiRequests/Requests";

export default function SignUp() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [clicked, setClicked] = useState(false);

  async function handleSignUp(e) {
    setClicked(true);
    e.preventDefault();
    if (email === "") {
      console.log("Empty");
      toast.error("Email is empty");
    } else {
      if (!email.match("^[a-z0-9](\\.?[a-z0-9]){5,}@mcet\\.in$")) {
        toast.error("Enter your college email id");
      } else {
        if (await createUser(email)) {
          navigate("/set-up-profile");
        }
      }
    };
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
        onSubmit={(e) => handleSignUp(e)}
        className="col-lg-4 br-super p-4 bg-white m-3"
      >
        <div className="text-center">
          <img className="m-auto w-25" src={logo} alt="technofete" />
        </div>
        <h3 className="f-700 text-blue">Sign Up</h3>
        <label className="mt-3">College email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="eg: 19bcs007@mcet.in"
        />
        <div className="d-flex mt-4 align-items-center mb-3">
          <Link to="/sign-in">Back to sign in</Link>
          {!clicked ? <button type="submit" className="btn btn-success ms-auto">
            Yes, I'm in
          </button> :
            <button className="btn btn-success ms-auto" type="button" disabled>
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              Signing up...
            </button>}
        </div>
      </form>
    </div>
  );
}
