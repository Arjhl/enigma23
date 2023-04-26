import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { EventContext } from "../src/store/event-context";
import styles from "./SingleEvent.module.css";

const SingleEvent = () => {
  const params = useParams();
  const ctx = useContext(EventContext);
  console.log(params);
  const nav = useNavigate();

  const data = ctx.find((d) => d.id == params.id);

  console.log(data);

  const clickHandler = () => {
    nav(-1);
  };

  return (
    <div className={styles.container}>
      <div onClick={clickHandler}>
        <i className="fa-solid fa-xmark"></i>
      </div>
      <div className={styles.img}>
        <img src={data.image} />
      </div>
      <div className={styles.flex_cont}>
        <aside className={styles.aside}>
          <p>{data.venue}</p>
          <p>{data.date}</p>
          <p>{data.head}</p>
          <p>{data.contact}</p>
        </aside>
        <div className={styles.main_content}>
          <h2 className={styles.head}>{data.name}</h2>
          <h3 className={styles.subhead}>Description</h3>
          <p className={styles.desc}>{data.description}</p>
          <h3 className={styles.subhead}>Rules</h3>
          {data.rules.map((d, i) => (
            <p className={styles.desc}>{`${i + 1}. ${d}`}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SingleEvent;
