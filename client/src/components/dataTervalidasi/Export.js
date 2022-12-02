import "../../App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import ExportData from "./exportdata";

const Export = ({ filtercctv, filterobject, date, dateflip }) => {
  const [data, setData] = useState([{}]);
  const datalimit = 10000;
  const name = "Exported " + dateflip;
  const gettoken = localStorage.getItem("jwt");

  const fieldsAsObjects = {
    cctv_id: "CCTV ID",
    comment: "comment",
    created_at: "created_at",
    id: "id",
    image: "image",
    ip: "ip",
    location: "location",
    name: "name",
    realtime_images_id: "realtime_images_id",
    type_object: "type_object",
    type_validation: "type_validation",
    updated_at: "updated_at",
    user_id: "user_id",
    user_name: "user_name",
    username: "username",
    violate_count: "violate_count",
  };

  const fieldsAsStrings = [
    "cctv_id",
    "comment",
    "created_at",
    "id",
    "image",
    "ip",
    "location",
    "name",
    "realtime_images_id",
    "type_object",
    "type_validation",
    "updated_at",
    "user_id",
    "user_name",
    "username",
    "violate_count",
  ];

  useEffect(() => {
    axios
      .get(
        "http://10.10.10.66:5001/api/viewtable/" +
          filtercctv +
          "/" +
          filterobject +
          "/" +
          date +
          "/Allvalidation/" +
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
      .catch((err) => console.log(err));
  }, [filtercctv, filterobject, date]);

  return <ExportData data={data} fields={fieldsAsObjects} name={name} />;
};

export default Export;
