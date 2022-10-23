import "../../App.css";
import TableData from "../TableData";

const Body = () => {
  return (
    <div className="datatervalidasi-body">
      <div className="body-bg">
        <div className="container pt-3 pb-3">
          <div className="shadow-all bg-body rounded px-3 py-2">
            <h6 className="fw-semibold">Data Deviasi Tervalidasi</h6>
            <div className="row mb-5">
              <div className="col-3">
                <p>CCTV</p>
                <div className="input-group">
                  <label className="input-group-text" for="inputGroupSelect03">
                    <img
                      className="filter-icon"
                      src={require("../../assets/icon-png/photo_camera.png")}
                      alt=""
                    />
                  </label>
                  <select className="form-select" id="inputGroupSelect01">
                    <option selected>Semua</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="col-3">
                <p>Objek</p>
                <div className="input-group">
                  <label className="input-group-text" for="inputGroupSelect03">
                    <img
                      className="filter-icon"
                      src={require("../../assets/icon-png/center_focus_strong.png")}
                      alt=""
                    />
                  </label>
                  <select className="form-select" id="inputGroupSelect02">
                    <option selected>Semua</option>
                    <option value="1">Person</option>
                    <option value="2">LV</option>
                    <option value="3">HD</option>
                  </select>
                </div>
              </div>
              <div className="col-3">
                <p>Periode</p>
                <div className="input-group">
                  <label className="input-group-text" for="inputGroupSelect03">
                    <img
                      className="filter-icon"
                      src={require("../../assets/icon-png/event_note.png")}
                      alt=""
                    />
                  </label>
                  <select className="form-select" id="inputGroupSelect03">
                    <option selected>Semua</option>
                    <option value="1">Hari ini</option>
                    <option value="2">3 Hari</option>
                    <option value="3">7 Hari</option>
                  </select>
                </div>
              </div>
              <div className="col-3 d-flex align-items-end">
                <div className="d-flex gap-3">
                  <button
                    type="button"
                    className="shadow-all btn btn-success fw-semibold py-2 rounded-3"
                    data-bs-toggle="modal"
                  >
                    <div>
                      <img
                        className="button-icon me-1"
                        src={require("../../assets/icon-png/insert_drive_file.png")}
                        alt=""
                      />
                      Search
                    </div>
                  </button>
                  <button
                    type="button"
                    className="shadow-all btn btn-success fw-semibold py-2 rounded-3"
                    data-bs-toggle="modal"
                  >
                    <div>
                      <img
                        className="button-icon me-1"
                        src={require("../../assets/icon-png/insert_drive_file.png")}
                        alt=""
                      />
                      Export
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <table className="table">
                <thead>
                  <tr>
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
                <tbody className="table-group-divider overflow-auto table-data">
                  <TableData />
                  <TableData />
                  <TableData />
                  <TableData />
                  <TableData />
                  <TableData />
                  <TableData />
                </tbody>
              </table>
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end">
                  <li className="page-item disabled">
                    <a className="page-link">Previous</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
