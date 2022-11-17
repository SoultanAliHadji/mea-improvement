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
  const datalimit = 10;
  const array = data.map((data, index) => {
    return data.id;
  });

  useEffect(() => {
    axios
      .get("/viewtable/AllName/AllLocation/" + object + "/All/" + datalimit)
      .then((res) => {
        console.log("Getting from ::::", res.data.data);
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [
    object,
    viewid,
    viewstatus,
    viewobject,
    viewcctvname,
    viewcctvlocation,
    viewtime,
    viewuser,
    viewcomment,
    viewimage,
    array,
  ]);

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
                      <Validation viewid={viewid} />
                    </div>
                  ) : (
                    ""
                  )}
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
                        (object == "AllObject"
                          ? " btn-outline-success"
                          : " btn-success")
                      }
                      onClick={() => {
                        setObject("AllObject");
                      }}
                    >
                      Semua
                    </button>
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
                      }}
                    >
                      Person
                    </button>
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
                      }}
                    >
                      LV
                    </button>
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
    </div>
  );
};

export default ValidasiDeviasi;
