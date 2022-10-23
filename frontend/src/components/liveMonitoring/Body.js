import "../../App.css";
import CctvListButton from "../CctvListButton";
import NotificationFilter from "../NotificationFilter";
import NotificationListButton from "../NotificationListButton";
import SeeAllNotificationButton from "../SeeAllNotificationButton";

const Body = () => {
  return (
    <div className="livemonitoring-body">
      <div className="body-bg">
        <div className="container pt-3">
          <div className="row">
            <div className="col">
              <div className="shadow-all mb-3 bg-body rounded-top px-3 py-2">
                <h6 className="fw-semibold">Data CCTV Mining Eyes</h6>
                <p className="p-small">
                  Pilih CCTV untuk melihat live monitoring
                </p>
              </div>
              <div className="shadow-all mb-3 bg-body rounded-bottom px-3 py-2 cctvlistbutton-component">
                <CctvListButton />
                <CctvListButton />
                <CctvListButton />
                <CctvListButton />
                <CctvListButton />
              </div>
            </div>
            <div className="col-6">
              <div className="shadow-all mb-3 bg-body rounded-top px-3 py-2">
                <h6 className="fw-semibold">Real Time Monitoring</h6>
                <p className="p-small">Monitoring Deteksi Deviasi</p>
              </div>
              <div className="shadow-all mb-3 bg-body rounded-bottom px-3 pt-2">
                <div className="d-grid px-2 py-2">
                  <img
                    className="mw-100 border border-3 border-dark"
                    src={require("../../assets/mining_eyes.jpg")}
                    alt=""
                  />
                  <div className="bg-dark">
                    <p>.</p>
                  </div>
                </div>
                <div className="d-grid px-2 pt-2">
                  <h6 className="fw-semibold">CCTV BMO 2 - E Camera 3</h6>
                  <div className="d-flex pb-2">
                    <p className="fw-semibold pe-2 p-small">IP</p>
                    <p className="p-small">10.1.73.20</p>
                  </div>
                  <p className="fw-semibold pe-2 p-small pb-2">
                    Titik Koordinat
                  </p>
                  <div className="d-flex p-small">
                    <div className="d-flex pe-4">
                      <p className="fw-semibold pe-2">X</p>
                      <p>0.123456789</p>
                    </div>
                    <div className="d-flex pe-4">
                      <p className="fw-semibold pe-2">Y</p>
                      <p>0.123456789</p>
                    </div>
                    <div className="d-flex">
                      <p className="fw-semibold pe-2">Z</p>
                      <p>0.123456789</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="shadow-all mb-3 bg-body rounded-top px-3 py-2">
              <h6 className="fw-semibold">List Deviasi</h6>
                <p className="p-small">List deviasi yang terdeteksi</p>
              </div>
              <div className="shadow-all mb-3 bg-body rounded-bottom px-3 py-2">
                <div className="d-grid px-2 py-2 border-bottom border-2 notificationfilter-component">
                    <NotificationFilter />
                </div>
                <div className="d-grid px-2 py-2 overflow-auto notification-list gap-2 mt-2 notificationlistbutton-component">
                  <NotificationListButton />
                  <NotificationListButton />
                  <NotificationListButton />
                  <NotificationListButton />
                  <NotificationListButton />
                  <NotificationListButton />
                  <NotificationListButton />
                  <NotificationListButton />
                </div>
                <div className="px-2 py-1 seeallnotificationbutton-component">
                  <SeeAllNotificationButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
