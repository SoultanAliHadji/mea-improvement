import "../../App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import ReactImageMagnify from "react-magnify-image";

const TableData = ({ filtercctv, filterobject, year, month, day }) => {
  const [data, setData] = useState([{}]);
  const [modalimage, setModalImage] = useState();
  const datalimit = 100;
  const [numstart, setNumstart] = useState(0);
  const [numend, setNumend] = useState(10);
  const lastpage = " text-black-50 disabled";
  const date = year + "-" + month + "-" + day;
  const [comment, setComment] = useState();
  const [status, setStatus] = useState();

  useEffect(() => {
    axios
      .get(
        (filtercctv == "All") & (filterobject == "All")
          ? "viewvalidated/" + date + "/" + datalimit
          : (filtercctv == "All") & (filterobject != "All")
          ? "/viewtable/" + filterobject + "/" + date + "/" + datalimit
          : (filtercctv != "All") & (filterobject == "All")
          ? "/viewtable/" + filtercctv + "/" + date + "/" + datalimit
          : "/viewtable/" +
            filtercctv +
            "/" +
            filterobject +
            "/" +
            date +
            "/" +
            datalimit
      )
      .then((res) => {
        console.log("Getting from ::::", res.data.data);
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [filtercctv, filterobject, year, month, day]);

  const arr = data.slice(numstart, numend).map((data, index) => {
    return (
      <tr className="align-middle" key={data.id}>
        <th className="text-center" scope="row">
          {data.id}
        </th>
        <td>
          {data.name} - {data.location}
        </td>
        <td>{data.updated_at}</td>
        <td className="text-center">{data.type_object}</td>
        <td className="text-center">
          <img
            className="data-img"
            src={require("../../assets/mining_eyes.jpg")}
            alt=""
          />
        </td>
        <td>
          {data.comment == null
            ? "-"
            : data.comment.length < 10
            ? data.comment
            : data.comment.substr(0, 16) + "..."}
        </td>
        <td>
          <div className="d-flex justify-content-center">
            <div
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
            </div>
          </div>
        </td>
        <td className="text-center">
          {data.user_id == null ? "-" : data.user_id}
        </td>
        <td>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-outline-success"
              data-bs-toggle="modal"
              data-bs-target="#viewModal"
              onClick={() => {
                setComment(data.comment);
                setStatus(data.type_validation);
                setModalImage(require("../../assets/mining_eyes.jpg"));
              }}
            >
              <Icon className="modal-icon" icon="fa-solid:eye" />
            </button>
          </div>
        </td>
        <div
          className="modal fade"
          id="viewModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <ReactImageMagnify
                  className="modal-img"
                  {...{
                    smallImage: {
                      alt: "",
                      isFluidWidth: true,
                      src: modalimage,
                    },
                    largeImage: {
                      src: modalimage,
                      width: 1600,
                      height: 700,
                    },
                    enlargedImagePosition: "over",
                  }}
                />
                <div
                  className={
                    "rounded-2 px-2 fw-bolder mt-2" +
                    (status == "not_yet"
                      ? " text-primary notification-tag"
                      : status == "true"
                      ? " text-success notification-tag-true"
                      : " text-danger notification-tag-false")
                  }
                >
                  {status == "not_yet"
                    ? "Perlu Validasi"
                    : status == "true"
                    ? "Valid"
                    : "Tidak Valid"}
                </div>

                <div className="d-flex gap-1 mt-2 deviation-desc">
                  <label className="fw-bolder">Deskripsi:</label>
                  {comment == null ? "-" : <label>{comment}</label>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </tr>
    );
  });

  return (
    <div className="overflow-auto pt-1">
      <table className="table">
        <thead>
          <tr className="text-center">
            <th className="table-success" scope="col">
              ID
            </th>
            <th className="table-success" scope="col">
              Lokasi CCTV
            </th>
            <th className="table-success" scope="col">
              Date Time
            </th>
            <th className="table-success" scope="col">
              Objek
            </th>
            <th className="table-success" scope="col">
              Gambar Deviasi
            </th>
            <th className="table-success" scope="col">
              Deskripsi
            </th>
            <th className="table-success" scope="col">
              Status
            </th>
            <th className="table-success" scope="col">
              Pengawas
            </th>
            <th className="table-success" scope="col">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="table-group-divider">{arr}</tbody>
      </table>
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center gap-4">
          <li className="page-item">
            <button
              className={
                "page-link" + (numstart == 0 ? lastpage : " text-success")
              }
              onClick={() => {
                setNumstart(numstart - 10);
                setNumend(numend - 10);
              }}
            >
              Previous
            </button>
          </li>
          <li className="page-item" key={data.id}>
            <button
              className={
                "page-link" + (numend > data.length ? lastpage : " text-success")
              }
              onClick={() => {
                setNumstart(numstart + 10);
                setNumend(numend + 10);
              }}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TableData;
