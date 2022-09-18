import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import toast from "react-hot-toast";
import { useState } from "react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [iconChange, setIconChange] = useState(false);

  const handleLogOut = async () => {
    toast.promise(logout(), {
      loading: "Logging Out...",
      success: <b>Logged Out Successfully!</b>,
      error: <b>Could not Log Out.</b>,
    });
  };

  const scrollToEvents = (id) => {
    document.getElementById(id).scrollIntoView();
  };

  const toggleIcon = () => {
    setIconChange(!iconChange);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid d-flex justify-content-between">
        <a className="navbar-brand" href="/">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/tehnofete.appspot.com/o/mcet.svg?alt=media&token=ef3e52bb-5c0c-494b-8b00-5bc2a8f165bc"
            alt="Technofete"
            width="100"
            height="60"
          />
        </a>
        <ul className="navbar-nav ms-auto">
          {user ? (
            <>
              {iconChange ? (
                <i
                  style={{
                    width: "26px",
                    height: "26px",
                    cursor: "pointer",
                    fontSize: "20px",
                  }}
                  className="fa fa-close fa-2x d-sm-block d-md-none text-white"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  onClick={() => {
                    toggleIcon();
                  }}
                ></i>
              ) : (
                <i
                  style={{
                    width: "26px",
                    height: "26px",
                    cursor: "pointer",
                    fontSize: "20px",
                  }}
                  className="fa fa-bars d-sm-block d-md-none text-white"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  onClick={() => {
                    toggleIcon();
                  }}
                ></i>
              )}

              <div className="d-none d-sm-none d-md-block d-lg-flex d-md-flex">
                <li className="nav-item me-4">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item me-4">
                  <Link to="/organizers" className="nav-link">
                    Organizers
                  </Link>
                </li>
                <li className="nav-item me-4">
                  <Link to="/profile" className="nav-link">
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      handleLogOut();
                    }}
                  >
                    Log Out
                  </button>
                </li>
              </div>
            </>
          ) : (
            <li className="nav-item">
              <Link
                to="/signin"
                onClick={() => {
                  toggleIcon();
                }}
              >
                <button className="btn btn-primary">Sign In</button>
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="collapse" style={{ width: "100%" }} id="collapseExample">
        <div className="container-fluid">
          <div className="w-100 d-flex justify-content-center">
            <ul className="navbar-nav d-flex flex-column justify-content-center text-center my-3">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/organizers" className="nav-link">
                  Organizers
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-primary"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  onClick={() => {
                    handleLogOut();
                  }}
                >
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
