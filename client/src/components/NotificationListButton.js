import "../App.css";

const NotificationListButton = () => {
  return (
      <button
        type="button"
        className="shadow-all btn btn-success fw-semibold py-2 pb-0 rounded-3 text-start"
      >
        <div className="d-flex">
          <p className="col">Deviasi HD</p>
          <div className="text-primary rounded-2 notification-tag px-2">
            <p>Perlu Validasi</p>
          </div>
        </div>
        <div>
          <div className="d-flex gap-1 details">
            <div>
              <img
                className="notifIcon"
                src={require("../assets/icon-png/photo_camera.png")}
                alt=""
              />
            </div>
            <p>CCTV BMO 2 - E Camera 3</p>
          </div>
          <div className="d-flex gap-1 details">
            <div>
              <img
                className="notifIcon"
                src={require("../assets/icon-png/access_time.png")}
                alt=""
              />
            </div>
            <div className="d-flex gap-3">
              <p>2022-10-07</p>
              <p>16:26:17</p>
            </div>
          </div>
        </div>
      </button>
  );
};

export default NotificationListButton;
