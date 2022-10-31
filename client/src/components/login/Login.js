import "../../App.css";

const Login = () => {
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
                    />
                  </div>
                  <div className="mb-4">
                    <h6 className="fw-semibold">Password</h6>
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Masukkan Password"
                    />
                  </div>
                  <div>
                    <a className="d-grid text-decoration-none" href="/livemonitoring">
                      <button className="btn btn-success" type="button">
                        Masuk
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  id="carouselExampleDark"
                  className="carousel carousel-dark slide"
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
  );
};

export default Login;
