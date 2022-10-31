import "../App.css";

const Navbar = () => {
  return (
    <div className="navbar-component">
      <div className="nav-border">
        <div className="container">
          <nav className="navbar navbar-expand-md">
            <div className="container-fluid">
              <a className="navbar-brand" href="/livemonitoring">
                <img
                  className="logo"
                  src={require("../assets/logo.png")}
                  alt=""
                />
              </a>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNavDropdown"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link fw-semibold" href="/validasideviasi">
                      Validasi Deviasi
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fw-semibold" href="/datatervalidasi">
                      Data Tervalidasi
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle fw-semibold"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={require("../assets/icon-png/person.png")}
                        alt=""
                      />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item disabled" href="#">
                          Admin
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Log Out
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
