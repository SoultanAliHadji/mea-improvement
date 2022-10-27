import "../App.css";

const TableData = () => {
  return (
    <tr className="align-middle">
      <th scope="row">10212</th>
      <td>BMO 2 - E Camera 3</td>
      <td>Fri, 07 Okt 2022 16:26:11 GMT</td>
      <td>HD</td>
      <td>
        <img
          className="data-img"
          src={require("../assets/mining_eyes.jpg")}
          alt=""
        />
      </td>
      <td>Tidak ada yang tidak menjaga jarak</td>
      <td>
        <p className="text-primary rounded-2 notification-tag px-2 mb-0">
          True
        </p>
      </td>
      <td>Admin</td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img className="modal-icon" src={require("../assets/icon-png/visibility.png")} alt="" />
        </button>
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
              <img className="modal-img" src={require("../assets/mining_eyes.jpg")} alt="" />
            </div>
          </div>
        </div>
      </div>
    </tr>
  );
};

export default TableData;
