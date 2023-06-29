import styles from "./EventCard.module.css";
import { useNavigate } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";

const EventCard = (props) => {
  const nav = useNavigate();
  const clickHandler = () => {
    nav(`/events/${props.id}`);
    console.log("stay Tuned");
  };

  console.log(props);

  return (
    <div className={styles.card} onClick={clickHandler}>
      <div className={styles.image_div}>
        <img src={props.image} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{props.name}</h2>
        <div className={styles.flex_date}>
          {props.date && <p className={styles.date}>{props.date}</p>}
          {props.venue && <p className={styles.venue}>{props.venue}</p>}
        </div>

        <p className={styles.desc}>{props.description}</p>
        <button className={styles.btn}>Read More</button>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default EventCard;
