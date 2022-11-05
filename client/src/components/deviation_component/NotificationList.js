import "../../App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const NotificationList = () => {
  const [data, setData] = useState([{}]);
  const [viewid, setViewid] = useState();
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
    <div>
      <div className="d-grid px-2 py-2 border-bottom border-2 notificationfilter-component">
        <div className="d-flex gap-2">
          <button
            type="button"
            className={
              "shadow-all btn fw-semibold rounded-5 text-start" +
              (kategori == "all" ? " btn-outline-success" : " btn-success")
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
              (kategori == "person" ? " btn-outline-success" : " btn-success")
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
              (kategori == "lv" ? " btn-outline-success" : " btn-success")
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
              (kategori == "hd" ? " btn-outline-success" : " btn-success")
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
  );
};

export default NotificationList;
