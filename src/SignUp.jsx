import React, { useState } from "react";
import bg1 from "./assets/bg1.jpg";
import logo from "./assets/technofete-logo-2.jpeg";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { createUser } from "./components/apiRequests/Requests";
import {
  checkUniqueRollNumber,
  validateName,
  validatePassword,
  validateRollNumber,
} from "./Validate";

export default function SignUp() {
  const [credentials, setCredentials] = useState({
    rollno: "19BCS010",
    name: "Nimalan S",
    email: "19bcs007@mcet.in",
    password: "bowbowbow",
    confirmPassword: "bowbowbow",
  });

  function handleInput(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  function handleSignUp(e) {
    e.preventDefault();
    var { rollno, name, email, password, confirmPassword } = credentials;
    rollno = rollno.toUpperCase();
    if (!validateName(name)) {
      toast.error("Enter valid name");
    } else {
      if (!validateRollNumber(rollno)) {
        toast.error("Roll number is empty");
      } else {
        if (email === "") {
          toast.error("Email is empty");
        } else {
            email = email.toLowerCase();
          if (!email.match("^[a-z0-9](\\.?[a-z0-9]){5,}@mcet\\.in$")) {
            toast.error("Enter your college email id");
          } else {
            if (!checkUniqueRollNumber(rollno, email)) {
              toast.error("Enter Unique Roll Number");
            } else {
              if (!validatePassword(password)) {
                toast.error(
                  "Enter a password that comprises of 8 to 20 characters and has atleast 1 upper case & lower case letters, 1 number and 1 special character"
                );
              } else {
                if (confirmPassword === "") {
                  toast.error("Conform your password");
                } else {
                  if (password !== confirmPassword) {
                    toast.error("Passwords don't match");
                  } else {
                    createUser(credentials);
                  }
                }
              }
            }
          }
        }
      }
    }
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
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={credentials.name}
          onChange={(e) => handleInput(e)}
          placeholder="Your name"
        />
        <label className="mt-3">Roll number</label>
        <input
          type="text"
          className="form-control"
          name="rollno"
          value={credentials.rollno}
          onChange={(e) => handleInput(e)}
          placeholder="eg: 19BCS007"
        />
        <label className="mt-3">College email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={credentials.email}
          onChange={(e) => handleInput(e)}
          placeholder="eg: 19bcs007@mcet.in"
        />
        <label className="mt-3">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={credentials.password}
          onChange={(e) => handleInput(e)}
          placeholder="Type a strong password"
        />
        <label className="mt-3">Confirm password</label>
        <input
          type="password"
          className="form-control"
          name="confirmPassword"
          value={credentials.confirmPassword}
          onChange={(e) => handleInput(e)}
          placeholder="Re-type the password"
        />
        <div className="d-flex mt-4 align-items-center mb-3">
          <Link to="/sign-in">Back to sign in</Link>
          <button type="submit" className="btn btn-success ms-auto">
            Yes, I'm in
          </button>
        </div>
      </form>
    </div>
  );
}
