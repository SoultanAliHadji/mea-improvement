import "../../App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const NotificationList = ({
  cctvname,
  cctvlocation,
  handleRoutePass,
  handleViewid,
}) => {
  const [data, setData] = useState([{}]);
  const [object, setObject] = useState("AllObject");
  const [datalimit, setDatalimit] = useState(10);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState("");
  const gettoken = localStorage.getItem("jwt");

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "http://10.10.10.66:5001/api/viewtable/" +
          cctvname +
          "/" +
          cctvlocation +
          "/" +
          object +
          "/All/Allvalidation/" +
          datalimit,
        {
          headers: {
            Authorization: "Bearer " + gettoken,
          },
        }
      )
      .then((res) => {
        console.log("Getting from ::::", res.data.data);
        setData(res.data.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [cctvname, cctvlocation, object, datalimit, refresh]);

  useEffect(() => {
    setDatalimit(10);
  }, [cctvname, cctvlocation]);



  const arr = data.slice(0, [datalimit]).map((data, index) => {
    return (
      <button
        type="button"
        className="shadow-all btn btn-success fw-semibold py-2 rounded-3 text-start"
        key={data.id}
        onClick={() => {
          handleRoutePass("validasideviasi");
          handleViewid(data.id);
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
    <div>
      <div className="d-grid px-2 py-2 border-bottom border-2 notificationfilter-component">
        <div className="d-flex gap-2">
          <a href="#up">
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
                setDatalimit(10);
              }}
            >
              Semua
            </button>
          </a>
          <a href="#up">
            <button
              type="button"
              className={
                "shadow-all btn fw-semibold rounded-5 text-start" +
                (object == "Person" ? " btn-outline-success" : " btn-success")
              }
              onClick={() => {
                setObject("Person");
                setDatalimit(10);
              }}
            >
              Person
            </button>
          </a>
          <a href="#up">
            <button
              type="button"
              className={
                "shadow-all btn fw-semibold rounded-5 text-start" +
                (object == "LV" ? " btn-outline-success" : " btn-success")
              }
              onClick={() => {
                setObject("LV");
                setDatalimit(10);
              }}
            >
              LV
            </button>
          </a>
          <a href="#up">
            <button
              type="button"
              className={
                "shadow-all btn fw-semibold rounded-5 text-start" +
                (object == "HD" ? " btn-outline-success" : " btn-success")
              }
              onClick={() => {
                setObject("HD");
                setDatalimit(10);
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
            "absolute-component" + (loading == true ? " absolute-hidden" : "")
          }
        >
          <div id="up"></div>
          <div className="notificationlistbutton-component d-grid gap-2">
            {arr}
          </div>
          <div className="load-more d-flex justify-content-center mt-3">
            <a
              className={
                "p-medium" +
                (data.length < datalimit ? " disabled text-secondary" : "")
              }
              onClick={() => {
                setDatalimit(datalimit + 10);
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
              <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default NotificationList;
