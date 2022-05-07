import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import toast from "react-hot-toast";

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
          Technofete
        </a>
        <ul className="navbar-nav ms-auto">
          {user ? (
            <>
              <li className="nav-item">
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
            </>
          ) : (
            <li className="nav-item">
              <Link to="/signin">
                <button className="btn btn-primary">Sign In</button>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
