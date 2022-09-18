import HomeEvent from "./HomeEvent";

export default function EventCarousel({ id, events }){

  var array = [];

  for(var i = 1; i < events.length; i++){
    array.push(i);
  }

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
          {
            array.map(arr => {
              return (
                <button
                  type="button"
                  data-bs-target={"#carouselExampleIndicators" + id} 
                  data-bs-slide-to={arr}
                  aria-label={"Slide "+(arr+1)}
                ></button>
              )
            })
          }
        </div>
        <div className="carousel-inner eci">
          <HomeEvent first={" active"} event={events[0]} />
          {events.map((event, i) => {
            if(i !== 0){
              return <HomeEvent first={""} event={event} />
            }
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          style={{marginLeft: "-15%"}}
          data-bs-target={"#carouselExampleIndicators" + id} 
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          style={{marginRight: "-15%"}}
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
