import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Ensure this import is correct
import "./NavbarStyle.css";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-black">
      <div className="container">
        <a className="navbar-brand text-white" style={{ zIndex: "3" }} href="#">
          Themebau
        </a>
        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Projects
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Project 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Project 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Project 3
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Project 4
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Project 5
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Pages
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <button type="button" className="btn btn-light ms-lg-3 w-auto pur_but">
          Purchase &nbsp; <span className="dot">•</span>
        </button>
      </div>
    </nav>
  );
}
