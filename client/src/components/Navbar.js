import "../App.css";
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <div className="navbar-component">
      <div className="nav-border">
        <div className="container">
          <nav className="navbar navbar-expand-md">
            <div className="container-fluid">
              <div className="navbar-brand disabled">
                <img
                  className="logo"
                  src={require("../assets/logo.png")}
                  alt=""
                />
              </div>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNavDropdown"
              >
                <ul className="navbar-nav gap-2">
                  <li className="nav-item">
                    <a
                      className={
                        "nav-link fw-semibold" +
                        (window.location.pathname == "/livemonitoring"
                          ? " page-current"
                          : "")
                      }
                      href="/livemonitoring"
                    >
                      Live Monitoring
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={
                        "nav-link fw-semibold" +
                        (window.location.pathname == "/validasideviasi"
                          ? " page-current"
                          : "")
                      }
                      href="/validasideviasi"
                    >
                      Validasi Deviasi
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={
                        "nav-link fw-semibold" +
                        (window.location.pathname == "/datatervalidasi"
                          ? " page-current"
                          : "")
                      }
                      href="/datatervalidasi"
                    >
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
                      <Icon className="account-icon" icon="bi:person-circle" />
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
