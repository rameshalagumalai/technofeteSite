import Loader from "../Loader";
import EventCarousel from "./EventCarousel";

export default function Days({ events }) {
  return (
    <div className="section">
      <h3 className="f-700">Events</h3>
      {events.length > 0 ?
        <>
        <ul className="nav nav-pills nav-fill mb-3" id="myTab" role="tablist">
        <li className="nav-item m-0" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Day 1
          </button>
        </li>
        <li className="nav-item m-0" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Day 2
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <EventCarousel events={ events.filter(event => event.day === "23") } id={1} />
        </div>
        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <EventCarousel events={ events.filter(event => event.day === "24") } id={2} />
        </div>
      </div>
        </>: <Loader />
      }
    </div>
  );
}
