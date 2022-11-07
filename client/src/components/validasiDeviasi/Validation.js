import "../../App.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Validation = ({ viewid }) => {
  const [data, setData] = useState([{}]);
  const [deviationstatus, setDeviationstatus] = useState(data.type_validation);
  const [deviationcomment, setDeviationcomment] = useState();

  useEffect(() => {
    axios
      .get("/deviation/" + viewid)
      .then((res) => {
        console.log("Getting from ::::", res.data.data);
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function handlerComment(data) {
    setDeviationcomment(data.target.value);
  }

  const handleUpdate = async (datas) => {
    datas.type_validation = "true"
    datas.comment = "Sebuah deviasi"
    await axios.put("/deviation/" + viewid);
    const dataClone = [...data];
    const index = dataClone.indexOf(datas);
    dataClone[index] = { ...datas };
    setData(dataClone);
  };

  const arr = data.map((data, index) => {
    return (
      <div className="d-flex gap-2 justify-content-end validationbutton-component">
        <button
          type="button"
          className="shadow-all btn btn-success fw-semibold py-2 rounded-3"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          onClick={() => {
            setDeviationstatus("true");
          }}
        >
          Valid
        </button>
        <button
          type="button"
          className="shadow-all btn btn-outline-success fw-semibold py-2 rounded-3"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          onClick={() => {
            setDeviationstatus("false");
          }}
        >
          Tidak Valid
        </button>
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h6
                  className="modal-title fw-semibold"
                  id="staticBackdropLabel"
                >
                  Deskripsi Deviasi {viewid} {deviationstatus}
                </h6>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <textarea
                  class="form-control"
                  id="message-text"
                  placeholder="Masukkan keterangan deviasi"
                  defaultValue={deviationcomment}
                  onChange={handlerComment}
                ></textarea>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline-success"
                  data-bs-dismiss="modal"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                  onClick={() => handleUpdate(data)}
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div>{arr}</div>;
};

export default Validation;
