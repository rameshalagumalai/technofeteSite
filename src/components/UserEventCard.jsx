import { useNavigate } from "react-router-dom";
import { tConvert } from "./apiRequests/Requests";
import eventImages from "../EventsImages.js";

export default function UserEventCard({ event }) {
  const navigate = useNavigate();

  return (
    <div className="card me-3 mt-3 col-lg-3 p-0 mb-3">
      <img
        className="card-img-top"
        src={eventImages[event.id]}
        alt="Event"
        style={{ height: "200px" }}
      />
      <div className="card-body">
        <h5 className="f-700 card-title">{event.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {`Organized by ${event.club_name}`}
        </h6>
        <p className="card-text">
          {event.description.substring(0, 94) + "..."}
        </p>
        <div className="card-details text-secondary">
          <p>
            <i className="fas fa-location-dot"></i> {event.venue}
          </p>
          <p>
            <i className="fas fa-calendar"></i> {event.date}
          </p>
          <p>
            <i className="fas fa-clock"></i>{" "}
            {tConvert(event.start_time.substring(0, 5))}
          </p>
        </div>
        <button
          onClick={() => navigate(`/events/${event.id}`)}
          className="btn btn-primary"
        >
          View more
        </button>
      </div>
    </div>
  );
}
