import "../../App.css";
import Validation from "./Validation";
import axios from "axios";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import ReactImageMagnify from "react-magnify-image";

const ValidasiDeviasi = ({
  viewidpass,
  viewstatuspass,
  viewobjectpass,
  viewcctvnamepass,
  viewcctvlocationpass,
  viewtimepass,
  viewuserpass,
  viewcommentpass,
  viewimagepass,
}) => {
  const [data, setData] = useState([{}]);
  const [viewid, setViewid] = useState(viewidpass);
  const [viewstatus, setViewstatus] = useState(viewstatuspass);
  const [viewobject, setViewobject] = useState(viewobjectpass);
  const [viewcctvname, setViewcctvname] = useState(viewcctvnamepass);
  const [viewcctvlocation, setViewcctvlocation] =
    useState(viewcctvlocationpass);
  const [viewtime, setViewtime] = useState(viewtimepass);
  const [viewuser, setViewuser] = useState(viewuserpass);
  const [viewcomment, setViewcomment] = useState(viewcommentpass);
  const [viewimage, setViewimage] = useState(viewimagepass);
  const [object, setObject] = useState("AllObject");
  const [datalimit, SetDatalimit] = useState(10);
  const [filtercctv, setFiltercctv] = useState("AllName/AllLocation");
  const [validation, setValidation] = useState("Allvalidation");
  const [click, setClick] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState("");
  const gettoken = localStorage.getItem("jwt");

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "http://10.10.10.66:5001/api/viewtable/" +
          filtercctv +
          "/" +
          object +
          "/All/" +
          validation +
          "/" +
          datalimit,
        {
          headers: {
            Authorization: "Bearer " + gettoken,
          },
        }
      )
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [object, datalimit, filtercctv, validation, click, refresh]);

  useEffect(() => {
    setInterval(() => {
      axios.get("http://127.0.0.1:5000/refresh").then((res) => {
        setRefresh(res.data.data);
      });
    }, 5000);
  });

  const handleClick = (value) => {
    setClick(value);
  };

  const arr = data.slice(0, [datalimit]).map((data, index) => {
    return (
      <button
        type="button"
        className={
          "shadow-all btn fw-semibold py-2 rounded-3 text-start" +
          (viewid == data.id ? " btn-outline-success" : " btn-success")
        }
        key={data.id}
        onClick={() => {
          setViewid(data.id);
          setViewstatus(data.type_validation);
          setViewobject(data.type_object);
          setViewcctvname(data.name);
          setViewcctvlocation(data.location);
          setViewtime(data.created_at);
          setViewimage(data.image);
          setViewuser(data.user_name);
          setViewcomment(data.comment);
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
                : " text-danger notification-tag-false")
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
            <div className="col-lg-9">
              <div className="shadow-all mb-3 bg-body rounded-top px-3 py-2">
                <h6 className="fw-semibold">Validasi Deviasi</h6>
                <p className="p-small">
                  Validasi deviasi yang terdeteksi {refresh}
                </p>
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
                            : " text-danger notification-tag-false")
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
                    {viewstatus != "not_yet" ? (
                      <div>
                        <div className="d-flex row">
                          <div className="d-flex pb-2 gap-2 col">
                            <Icon
                              className="notif-icon"
                              icon="bi:camera-fill"
                            />
                            <p className="p-small">
                              {viewcctvname} - {viewcctvlocation}
                            </p>
                          </div>
                          <div className="d-flex pb-2 gap-2 col">
                            <Icon
                              className="notif-icon"
                              icon="fa6-solid:helmet-safety"
                            />
                            <p className="p-small">
                              {viewuser == null ? "-" : viewuser}
                            </p>
                          </div>
                          <div className="col"></div>
                        </div>
                        <div className="d-flex row">
                          <div className="d-flex pb-2 gap-2 col">
                            <Icon
                              className="notif-icon"
                              icon="akar-icons:clock"
                            />
                            <p className="p-small">{viewtime}</p>
                          </div>
                          <div className="d-flex pb-2 gap-2 col">
                            <Icon className="notif-icon" icon="codicon:note" />
                            <p className="p-small">
                              {viewcomment == null
                                ? "-"
                                : viewcomment.length < 30
                                ? viewcomment
                                : viewcomment.substr(0, 29) + "..."}
                            </p>
                          </div>
                          <div className="col"></div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="d-flex pb-2 gap-2 col">
                          <Icon className="notif-icon" icon="bi:camera-fill" />
                          <p className="p-small">
                            {viewcctvname} - {viewcctvlocation}
                          </p>
                        </div>
                        <div className="d-flex pb-2 gap-2 col">
                          <Icon
                            className="notif-icon"
                            icon="akar-icons:clock"
                          />
                          <p className="p-small">{viewtime}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  {viewstatus == "not_yet" ? (
                    <div className="col">
                      <Validation
                        viewid={viewid}
                        handleClick={handleClick}
                        click={click}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="shadow-all mb-3 bg-body rounded-top px-3 py-2">
                <div className="row">
                  <div className="col-9">
                    <h6 className="fw-semibold">List Deviasi</h6>
                    <p className="p-small">List deviasi yang terdeteksi</p>
                  </div>
                  <div className="col-3 d-flex justify-content-end align-items-center">
                    <div className="dropdown">
                      <button
                        type="button"
                        className="fw-semibold"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="false"
                      >
                        {(filtercctv == "AllName/AllLocation") &
                        (validation == "Allvalidation") ? (
                          <Icon
                            className="validation-filter-icon fs-4 rounded p-1 shadow-all"
                            icon="material-symbols:filter-list-off"
                          />
                        ) : (
                          <Icon
                            className="validation-filter-icon fs-4 rounded p-1 shadow-all"
                            icon="material-symbols:filter-list"
                          />
                        )}
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <div className="d-flex justify-content-center mb-1">
                          <div className="fw-bolder">Filter CCTV</div>
                        </div>
                        <li>
                          <a
                            className="text-decoration-none"
                            href="#updeviation"
                          >
                            <button
                              className={
                                "dropdown-item" +
                                (filtercctv == "AllName/AllLocation"
                                  ? " dropdown-item-active"
                                  : "")
                              }
                              onClick={() => {
                                setFiltercctv("AllName/AllLocation");
                                SetDatalimit(10);
                              }}
                            >
                              Semua Kamera
                            </button>
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-decoration-none"
                            href="#updeviation"
                          >
                            <button
                              className={
                                "dropdown-item" +
                                (filtercctv == "CCTV BMO2/E Camera 3"
                                  ? " dropdown-item-active"
                                  : "")
                              }
                              onClick={() => {
                                setFiltercctv("CCTV BMO2/E Camera 3");
                                SetDatalimit(10);
                              }}
                            >
                              CCTV BMO2 - E Camera 3
                            </button>
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-decoration-none"
                            href="#updeviation"
                          >
                            <button
                              className={
                                "dropdown-item" +
                                (filtercctv == "CCTV BMO2/E Camera 2"
                                  ? " dropdown-item-active"
                                  : "")
                              }
                              onClick={() => {
                                setFiltercctv("CCTV BMO2/E Camera 2");
                                SetDatalimit(10);
                              }}
                            >
                              CCTV BMO2 - E Camera 2
                            </button>
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-decoration-none"
                            href="#updeviation"
                          >
                            <button
                              className={
                                "dropdown-item" +
                                (filtercctv == "CCTV BMO2/7West Camera 1"
                                  ? " dropdown-item-active"
                                  : "")
                              }
                              onClick={() => {
                                setFiltercctv("CCTV BMO2/7West Camera 1");
                                SetDatalimit(10);
                              }}
                            >
                              CCTV BMO2 - 7West Camera 1
                            </button>
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-decoration-none"
                            href="#updeviation"
                          >
                            <button
                              className={
                                "dropdown-item" +
                                (filtercctv == "CCTV BMO2/PIT E1 [disabled]"
                                  ? " dropdown-item-active"
                                  : "")
                              }
                              onClick={() => {
                                setFiltercctv("CCTV BMO2/PIT E1 [disabled]");
                                SetDatalimit(10);
                              }}
                            >
                              CCTV BMO2 - PIT E1 [disabled]
                            </button>
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-decoration-none"
                            href="#updeviation"
                          >
                            <button
                              className={
                                "dropdown-item" +
                                (filtercctv == "CCTV BMO2/Low Wall Pit E"
                                  ? " dropdown-item-active"
                                  : "")
                              }
                              onClick={() => {
                                setFiltercctv("CCTV BMO2/Low Wall Pit E");
                                SetDatalimit(10);
                              }}
                            >
                              CCTV BMO2 - Low Wall Pit E
                            </button>
                          </a>
                        </li>
                        <div className="d-flex justify-content-center border-top border-secondary my-1 pt-2">
                          <div className="fw-bolder">Filter Tipe Validasi</div>
                        </div>
                        <li>
                          <a
                            className="text-decoration-none"
                            href="#updeviation"
                          >
                            <button
                              className={
                                "dropdown-item" +
                                (validation == "Allvalidation"
                                  ? " dropdown-item-active"
                                  : "")
                              }
                              onClick={() => {
                                setValidation("Allvalidation");
                                SetDatalimit(10);
                              }}
                            >
                              Semua Tipe Validasi
                            </button>
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-decoration-none"
                            href="#updeviation"
                          >
                            <button
                              className={
                                "dropdown-item" +
                                (validation == "validated"
                                  ? " dropdown-item-active"
                                  : "")
                              }
                              onClick={() => {
                                setValidation("validated");
                                SetDatalimit(10);
                              }}
                            >
                              Tervalidasi
                            </button>
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-decoration-none"
                            href="#updeviation"
                          >
                            <button
                              className={
                                "dropdown-item" +
                                (validation == "unvalidated"
                                  ? " dropdown-item-active"
                                  : "")
                              }
                              onClick={() => {
                                setValidation("unvalidated");
                                SetDatalimit(10);
                              }}
                            >
                              Belum Tervalidasi
                            </button>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shadow-all mb-3 bg-body rounded-bottom px-3 py-2">
                <div className="d-grid px-2 py-2 border-bottom border-2 notificationfilter-component">
                  <div className="d-flex gap-2">
                    <a href="#updeviation">
                      <button
                        type="button"
                        className={
                          "shadow-all btn fw-semibold rounded-5 text-start" +
                          (object == "AllObject"
                            ? " btn-outline-success"
                            : " btn-success")
                        }
                        onClick={() => {
                          setObject("AllObject");
                          SetDatalimit(10);
                        }}
                      >
                        Semua
                      </button>
                    </a>
                    <a href="#updeviation">
                      <button
                        type="button"
                        className={
                          "shadow-all btn fw-semibold rounded-5 text-start" +
                          (object == "Person"
                            ? " btn-outline-success"
                            : " btn-success")
                        }
                        onClick={() => {
                          setObject("Person");
                          SetDatalimit(10);
                        }}
                      >
                        Person
                      </button>
                    </a>
                    <a href="#updeviation">
                      <button
                        type="button"
                        className={
                          "shadow-all btn fw-semibold rounded-5 text-start" +
                          (object == "LV"
                            ? " btn-outline-success"
                            : " btn-success")
                        }
                        onClick={() => {
                          setObject("LV");
                          SetDatalimit(10);
                        }}
                      >
                        LV
                      </button>
                    </a>
                    <a href="#updeviation">
                      <button
                        type="button"
                        className={
                          "shadow-all btn fw-semibold rounded-5 text-start" +
                          (object == "HD"
                            ? " btn-outline-success"
                            : " btn-success")
                        }
                        onClick={() => {
                          setObject("HD");
                          SetDatalimit(10);
                        }}
                      >
                        HD
                      </button>
                    </a>
                  </div>
                </div>
                <div className="px-2 py-2 overflow-auto notification-list mt-2 relative-component">
                  <div
                    className={
                      "absolute-component" +
                      (loading == true ? " absolute-blur" : "")
                    }
                  >
                    <div id="updeviation"></div>
                    <div className="notificationlistbutton-component d-grid gap-2">
                      {arr}
                    </div>
                    <div className="load-more d-flex justify-content-center mt-3">
                      <a
                        className={
                          "p-medium" +
                          (data.length < datalimit
                            ? " disabled text-secondary"
                            : "")
                        }
                        onClick={() => {
                          SetDatalimit(datalimit + 10);
                        }}
                      >
                        {(data.length == datalimit) & (loading == false)
                          ? "Load More"
                          : ""}
                      </a>
                    </div>
                  </div>
                  {loading == true ? (
                    <div className="d-flex justify-content-center">
                      <div className="absolute-component absolute-fixed">
                        <div
                          className="spinner-border text-success"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValidasiDeviasi;
