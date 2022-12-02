import "../../App.css";
import SeeAllNotificationButton from "./SeeAllNotificationButton";
import NotificationList from "./NotificationList";
import axios from "axios";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import ReactImageMagnify from "react-magnify-image";

const LiveMonitoring = ({
  handleRoute,
  handleViewidpass,
  handleViewstatuspass,
  handleViewobjectpass,
  handleViewcctvnamepass,
  handleViewcctvlocationpass,
  handleViewtimepass,
  handleViewuserpass,
  handleViewcommentpass,
  handleViewimagepass,
}) => {
  const [data, setData] = useState([{}]);
  const [ptzcctv, setPtzcctv] = useState([{}]);
  const [cctvid, setCctvid] = useState(1);
  const [cctvname, setCctvname] = useState("CCTV BMO2");
  const [cctvlocation, setCctvlocation] = useState("E Camera 3");
  const [cctvip, setCctvip] = useState("10.1.73.20");
  const [cctvusername, setCctvusername] = useState("admin");
  const [cctvpassword, setCctvpassword] = useState("Buma@2020");
  const livecctv = "http://10.1.74.9:5000/video_feed/" + cctvid;
  const [limitrefresh, setLimitrefresh] = useState("");
  const [loading, setLoading] = useState(false);
  const gettoken = localStorage.getItem("jwt");

  const handleClick = (value) => {
    handleRoute(value);
  };

  const handleViewid = (value) => {
    handleViewidpass(value);
  };

  const handleViewstatus = (value) => {
    handleViewstatuspass(value);
  };

  const handleViewobject = (value) => {
    handleViewobjectpass(value);
  };

  const handleViewcctvname = (value) => {
    handleViewcctvnamepass(value);
  };

  const handleViewcctvlocation = (value) => {
    handleViewcctvlocationpass(value);
  };

  const handleViewtime = (value) => {
    handleViewtimepass(value);
  };

  const handleViewuser = (value) => {
    handleViewuserpass(value);
  };

  const handleViewcomment = (value) => {
    handleViewcommentpass(value);
  };

  const handleViewimage = (value) => {
    handleViewimagepass(value);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://10.10.10.66:5001/api/cctv", {
        headers: {
          Authorization: "Bearer " + gettoken,
        },
      })
      .then((res) => {
        console.log("Getting from ::::", res.data.data);
        setData(res.data.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "http://10.10.10.66:5001/api/get-profile-ptz-cctv?ip=" +
          cctvip +
          "&username=" +
          cctvusername +
          "&password=" +
          cctvpassword,
        {
          headers: {
            Authorization: "Bearer " + gettoken,
          },
        }
      )
      .then((res) => {
        console.log("Getting from ::::", res.data.data);
        setPtzcctv(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [cctvid]);

  const arr = data.map((data, index) => {
    return (
      <a className="text-decoration-none" href="#up">
        <div className="d-grid px-2 py-1">
          <button
            type="button"
            className={
              "shadow-all btn fw-semibold py-2 rounded-3 text-start" +
              (cctvid == data.id ? " btn-outline-success" : " btn-success")
            }
            key={data.id}
            onClick={() => {
              setCctvid(data.id);
              setCctvname(data.name);
              setCctvlocation(data.location);
              setCctvip(data.ip);
              setCctvusername(data.username);
              setCctvpassword(data.password);
            }}
          >
            <div className="">
              {data.name} - {data.location}
            </div>
          </button>
        </div>
      </a>
    );
  });

  return (
    <div className="livemonitoring-body">
      <div className="body-bg">
        <div className="container pt-3 pb-1">
          <div className="row">
            <div className="col-lg-3">
              <div className="shadow-all mb-3 bg-body rounded-top px-3 py-2">
                <h6 className="fw-semibold">List CCTV</h6>
                <p className="p-small">
                  Pilih CCTV untuk melihat live monitoring
                </p>
              </div>
              <div className="shadow-all mb-3 bg-body rounded-bottom px-3 py-2 cctvlistbutton-component">
                {loading == true ? (
                  <div className="d-flex justify-content-center">
                    <div className="spinner-border text-success" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : (
                  <div>{arr}</div>
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="shadow-all mb-3 bg-body rounded-top px-3 py-2">
                <h6 className="fw-semibold">Real Time Monitoring</h6>
                <p className="p-small">
                  Monitoring deviasi yang terdeteksi secara real time melalui
                  CCTV Mining Eyes
                </p>
              </div>
              <div className="shadow-all mb-3 bg-body rounded-bottom px-3 pt-2">
                <div className="d-grid px-2 py-2">
                  <ReactImageMagnify
                    className="mw-100 image-border"
                    {...{
                      smallImage: {
                        alt: "",
                        isFluidWidth: true,
                        src: livecctv,
                      },
                      largeImage: {
                        src: livecctv,
                        width: 2000,
                        height: 1100,
                      },
                      enlargedImagePosition: "over",
                    }}
                  />
                  <div className="cam-navigation shadow-all d-flex justify-content-end align-items-center p-2">
                    <button className="navigation">
                      <Icon icon="charm:refresh" />
                    </button>
                    <button className="navigation">
                      <Icon icon="akar-icons:chevron-left" />
                    </button>
                    <button className="navigation">
                      <Icon icon="akar-icons:chevron-right" />
                    </button>
                    <button className="navigation">
                      <Icon icon="akar-icons:chevron-down" />
                    </button>
                    <button className="navigation">
                      <Icon icon="akar-icons:chevron-up" />
                    </button>
                    <button className="navigation">
                      <Icon icon="bx:zoom-out" />
                    </button>
                    <button className="navigation">
                      <Icon icon="bx:zoom-in" />
                    </button>
                    <button className="navigation">
                      <Icon icon="ic:outline-zoom-out-map" />
                    </button>
                  </div>
                </div>
                <div className="d-grid px-2 pt-2">
                  <h6 className="fw-semibold pb-2">
                    {cctvname} - {cctvlocation}
                  </h6>
                  <div className="d-flex pb-2">
                    <p className="fw-semibold pe-2 p-small">IP</p>
                    <p className="p-small">{cctvip}</p>
                  </div>
                  <p className="fw-semibold pe-2 p-small pb-2">
                    Titik Koordinat
                  </p>
                  <div className="d-flex p-small">
                    <div className="d-flex pe-4">
                      <p className="fw-semibold pe-2">X</p>
                      <p>{ptzcctv.x}</p>
                    </div>
                    <div className="d-flex pe-4">
                      <p className="fw-semibold pe-2">Y</p>
                      <p>{ptzcctv.y}</p>
                    </div>
                    <div className="d-flex">
                      <p className="fw-semibold pe-2">Z</p>
                      <p>{ptzcctv.z}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="shadow-all mb-3 bg-body rounded-top px-3 py-2">
                <h6 className="fw-semibold">List Deviasi</h6>
                <p className="p-small">List deviasi yang terdeteksi</p>
              </div>
              <div className="shadow-all mb-3 bg-body rounded-bottom px-3 py-2">
                <NotificationList
                  cctvname={cctvname}
                  cctvlocation={cctvlocation}
                  handleClick={handleClick}
                  handleViewid={handleViewid}
                  handleViewstatus={handleViewstatus}
                  handleViewobject={handleViewobject}
                  handleViewcctvname={handleViewcctvname}
                  handleViewcctvlocation={handleViewcctvlocation}
                  handleViewtime={handleViewtime}
                  handleViewuser={handleViewuser}
                  handleViewcomment={handleViewcomment}
                  handleViewimage={handleViewimage}
                />
                <div className="px-2 py-1 seeallnotificationbutton-component">
                  <SeeAllNotificationButton handleClick={handleClick} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveMonitoring;
