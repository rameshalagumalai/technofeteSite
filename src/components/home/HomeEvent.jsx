import { useNavigate } from "react-router-dom";
import { tConvert } from "../apiRequests/Requests";
import eventImages from "../../EventsImages.js";

export default function HomeEvent({ first, event }) {

  const navigate = useNavigate();

  return (
    <div className={"carousel-item home-event" + first}>
      <div className="card">
        <div className="card-body p-0 row">
          <img
            src={eventImages[event.id]}
            className="col-lg-4 p-0"
            alt="event-img"
          />
          <div className="col-lg-8 p-4">
            <h5 className="card-title">{event.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Organized by {event.club_name}
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
                <i className="fas fa-clock"></i> {tConvert(event.start_time)}
              </p>
            </div>
            <button onClick={()=>navigate("/events/"+event.id)} className="btn btn-primary">
              View more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
