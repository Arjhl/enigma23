import styles from "./Event.module.css";
import EventCard from "./EventCard";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useContext } from "react";
import { EventContext } from "../src/store/event-context";

const Event = () => {
  const ctx = useContext(EventContext);
  const national = [];
  const design = [];
  const paper = [];
  const online = [];

  ctx.forEach((event) => {
    if (event.type === "national") {
      national.push(event);
    } else if (event.type === "design") {
      design.push(event);
    } else if (event.type === "paper") {
      paper.push(event);
    } else if (event.type === "online") {
      online.push(event);
    }
  });

  return (
    <div id="app">
      <NavBar />
      <div>
        <h2 className={styles.head}>National Level Event</h2>
        {national.map((e) => (
          <EventCard {...e} />
        ))}
      </div>
      <div>
        <h2 className={styles.head}>Design and Build </h2>
        {design.map((e) => (
          <EventCard {...e} />
        ))}
      </div>
      <div>
        <h2 className={styles.head}>Paper Events</h2>
        {paper.map((e) => (
          <EventCard {...e} />
        ))}
      </div>
      <div>
        <h2 className={styles.head}>Online Events</h2>
        {online.map((e) => (
          <EventCard {...e} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Event;
