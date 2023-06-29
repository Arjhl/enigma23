import styles from "./WorkshopDetail.module.css";
import { useNavigate } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";

const LazerShowDetail = () => {
  const nav = useNavigate();

  const clickHandler = () => {
    nav("/workshops");
  };

  return (
    <div className={styles.container}>
      <div onClick={clickHandler}>
        <i className="fa-solid fa-xmark"></i>
      </div>
      <div className={styles.img}>
        <img
          src="https://images.unsplash.com/photo-1574154894072-18ba0d48321b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
          srcset=""
        />
      </div>
      <div className={styles.flex_cont}>
        <aside className={styles.aside}>
          <p className={styles.subheadhead}>Venue</p>
          <p>Auditorium</p>
          <p className={styles.subheadhead}>Date</p>
          <p>03/06</p>
          <p className={styles.subheadhead}>Contact</p>
          <p>
            Vidwath : <br />
            70193 47171
          </p>
        </aside>
        <div className={styles.main_content}>
          <h2 className={styles.head}>Lazer Show </h2>
          <h3 className={styles.subhead}>Description</h3>
          <p className={styles.desc}>
            Immerse yourself in an electrifying atmosphere buzzing with the
            latest trends, breakthroughs, and game-changing ideas that are
            revolutionising the way we live, work, and interact. From technical
            aspects and robotics to stocks,lazer show, and beyond, Enigma is
            your gateway to the frontiers of technology.
          </p>

          <h3 className={styles.subhead}>Instructions</h3>
          <p className={styles.desc}>- Gate Opens at 5:00PM</p>
          <p className={styles.desc}>
            - Ticket Compulsory.This ticket permits entry to the event venue
            only.
          </p>
          <p className={styles.desc}>
            - Please remember to carry your college Id card. You may not be
            permitted to enter in the absence of one.
          </p>
          <p className={styles.desc}>
            - Organiser reserves the right to deny entry at any time as a
            precautionary measure to uphold the highest level of health and
            safety for everyone.
          </p>
          <p className={styles.desc}>
            - Please do not carry dangerous or potentially hazardous objects
            including but not limited to weapons, knives, guns, fireworks.
          </p>
        </div>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default LazerShowDetail;
