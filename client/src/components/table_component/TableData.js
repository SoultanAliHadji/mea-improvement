import "../../App.css";
import TableUser from "./TableUser";
import axios from "axios";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import ReactImageMagnify from "react-magnify-image";

const TableData = ({ filtercctv, filterobject, filterdate }) => {
  const [data, setData] = useState([{}]);
  const modalimage = "mining_eyes.jpg";
  const datalimit = 32;
  const [numstart, setNumstart] = useState(0);
  const [numend, setNumend] = useState(4);
  const lastpage = " text-black-50 disabled";

  useEffect(() => {
    axios
      .get(
        (filtercctv == "All") & (filterobject == "All")
          ? ("/viewvalidated/" + datalimit)
          : (filtercctv == "All") & (filterobject != "All")
          ? "/viewtable/" + filterobject + "/" + datalimit
          : (filtercctv != "All") & (filterobject == "All")
          ? ("/viewtable/" + filtercctv + "/" + datalimit)
          : ("/viewtable/" + filtercctv + "/" + filterobject + "/" + datalimit)
      )
      .then((res) => {
        console.log("Getting from ::::", res.data.data);
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [filtercctv, filterobject, filterdate]);

  const arr = data.slice(numstart, numend).map((data, index) => {
    return (
      <tr className="align-middle" key={data.id}>
        <th className="text-center" scope="row">
          {data.id}
        </th>
        <td>
          {data.name} - {data.location}
        </td>
        <td>{data.created_at}</td>
        <td className="text-center">{data.type_object}</td>
        <td className="text-center">
          <img
            className="data-img"
            src={require("../../assets/" + modalimage)}
            alt=""
          />
        </td>
        <td>{(data.comment = "NULL" ? "Empty" : data.comment)}</td>
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
          <TableUser imageid={data.id} />
        </td>
        <td>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-outline-success"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <Icon className="modal-icon" icon="fa-solid:eye" />
            </button>
          </div>
        </td>
        <div
          className="modal fade"
          id="exampleModal"
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
                      src: require("../../assets/" + modalimage),
                    },
                    largeImage: {
                      src: require("../../assets/" + modalimage),
                      width: 1600,
                      height: 700,
                    },
                    enlargedImagePosition: "over",
                  }}
                />
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
                setNumstart(numstart - 4);
                setNumend(numend - 4);
              }}
            >
              Previous
            </button>
          </li>
          <li className="page-item" key={data.id}>
            <button
              className={
                "page-link" + (numend == datalimit ? lastpage : " text-success")
              }
              onClick={() => {
                setNumstart(numstart + 4);
                setNumend(numend + 4);
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
