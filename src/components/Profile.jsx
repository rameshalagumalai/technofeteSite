export default function Profile() {
  return (
    <div className="section page">
      <h2>Hello Ramesh A,</h2>
      <h4 className="text-secondary">Your events</h4>
      <div className="row">
        <div className="card me-3 mt-3 col-lg-3 p-0">
          <img
            className="card-img-top"
            src="https://backlightblog.com/images/2021/04/landscape-photography-header-2000x1310.jpg"
            alt="Event"
          />
          <div className="card-body">
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
            <button type="a" href="/event" className="btn btn-primary">
              View more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
