import "../../App.css";
import NotificationFilter from "../NotificationFilter";
import NotificationListButton from "../NotificationListButton";
import SeeAllNotificationButton from "../SeeAllNotificationButton";

const Body = () => {
  return (
    <div className="validasideviasi-body">
      <div className="body-bg">
        <div className="container pt-3">
          <div className="row">
            <div className="col">
              <div className="shadow-all mb-3 bg-body rounded-top px-3 py-2">
                <h6 className="fw-semibold">Validasi Deviasi</h6>
                <p className="p-small">Validasi deviasi yang terdeteksi</p>
              </div>
              <div className="shadow-all mb-3 bg-body rounded-bottom px-3 pt-2">
                <div className="d-grid px-2 py-2">
                  <div className="d-flex justify-content-center">
                    <img
                      className="mw-100 border border-3 border-dark deviasi-img"
                      src={require("../../assets/mining_eyes.jpg")}
                      alt=""
                    />
                  </div>
                </div>
                <div className="px-2 pt-2 row">
                  <div className="col">
                    <div className="status">
                      <div className="text-primary rounded-2 notification-tag px-2">
                        <p>Perlu Validasi</p>
                      </div>
                    </div>
                    <h6 className="fw-semibold">Terdeteksi Deviasi HD</h6>
                    <div className="d-flex pb-2 gap-2">
                      <img
                        className="notif-icon"
                        src={require("../../assets/icon-png/photo_camera.png")}
                        alt=""
                      />
                      <p className="p-small">CCTV BMO 2 - E Camera 3</p>
                    </div>
                    <div className="d-flex pb-2 gap-2">
                      <img
                        className="notif-icon"
                        src={require("../../assets/icon-png/access_time.png")}
                        alt=""
                      />
                      <div className="d-flex gap-3">
                        <p className="p-small">2022-10-07</p>
                        <p className="p-small">16:26:17</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="d-flex gap-2 justify-content-end validationbutton-component">
                      <button
                        type="button"
                        className="shadow-all btn btn-success fw-semibold py-2 rounded-3"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        Valid
                      </button>
                      <button
                        type="button"
                        className="shadow-all btn btn-outline-success fw-semibold py-2 rounded-3"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        Tidak Valid
                      </button>
                      <div
                        className="modal fade"
                        id="staticBackdrop"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabindex="-1"
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h6
                                className="modal-title fw-semibold"
                                id="staticBackdropLabel"
                              >
                                Deskripsi Deviasi
                              </h6>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <textarea
                                class="form-control"
                                id="message-text"
                                placeholder="Masukkan keterangan deviasi"
                              ></textarea>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-outline-success"
                                data-bs-dismiss="modal"
                              >
                                Batal
                              </button>
                              <button
                                type="button"
                                className="btn btn-success"
                                data-bs-dismiss="modal"
                              >
                                Simpan
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
            <div className="col-3">
              <div className="shadow-all mb-3 bg-body rounded-top px-3 py-2">
                <h6 className="fw-semibold">List Deviasi</h6>
                <p className="p-small">List deviasi yang terdeteksi</p>
              </div>
              <div className="shadow-all mb-3 bg-body rounded-bottom px-3 py-2">
                <div className="d-grid px-2 py-2 border-bottom border-2 notificationfilter-component">
                  <NotificationFilter />
                </div>
                <div className="d-grid px-2 py-2 overflow-auto notification-list gap-2 mt-2 notificationlistbutton-component">
                  <NotificationListButton />
                  <NotificationListButton />
                  <NotificationListButton />
                  <NotificationListButton />
                  <NotificationListButton />
                  <NotificationListButton />
                  <NotificationListButton />
                  <NotificationListButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
