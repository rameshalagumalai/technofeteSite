import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import toast from "react-hot-toast";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate()

  const handleLogOut = async () => {
    toast.promise(logout(), {
      loading: "Logging Out...",
      success: <b>Logged Out Successfully!</b>,
      error: <b>Could not Log Out.</b>,
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
              src="https://firebasestorage.googleapis.com/v0/b/tehnofete.appspot.com/o/mcet.svg?alt=media&token=ef3e52bb-5c0c-494b-8b00-5bc2a8f165bc"
              alt="Technofete"
              width="100"
              height="60"
            />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
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
              <a className="nav-link" href="https://firebasestorage.googleapis.com/v0/b/tehnofete.appspot.com/o/event_schedule.jpeg?alt=media&token=14cd7cb4-e659-4a0f-a73c-f4d73096cf16" target="_blank" rel="noreferrer">Schedule</a>
            </li>
            {
              user ? 
              <>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link">
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-danger m-2" onClick={() => handleLogOut()}>Log out</button>
                </li>
              </>:
              <button className="btn btn-primary m-2" onClick={() => navigate("/sign-in")}>Sign in</button>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}  
