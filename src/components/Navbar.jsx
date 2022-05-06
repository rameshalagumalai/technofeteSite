import { Link } from "react-router-dom";

export default function Navbar({ loggedIn }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Technofete
        </a>
        <ul className="navbar-nav ms-auto">
          {loggedIn ? (
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
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
