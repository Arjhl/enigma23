import NavBar from "./NavBar";
import Footer from "./Footer";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div id="app">
      <NavBar />
      <div className={styles.container}>
        <h2 className={styles.head}>Contact us</h2>
        <div className={styles.card}>
          <a href="tel:+91 63610 34226" className={styles.contact}>
            Reon : +91 96200 20541
          </a>
          <a href="tel:+91 63610 34226" className={styles.contact}>
            Manvith : +91 63610 34226
          </a>
          <a href="mailto:mce.techclub@gmail.com" className={styles.contact}>
            mce.techclub@gmail.com
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
