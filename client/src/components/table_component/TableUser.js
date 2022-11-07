import "../../App.js";
import axios from "axios";
import { useState, useEffect } from "react";

const TableUser = ({ deviationid }) => {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    axios
      .get("/image/" + deviationid)
      .then((res) => {
        console.log("Getting from ::::", res.data.data.realtime_deviation);
        setData(res.data.data.realtime_deviation);
      })
      .catch((err) => console.log(err));
  }, []);

  const arr = data.map((data, index) => {
    return <div>{data.user_id == null ? "-" : data.user_id}</div>;
  });

  return (
    <div>
      {arr}
    </div>
  );
};

export default TableUser;
