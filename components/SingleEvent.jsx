import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { EventContext } from "../src/store/event-context";
import styles from "./SingleEvent.module.css";
import { ScrollRestoration } from "react-router-dom";

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
        <section className={`fa-solid fa-xmark ${styles.cross}`}></section>
      </div>
      <div className={styles.img}>
        <img src={data.image} />
      </div>
      <div className={styles.flex_cont}>
        <aside className={styles.aside}>
          {data.venue && <p className={styles.subheadhead}>Venue</p>}
          <p>{data.venue}</p>
          {data.date && <p className={styles.subheadhead}>Date</p>}
          <p>{data.date}</p>
          {data.head && <p className={styles.subheadhead}>Event Head</p>}
          <p>{data.head}</p>
          <p>{data.contact}</p>
          <button className={styles.registerButton}>
            {data.link && <a href={data.link}>Register</a>}
          </button>
        </aside>
        <div className={styles.main_content}>
          <h2 className={styles.head}>{data.name}</h2>
          <h3 className={styles.subhead}>Description</h3>
          <p className={styles.desc}>{data.description}</p>

          {data.rules.map((d) => {
            return (
              <div>
                <h3 className={styles.subhead}>{d.head}</h3>
                {d.content &&
                  d.content.map((e, i) => (
                    <p className={styles.desc}>{`${i + 1}. ${e}`}</p>
                  ))}
              </div>
            );
          })}
        </div>
      </div>
      <ScrollRestoration />
    </div>
  );
};
export default SingleEvent;
