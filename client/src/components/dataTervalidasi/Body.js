import "../../App.css";
import TableData from "../table_component/TableData";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const Body = () => {
  const [filtercctv, setFiltercctv] = useState("All");
  const [filterobject, setFilterobject] = useState("All");

  function handlerFiltercctv(data) {
    setFiltercctv(data.target.value);
  }

  function handlerFilterobject(data) {
    setFilterobject(data.target.value);
  }

  return (
    <div className="datatervalidasi-body">
      <div className="body-bg">
        <div className="container pt-3 pb-3">
          <div className="shadow-all mb-3 bg-body rounded-top px-3 py-2">
            <div className="mb-3">
              <h6 className="fw-semibold">Data Deviasi Tervalidasi</h6>
            </div>
            <div className="row mb-2 p-medium">
              <div className="col-3">
                <p>CCTV</p>
                <div className="input-group">
                  <label className="input-group-text" for="inputGroupSelect03">
                    <Icon className="filter-icon" icon="bi:camera-fill" />
                  </label>
                  <select
                    className="form-select"
                    id="inputGroupSelect01"
                    defaultValue={filtercctv}
                    onChange={handlerFiltercctv}
                  >
                    <option selected value="All">
                      Semua
                    </option>
                    <option value="CCTV BMO2/E Camera 3">
                      CCTV BMO2 - E Camera 3
                    </option>
                    <option value="CCTV BMO2/E Camera 2">
                      CCTV BMO2 - E Camera 2
                    </option>
                    <option value="CCTV BMO2/7West Camera 1">
                      CCTV BMO2 - 7West Camera 1
                    </option>
                    <option value="CCTV BMO2/PIT E1 [disabled]">
                      CCTV BMO2 - PIT E1 [disabled]
                    </option>
                    <option value="CCTV BMO2/Low Wall Pit E">
                      CCTV BMO2 - Low Wall Pit E
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-3">
                <p>Objek</p>
                <div className="input-group">
                  <label className="input-group-text" for="inputGroupSelect03">
                    <Icon
                      className="filter-icon"
                      icon="ic:round-filter-center-focus"
                    />
                  </label>
                  <select
                    className="form-select"
                    id="inputGroupSelect02"
                    defaultValue={filterobject}
                    onChange={handlerFilterobject}
                  >
                    <option selected value="All">
                      Semua
                    </option>
                    <option value="Person">Person</option>
                    <option value="LV">LV</option>
                    <option value="HD">HD</option>
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
                    <option value="31">Hari ini</option>
                    <option value="32">3 Hari</option>
                    <option value="33">7 Hari</option>
                  </select>
                </div>
              </div>
              <div className="col-3 d-flex align-items-end justify-content-end">
                <div className="d-flex gap-3">
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
          </div>
          <div className="shadow-all bg-body rounded-bottom px-3 py-3">
            <TableData filterobject={filterobject} filtercctv={filtercctv} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
