import "../App.css";
import { Icon } from "@iconify/react";
import LiveMonitoring from "./liveMonitoring/LiveMonitoring";
import ValidasiDeviasi from "./validasiDeviasi/ValidasiDeviasi";
import DataTervalidasi from "./dataTervalidasi/DataTervalidasi";
import { useState } from "react";

const Parent = () => {
  const [current, setCurrent] = useState("livemonitoring");
  const [viewidpass, setViewidpass] = useState();
  const [cctvid, setCctvid] = useState();
  const [fullscreen, setFullscreen] = useState(false);
  const livecctv = "http://10.10.10.66:5001/api/video_feed/" + cctvid;
  const getrole = localStorage.getItem("role");
  const getname = localStorage.getItem("name");

  const handleRoute = (value) => {
    setCurrent(value);
  };

  const handleViewidpass = (value) => {
    setViewidpass(value);
  };

  const handleCctvid = (value) => {
    setCctvid(value);
  };

  const handleFullScreen = (value) => {
    setFullscreen(value);
  };

  return (
    <div>
      <div className={fullscreen == false ? "body-bg" : " absolute-invisible"}>
        <div className="navbar-component nav-bg">
          <div className="nav-border">
            <div className="container">
              <nav className="navbar navbar-expand-md">
                <div className="container-fluid">
                  <div className="navbar-brand">
                    <a
                      className={
                        current == "livemonitoring" ? "page-current" : ""
                      }
                      onClick={() => {
                        setCurrent("livemonitoring");
                      }}
                    >
                      <img
                        className="logo"
                        src={require("../assets/logo.png")}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                  </div>
                  <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav gap-2">
                      <li className="nav-item d-flex justify-content-center">
                        <a
                          className={
                            "nav-link fw-semibold" +
                            (current == "livemonitoring" ? " page-current" : "")
                          }
                          onClick={() => {
                            setCurrent("livemonitoring");
                          }}
                        >
                          Live Monitoring
                        </a>
                      </li>
                      <li className="nav-item d-flex justify-content-center">
                        <a
                          className={
                            "nav-link fw-semibold" +
                            (current == "validasideviasi"
                              ? " page-current"
                              : "")
                          }
                          onClick={() => {
                            setCurrent("validasideviasi");
                          }}
                        >
                          Validasi Deviasi
                        </a>
                      </li>
                      {getrole == "admin" ? (
                        <li className="nav-item d-flex justify-content-center">
                          <a
                            className={
                              "nav-link fw-semibold" +
                              (current == "datatervalidasi"
                                ? " page-current"
                                : "")
                            }
                            onClick={() => {
                              setCurrent("datatervalidasi");
                            }}
                          >
                            Data Tervalidasi
                          </a>
                        </li>
                      ) : (
                        ""
                      )}
                      <div className="nav-item dropdown d-flex justify-content-center">
                        <a
                          className="nav-link dropdown-toggle fw-semibold"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <Icon
                            className="account-icon"
                            icon="bi:person-circle"
                          />
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item disabled" href="#">
                              {getname}
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/">
                              Log Out
                            </a>
                          </li>
                        </ul>
                      </div>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div>
          {current == "livemonitoring" ? (
            <LiveMonitoring
              handleRoute={handleRoute}
              handleViewidpass={handleViewidpass}
              handleCctvid={handleCctvid}
              handleFullScreen={handleFullScreen}
            />
          ) : current == "validasideviasi" ? (
            <ValidasiDeviasi viewidpass={viewidpass} />
          ) : current == "datatervalidasi" ? (
            <DataTervalidasi />
          ) : (
            ""
          )}
        </div>
      </div>
      <div
        className={
          "fullscreen-cctv" + (fullscreen == false ? " absolute-invisible" : "")
        }
        tabIndex={-1}
        onKeyDown={() => setFullscreen(false)}
        onClick={() => {
          setFullscreen(false);
        }}
      >
        <img className="fill-window" src={livecctv} alt="" />
        <div className="absolute-component absolute-position">
          <div className="alart px-5 py-2 rounded-3 mt-2 fw-semibold">
            <label className="px-4 py-1">Click Anywhere To Exit</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parent;
