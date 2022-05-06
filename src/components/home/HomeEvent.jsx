import { useNavigate } from "react-router-dom";

export default function HomeEvent({ first }) {

  const navigate = useNavigate();

  return (
    <div className={"carousel-item home-event" + first}>
      <div className="card">
        <div className="card-body p-0 row">
          <img
            src="https://backlightblog.com/images/2021/04/landscape-photography-header-2000x1310.jpg"
            className="col-lg-4 p-0"
            alt="event-img"
          />
          <div className="col-lg-8 p-4">
            <h5 className="card-title">Nature Event</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Organized by Gyan the quiz planet
            </h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="card-details text-secondary">
              <p>
                <i className="fas fa-map-marker"></i> A-315
              </p>
              <p>
                <i className="fas fa-calendar"></i> 21 May
              </p>
              <p>
                <i className="fas fa-clock"></i> 3:30 PM
              </p>
            </div>
            <button onClick={()=>navigate("/event")} className="btn btn-primary">
              View more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
