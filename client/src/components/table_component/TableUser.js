import "../../App.js";
import axios from "axios";
import { useState, useEffect } from "react";

const TableUser = ({ imageid }) => {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    axios
      .get("/image/" + imageid)
      .then((res) => {
        console.log("Getting from ::::", res.data.data.realtime_deviation);
        setData(res.data.data.realtime_deviation);
      })
      .catch((err) => console.log(err));
  }, []);

  const arr = data.map((data, index) => {
    return <div>{data.user_id == null ? "Unknown" : data.user_id}</div>;
  });

  return (
    <div>
      {arr}
    </div>
  );
};

export default TableUser;
