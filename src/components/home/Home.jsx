import About from "./About";
import Carousel from "./Carousel";
import Days from "./Days";

export default function Home() {

  return (
    <div className="page">
      <Carousel />
      <About />
      <div className="section text-center">
        <iframe
          className="video"
          id="target"
          title="Technofete 2022"
          src="https://www.youtube.com/embed/YXY74kWderc"
        ></iframe>
      </div>
      <Days />
    </div>
  );
}
