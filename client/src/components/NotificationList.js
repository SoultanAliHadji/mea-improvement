import "../App.css";
import NotificationFilter from "./NotificationFilter";
import NotificationListButton from "./NotificationListButton";
import axios from "axios";
import { useState, useEffect } from "react";

const NotificationList = () => {
  const [data, setData] = useState([{}]);
  const [cctvid, setCctvid] = useState(1);
  const [cctvname, setCctvname] = useState("CCTV BMO2");
  const [cctvlocation, setCctvlocation] = useState("E Camera 3");

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
          className="shadow-all btn btn-success fw-semibold py-2 rounded-3 text-start"
          key={data.id}
          onClick={() => {
            setCctvid(data.id);
            setCctvname(data.name);
            setCctvlocation(data.location);
          }}
        >
          <div className="d-flex gap-1">
            <div>{data.name}</div>
            <div>{data.location}</div>
          </div>
        </button>
      </div>
    );
  });

  return (
    <div>
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
  );
};

export default NotificationList;
