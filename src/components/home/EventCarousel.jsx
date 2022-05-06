import HomeEvent from "./HomeEvent";

export default function EventCarousel({ id }) {
  return (
    <div className="accordion-body">
      <div
        id={"carouselExampleIndicators" + id}
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target={"#carouselExampleIndicators" + id} 
            data-bs-slide-to="0"
            class="active"
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
        <div class="carousel-inner eci">
          <HomeEvent first={" active"} />
          <HomeEvent first={""} />
          <HomeEvent first={""} />
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target={"#carouselExampleIndicators" + id} 
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target={"#carouselExampleIndicators" + id} 
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
