import "../App.css";

const NotificationFilter = () => {
  return (
    <div className="d-flex gap-2">
      <button
        type="button"
        className="shadow-all btn btn-success fw-semibold rounded-5 text-start"
      >
        Semua
      </button>
      <button
        type="button"
        className="shadow-all btn btn-success fw-semibold rounded-5 text-start"
      >
        Person
      </button>
      <button
        type="button"
        className="shadow-all btn btn-success fw-semibold rounded-5 text-start"
      >
        LV
      </button>
      <button
        type="button"
        className="shadow-all btn btn-success fw-semibold rounded-5 text-start"
      >
        HD
      </button>
    </div>
  );
};

export default NotificationFilter;
