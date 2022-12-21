import "../../App.css";
import { Icon } from "@iconify/react";
import axios from "axios";
import { useState, useEffect } from "react";

const Login = () => {
  const [jwt, setJwt] = useState("");
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordtype, setPasswordtype] = useState("password");
  const [incorrect, setIncorrect] = useState("");
  const settoken = localStorage.setItem("jwt", jwt);
  const setrole = localStorage.setItem("role", role);
  const setname = localStorage.setItem("name", name);
  const setid = localStorage.setItem("id", id);

  const incorrectAlert = "*Incorrect username or password";

  function handlerUsername(data) {
    setUsername(data.target.value);
  }

  function handlerPassword(data) {
    setPassword(data.target.value);
  }

  const handleLogin = () => {
    axios
      .post("http://10.10.10.66:5001/api/login", {
        username: username,
        password: password,
      })
      .then((data) => {
        console.log(data.data.meta.status);
        setJwt(data.data.data.token);
        setRole(data.data.data.role);
        setName(data.data.data.name);
        setId(data.data.data.id);
        window.location.replace("http://localhost:3000/mining-eyes-analytics");
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data.meta.status);
          setJwt("");
          setIncorrect("Incorrect");
          window.location.replace("http://localhost:3000/#");
        }
      });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      axios
        .post("http://10.10.10.66:5001/api/login", {
          username: username,
          password: password,
        })
        .then((data) => {
          console.log(data.data.meta.status);
          setJwt(data.data.data.token);
          setRole(data.data.data.role);
          setName(data.data.data.name);
          setId(data.data.data.id);
          window.location.replace(
            "http://localhost:3000/mining-eyes-analytics"
          );
        })
        .catch((err) => {
          if (err.response) {
            console.log(err.response.data.meta.status);
            setJwt("");
            setIncorrect("Incorrect");
            window.location.replace("http://localhost:3000/#");
          }
        });
    }
  };

  return (
    <div className="login-page">
      <div className="bg-img">
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <div className="card bg-light rounded-3">
            <div className="row">
              <div className="col d-flex justify-content-center align-items-center">
                <div className="card-col-left">
                  <div className="mb-5">
                    <img
                      className="logo"
                      src={require("../../assets/logo.png")}
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="fw-semibold">Log in</h3>
                    <p className="mb-4">
                      Selamat datang kembali! Silahkan isi beberapa detail
                      dibawah ini.
                    </p>
                  </div>
                  <div className="mb-2">
                    <h6 className="fw-semibold">Username/SID</h6>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Masukkan Username atau SID"
                      defaultValue={username}
                      onChange={handlerUsername}
                      onKeyDown={handleKeyDown}
                    />
                  </div>
                  <div className="mb-4">
                    <h6 className="fw-semibold">Password</h6>
                    <div className="d-flex">
                      <input
                        className="form-control"
                        type={passwordtype}
                        placeholder="Masukkan Password"
                        defaultValue={password}
                        onChange={handlerPassword}
                        onKeyDown={handleKeyDown}
                      />
                      <div className="view-container">
                        {passwordtype == "password" ? (
                          <div
                            onClick={() => {
                              setPasswordtype("text");
                            }}
                          >
                            <Icon
                              className="view text-black-50"
                              icon="clarity:eye-line"
                            />
                          </div>
                        ) : (
                          <div
                            onClick={() => {
                              setPasswordtype("password");
                            }}
                          >
                            <Icon
                              className="view text-black-50"
                              icon="clarity:eye-hide-line"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="d-grid text-decoration-none">
                    <button
                      className="btn btn-success"
                      type="button"
                      onClick={() => {
                        handleLogin();
                      }}
                    >
                      Masuk
                    </button>
                  </div>
                  <div className="mt-3">
                    <p className="p-small text-danger">
                      {incorrect == "Incorrect" ? incorrectAlert : ""}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col d-none d-lg-block">
                <div className="d-flex justify-content-center">
                  <div className="ayam">
                    <div
                      id="carouselExampleDark"
                      className="carousel carousel slide bebek"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carouselExampleDark"
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleDark"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleDark"
                          data-bs-slide-to="2"
                          aria-label="Slide 3"
                        ></button>
                      </div>
                      <div className="carousel-inner">
                        <div
                          className="carousel-item active"
                          data-bs-interval="3000"
                        >
                          <img
                            src={require("../../assets/login-slider-png/slider_live_monitoring.png")}
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                          <img
                            src={require("../../assets/login-slider-png/slider_validasi_deviasi.png")}
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src={require("../../assets/login-slider-png/slider_data_tervalidasi.png")}
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
