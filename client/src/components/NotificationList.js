import "../App.css";
import NotificationFilter from "./NotificationFilter";
import axios from "axios";
import { useState, useEffect } from "react";

const NotificationList = () => {
  const [data, setData] = useState([{}]);
  const [dataid, setDataid] = useState(0)

  useEffect(() => {
    axios
      .get("/image")
      .then((res) => {
        console.log("Getting from ::::", res.data.data);
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const arr = data.slice(0,10).map((data, index) => {
    return (
      <button
        type="button"
        className="shadow-all btn btn-success fw-semibold py-2 pb-0 rounded-3 text-start"
        key={data.id}
        onClick={() => {
          setDataid(data.realtime_deviation[1].id)
        }}
      >
        <div className="d-flex">
          <p className="col">Deviasi HD {dataid}</p>
          <div className="text-primary rounded-2 notification-tag px-2">
            <p>Perlu Validasi</p>
          </div>
        </div>
        <div>
          <div className="d-flex gap-1 details">
            <div>
              <img
                className="notifIcon"
                src={require("../assets/icon-png/photo_camera.png")}
                alt=""
              />
            </div>
            <p>CCTV BMO 2 - E Camera 3</p>
          </div>
          <div className="d-flex gap-1 details">
            <div>
              <img
                className="notifIcon"
                src={require("../assets/icon-png/access_time.png")}
                alt=""
              />
            </div>
            <div className="d-flex gap-3">
              <p>2022-10-07</p>
              <p>16:26:17</p>
            </div>
          </div>
        </div>
      </button>
    );
  });

  return (
    <div>
      <div className="d-grid px-2 py-2 border-bottom border-2 notificationfilter-component">
        <NotificationFilter />
      </div>
      <div className="d-grid px-2 py-2 overflow-auto notification-list gap-2 mt-2 notificationlistbutton-component">
        {arr}
      </div>
    </div>
  );
};

export default NotificationList;
