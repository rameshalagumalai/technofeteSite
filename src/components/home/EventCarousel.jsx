import HomeEvent from "./HomeEvent";

export default function EventCarousel({ id }) {
  return (
    <div className="accordion-body">
      <div
        id={"carouselExampleIndicators" + id}
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target={"#carouselExampleIndicators" + id} 
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target={"#carouselExampleIndicators" + id} 
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target={"#carouselExampleIndicators" + id} 
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner eci">
          <HomeEvent first={" active"} />
          <HomeEvent first={""} />
          <HomeEvent first={""} />
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={"#carouselExampleIndicators" + id} 
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={"#carouselExampleIndicators" + id} 
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
