import { useEffect, useState } from "react";
import { getAllEvents } from "../apiRequests/Requests";
import About from "./About";
import Carousel from "./Carousel";
import Clubs from "./Clubs";
import Days from "./Days";
import Sponsors from "./Sponsors";

export default function Home() {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function getEvents(){
      setEvents(await getAllEvents());
    }
    getEvents();
  }, []);

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
          <Days events={events} />
          <Sponsors />
          <Clubs />
        </div>
  );
}
