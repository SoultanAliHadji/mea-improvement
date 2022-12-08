import "../../App.css";

const SeeAllNotificationButton = ({ handleRoutePass }) => {
  return (
    <a className="d-grid">
      <button
        type="button"
        className="shadow-all btn btn-success fw-semibold py-2 rounded-3"
        onClick={() => {
          handleRoutePass("validasideviasi");
        }}
      >
        Validasi
      </button>
    </a>
  );
};

export default SeeAllNotificationButton;
