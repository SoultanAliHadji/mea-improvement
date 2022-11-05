import "../../App.css";

const SeeAllNotificationButton = () => {
  return (
    <a className="d-grid" href="/validasideviasi">
      <button
        type="button"
        className="shadow-all btn btn-success fw-semibold py-2 rounded-3"
      >
        Lihat Semua
      </button>
    </a>
  );
};

export default SeeAllNotificationButton;
