import styles from "./Sponsors.module.css";
import pulse from "../src/assets/images/spons/pulselogo.png";
import max from "../src/assets/images/spons/max.png";
import hassanNews from "../src/assets/images/spons/hassanNews.png";
import geetaScans from "../src/assets/images/spons/geeta.jpg";
import sunrise from "../src/assets/images/spons/sunrise.png";
import stockGro from "../src/assets/images/spons/stockgro.png";
import homes from "../src/assets/images/spons/homes.jpg";

const Sponsors = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.head}>SPONSORS</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <img src={pulse} alt="" srcset="" />
          {/* <p>Sponsor Detail</p> */}
        </div>
        <div className={styles.card}>
          <img src={geetaScans} alt="" srcset="" />
          {/* <p>Fashion Partner</p> */}
        </div>
        <div className={styles.card}>
          <img src={sunrise} alt="" srcset="" />
          {/* <p>Fashion Partner</p> */}
        </div>
        <div className={styles.card}>
          <img src={homes} alt="" srcset="" />
          {/* <p>Fashion Partner</p> */}
        </div>
        <div className={styles.card}>
          <img src={max} alt="" srcset="" />
          <p>Fashion Partner</p>
        </div>
        <div className={styles.card}>
          <img src={stockGro} srcset="" />
          <p>Platfrom Partner</p>
        </div>
        <div className={styles.card}>
          <img src={hassanNews} alt="" srcset="" />
          <p>Social Media Partner</p>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
