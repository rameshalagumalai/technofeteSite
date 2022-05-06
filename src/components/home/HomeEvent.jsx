import { useNavigate } from "react-router-dom";

export default function HomeEvent({ first }) {

  const navigate = useNavigate();

  return (
    <div class={"carousel-item home-event" + first}>
      <div className="card">
        <div class="card-body row">
          <img
            src="https://backlightblog.com/images/2021/04/landscape-photography-header-2000x1310.jpg"
            className="col-lg-4"
            alt="event-img"
          />
          <div className="col-lg-8 pt-2">
            <h5 class="card-title">Nature Event</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              Organized by Gyan the quiz planet
            </h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="card-details text-secondary">
              <p>
                <i class="fas fa-map-marker"></i> A-315
              </p>
              <p>
                <i class="fas fa-calendar"></i> 21 May
              </p>
              <p>
                <i class="fas fa-clock"></i> 3:30 PM
              </p>
            </div>
            <button onClick={()=>navigate("/event")} class="btn btn-primary">
              View more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
