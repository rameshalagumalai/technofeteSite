import { useState } from "react";
import logo from "../assets/technofete-logo-2.jpeg";
import { useAuth } from "../context/authContext";
import bg1 from "../assets/bg1.jpg";

export default function SetUpProfile(){

    const [credentials, setCredentials] = useState({
        name: "",
        phoneNumber: ""
    });

    const { currentUser } = useAuth();

    function handleInput(e){
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    function handleSetUp(e){
        e.preventDefault();
        console.log(currentUser);
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
        onSubmit={(e) => handleSetUp(e)}
        className="col-lg-4 br-super p-4 bg-white m-3"
      >
        <div className="text-center">
          <img className="m-auto w-25" src={logo} alt="technofete" />
        </div>
        <h3 className="f-700 text-blue">Set Up Profile</h3>
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
          type="tel"
          className="form-control"
          name="phoneNumber"
          value={credentials.phoneNumber}
          onChange={(e) => handleInput(e)}
          placeholder="eg: 9876543210"
        />
        <div className="d-flex mt-4 align-items-center mb-3">
          <button type="submit" className="btn btn-success ms-auto">
            Set Up
          </button>
        </div>
      </form>
    </div>
    );
}