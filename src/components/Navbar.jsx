import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ loggedIn }) {
  const navigate = useNavigate();

  return (
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          Technofete
        </a>
        <ul class="navbar-nav ms-auto">
          {loggedIn ? (
            <li class="nav-item">
              <button
                onClick={() => {
                  navigate("/signup");
                }}
                className="btn btn-primary"
              >
                Register
              </button>
            </li>
          ) : (
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
