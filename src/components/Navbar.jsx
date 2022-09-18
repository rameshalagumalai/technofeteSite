import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import toast from "react-hot-toast";
import logo from "../assets/technofete-logo.jpeg"

export default function Navbar() {
  const { user, logout } = useAuth();

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
        <a className="navbar-brand" href="/">
        <img src={logo} alt="Technofete" className="rounded-circle" width="60" height="60" />
        </a>
        <ul className="navbar-nav ms-auto">
          {user ? (
            <>
              <li className="nav-item me-4">
                <Link to={"/profile"} className="nav-link">
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
            </>
          ) : (
            <li className="nav-item">
              <Link to="/sign-in">
                <button className="btn btn-primary">Sign In</button>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
