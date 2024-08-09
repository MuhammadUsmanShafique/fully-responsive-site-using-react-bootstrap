import "./NavbarStyle.css";
import "../App.css";

export default function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a
            className="navbar-brand text-white"
            style={{ zIndex: "3" }}
            href="#"
          >
            Themebau
          </a>
          <button
            className="navbar-toggler text-white bg-danger-subtle"
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
              <li className="nav-item" style={{ zIndex: "4" }}>
                <a
                  className="HOME nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Projects
                </a>
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

          <button
            type="button"
            className="btn btn-light ms-lg-3 w-auto pur_but"
          >
            Purchase &nbsp; <span className="dot">•</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
