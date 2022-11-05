import "../../App.css";
import TableData from "../table_component/TableData";
import { Icon } from "@iconify/react";

const Body = () => {
  return (
    <div className="datatervalidasi-body">
      <div className="body-bg">
        <div className="container pt-3 pb-3">
          <div className="shadow-all bg-body rounded px-3 py-3">
            <h6 className="fw-semibold mb-3">Data Deviasi Tervalidasi</h6>
            <div className="row mb-4 p-medium">
              <div className="col-3">
                <p>CCTV</p>
                <div className="input-group">
                  <label className="input-group-text" for="inputGroupSelect03">
                  <Icon className="filter-icon" icon="bi:camera-fill" />
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
                  <Icon className="filter-icon" icon="ic:round-filter-center-focus" />
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
                  <Icon className="filter-icon" icon="bi:calendar-week" />
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
                    <Icon className="button-icon me-1" icon="entypo:magnifying-glass" />
                      Search
                    </div>
                  </button>
                  <button
                    type="button"
                    className="shadow-all btn btn-success fw-semibold py-2 rounded-3"
                    data-bs-toggle="modal"
                  >
                    <div>
                    <Icon className="button-icon me-1" icon="entypo:export" />
                      Export
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <TableData />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
