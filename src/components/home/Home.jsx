import About from "./About";
import Carousel from "./Carousel";
import Days from "./Days";

export default function Home() {

  return (
    <div className="mt-5">
      <Carousel />
      <About />
      <div className="section text-center">
        <iframe
          className="video"
          id="target"
          title="Technofete 2022"
          src="https://www.youtube.com/embed/kRTn8bZhu0Y"
        ></iframe>
      </div>
      <Days />
    </div>
  );
}