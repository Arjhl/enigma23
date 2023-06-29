import NavBar from "./NavBar";
import Footer from "./Footer";
import styles from "./Workshop.module.css";
import gamedevimg from "../src/assets/images/gamedev.gif";
import { useNavigate } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";

const Workshop = () => {
  const nav = useNavigate();

  const lazerbtnHandler = () => {
    nav(`/workshop/lazershow`);
  };

  const readBtnHandler = () => {
    nav(`/workshop/workshopdetail`);
  };

  return (
    <div id="app">
      <NavBar />
      <div className={styles.container}>
        {/* <h3 className={styles.head}>Workshops</h3>
        <div className={styles.card}>
          <div className={styles.imgCard}>
            <img src={gamedevimg} alt="" srcset="" />
          </div>
          <div className={styles.card_foot}>
            <h2 className={styles.subhead}>Unlocking AI's Full Potential.</h2>
            <button className={styles.readBtn} onClick={readBtnHandler}>
              Read More
            </button>
          </div>
        </div> */}

        <h3 className={styles.head}>Shows</h3>
        <div className={styles.card}>
          <div className={styles.imgCard}>
            <img
              src="https://images.unsplash.com/photo-1574154894072-18ba0d48321b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
              srcset=""
            />
          </div>
          <div className={styles.card_foot}>
            <h2 className={styles.subhead}>Lazer Show</h2>
            {/* <button className={styles.readBtn} onClick={lazerbtnHandler}>
              Read More
            </button> */}
          </div>
        </div>
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default Workshop;
