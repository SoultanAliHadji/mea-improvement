import "../../App.css";
import SeeAllNotificationButton from "./SeeAllNotificationButton";
import NotificationList from "./NotificationList";
import axios from "axios";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import ReactImageMagnify from "react-magnify-image";

const Body = () => {
  const [data, setData] = useState([{}]);
  const [cctvid, setCctvid] = useState(1);
  const [cctvname, setCctvname] = useState("CCTV BMO2");
  const [cctvlocation, setCctvlocation] = useState("E Camera 3");
  const livecctv = "http://10.1.74.9:5000/video_feed/" + cctvid;

  useEffect(() => {
    axios
      .get("/cctv")
      .then((res) => {
        console.log("Getting from ::::", res.data.data);
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const arr = data.map((data, index) => {
    return (
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
          }}
        >
          <div className="">
            {data.name} - {data.location}
          </div>
        </button>
      </div>
    );
  });

  return (
    <div className="livemonitoring-body">
      <div className="body-bg">
        <div className="container pt-3">
          <div className="row">
            <div className="col">
              <div className="shadow-all mb-3 bg-body rounded-top px-3 py-2">
                <h6 className="fw-semibold">Data CCTV Mining Eyes</h6>
                <p className="p-small">
                  Pilih CCTV untuk melihat live monitoring
                </p>
              </div>
              <div className="shadow-all mb-3 bg-body rounded-bottom px-3 py-2 cctvlistbutton-component">
                {arr}
              </div>
            </div>
            <div className="col-6">
              <div className="shadow-all mb-3 bg-body rounded-top px-3 py-2">
                <h6 className="fw-semibold">Real Time Monitoring</h6>
                <p className="p-small">Monitoring Deteksi Deviasi</p>
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
                      enlargedImagePosition : "over",
                    }}
                  />
                  <div className="cam-navigation shadow-all d-flex justify-content-end align-items-center p-2">
                    <button class="navigation">
                      <Icon icon="charm:refresh" />
                    </button>
                    <button class="navigation">
                      <Icon icon="akar-icons:chevron-left" />
                    </button>
                    <button class="navigation">
                      <Icon icon="akar-icons:chevron-right" />
                    </button>
                    <button class="navigation">
                      <Icon icon="akar-icons:chevron-down" />
                    </button>
                    <button class="navigation">
                      <Icon icon="akar-icons:chevron-up" />
                    </button>
                    <button class="navigation">
                      <Icon icon="bx:zoom-out" />
                    </button>
                    <button class="navigation">
                      <Icon icon="bx:zoom-in" />
                    </button>
                    <button class="navigation">
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
                    <p className="p-small">10.1.73.20</p>
                  </div>
                  <p className="fw-semibold pe-2 p-small pb-2">
                    Titik Koordinat
                  </p>
                  <div className="d-flex p-small">
                    <div className="d-flex pe-4">
                      <p className="fw-semibold pe-2">X</p>
                      <p>0.123456789</p>
                    </div>
                    <div className="d-flex pe-4">
                      <p className="fw-semibold pe-2">Y</p>
                      <p>0.123456789</p>
                    </div>
                    <div className="d-flex">
                      <p className="fw-semibold pe-2">Z</p>
                      <p>0.123456789</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="shadow-all mb-3 bg-body rounded-top px-3 py-2">
                <h6 className="fw-semibold">List Deviasi</h6>
                <p className="p-small">List deviasi yang terdeteksi</p>
              </div>
              <div className="shadow-all mb-3 bg-body rounded-bottom px-3 py-2">
                <NotificationList />
                <div className="px-2 py-1 seeallnotificationbutton-component">
                  <SeeAllNotificationButton />
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
