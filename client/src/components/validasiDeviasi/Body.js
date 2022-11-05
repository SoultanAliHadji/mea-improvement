import "../../App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import ReactImageMagnify from "react-magnify-image";

const Body = () => {
  const [data, setData] = useState([{}]);
  const [viewid, setViewid] = useState();
  const [viewstatus, setViewstatus] = useState();
  const [viewobject, setViewobject] = useState();
  const [viewcctvname, setViewcctvname] = useState();
  const [viewcctvlocation, setViewcctvlocation] = useState();
  const [viewtime, setViewtime] = useState();
  const [viewimage, setViewimage] = useState();
  const [kategori, setKategori] = useState("all");
  const numlimiter = 10;

  useEffect(() => {
    axios
      .get("/viewlimit/" + numlimiter)
      .then((res) => {
        console.log("Getting from ::::", res.data.data);
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const arr = data.slice(0, [numlimiter]).map((data, index) => {
    return (
      <button
        type="button"
        className="shadow-all btn btn-success fw-semibold py-2 rounded-3 text-start"
        key={data.id}
        onClick={() => {
          setViewid(data.id);
          setViewstatus(data.type_validation)
          setViewobject(data.type_object);
          setViewcctvname(data.name);
          setViewcctvlocation(data.location);
          setViewtime(data.created_at);
        }}
      >
        <div className="d-flex">
          <p className="col d-flex gap-1">Deviasi {data.type_object}</p>
          <p
            className={
              "rounded-2 px-2 fw-bolder" +
              (data.type_validation == "not_yet"
                ? " text-primary notification-tag"
                : data.type_validation == "true"
                ? " text-success notification-tag-true"
                : "text-danger notification-tag-false")
            }
          >
            {data.type_validation == "not_yet"
              ? "Perlu Validasi"
              : data.type_validation == "true"
              ? "Valid"
              : "Tidak Valid"}
          </p>
        </div>
        <div>
          <div className="d-flex gap-2 details">
            <div>
              <Icon className="notification-icon" icon="bi:camera-fill" />
            </div>
            <p>
              {data.name} - {data.location}
            </p>
          </div>
          <div className="d-flex gap-2 details">
            <div>
              <Icon className="notification-icon" icon="akar-icons:clock" />
            </div>
            <div className="d-flex">{data.created_at}</div>
          </div>
        </div>
      </button>
    );
  });

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
                <div className="d-grid px-2 py-2 d-flex justify-content-center">
                  <div className="deviasi-image-container">
                    <ReactImageMagnify
                      className="mw-100 deviasi-img image-border"
                      {...{
                        smallImage: {
                          alt: "",
                          isFluidWidth: true,
                          src: require("../../assets/mining_eyes.jpg"),
                        },
                        largeImage: {
                          src: require("../../assets/mining_eyes.jpg"),
                          width: 2000,
                          height: 1100,
                        },

                        enlargedImagePosition: "over",
                      }}
                    />
                  </div>
                </div>
                <div className="px-2 pt-2 row">
                  <div className="col">
                    <div className="mb-3">
                      <p
                        className={
                          "rounded-2 px-2 fw-bolder" +
                          (viewstatus == "not_yet"
                            ? " text-primary notification-tag"
                            : viewstatus == "true"
                            ? " text-success notification-tag-true"
                            : "text-danger notification-tag-false")
                        }
                      >
                        {viewstatus == "not_yet"
                          ? "Perlu Validasi"
                          : viewstatus == "true"
                          ? "Valid"
                          : "Tidak Valid"}
                      </p>
                    </div>
                    <h6 className="fw-semibold d-flex gap-1">
                      <div>Terdeteksi Deviasi {viewobject}</div>
                    </h6>
                    <div className="d-flex pb-2 gap-2">
                      <Icon className="notif-icon" icon="bi:camera-fill" />
                      <p className="p-small">
                        {viewcctvname} - {viewcctvlocation}
                      </p>
                    </div>
                    <div className="d-flex pb-2 gap-2">
                      <Icon className="notif-icon" icon="akar-icons:clock" />
                      <p className="p-small">{viewtime}</p>
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
                  <div className="d-flex gap-2">
                    <button
                      type="button"
                      className={
                        "shadow-all btn fw-semibold rounded-5 text-start" +
                        (kategori == "all"
                          ? " btn-outline-success"
                          : " btn-success")
                      }
                      onClick={() => {
                        setKategori("all");
                      }}
                    >
                      Semua
                    </button>
                    <button
                      type="button"
                      className={
                        "shadow-all btn fw-semibold rounded-5 text-start" +
                        (kategori == "person"
                          ? " btn-outline-success"
                          : " btn-success")
                      }
                      onClick={() => {
                        setKategori("person");
                      }}
                    >
                      Person
                    </button>
                    <button
                      type="button"
                      className={
                        "shadow-all btn fw-semibold rounded-5 text-start" +
                        (kategori == "lv"
                          ? " btn-outline-success"
                          : " btn-success")
                      }
                      onClick={() => {
                        setKategori("lv");
                      }}
                    >
                      LV
                    </button>
                    <button
                      type="button"
                      className={
                        "shadow-all btn fw-semibold rounded-5 text-start" +
                        (kategori == "hd"
                          ? " btn-outline-success"
                          : " btn-success")
                      }
                      onClick={() => {
                        setKategori("hd");
                      }}
                    >
                      HD
                    </button>
                  </div>
                </div>
                <div className="d-grid px-2 py-2 overflow-auto notification-list gap-2 mt-2 notificationlistbutton-component">
                  {arr}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {viewid}
    </div>
  );
};

export default Body;
