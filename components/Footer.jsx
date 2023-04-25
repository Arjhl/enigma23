import styles from "./Footer.module.css";
import vid from "../src/assets/images/end.mp4";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.vid_parent}>
        <video loop autoPlay muted className={styles.foot_vid}>
          <source type="video/mp4" src={vid} />
        </video>
      </div>
      <h3 className={styles.head}>Quick Links </h3>
      <ul className={styles.quick_list}>
        <li>The Malnad Technical Club</li>
        <li>Malnad College of Engineering</li>
        <li>Events</li>
        <li>Rulebook</li>
        <li>Brochure</li>
        <li>Techsandhya</li>
        <li>Team</li>
        <li>Contact</li>
      </ul>
      <h3 className={styles.touch}>Stay in touch</h3>
      <ul className={styles.social_list}>
        <li>
          <i class="fa-brands fa-instagram"></i> @malnad_technical_club
        </li>
        <li>
          <i class="fa-brands fa-facebook"></i> @FoundationsMTC
        </li>
        <li>
          <i class="fa-brands fa-twitter"></i> @MalnadTechClub
        </li>
      </ul>

      <div className={styles.bottom_parent}>
        <p className={styles.bottom}>
          <i class="fa-regular fa-copyright"></i>&nbsp;Enigma'23 .<br />{" "}
          Designed and Developed By The Malnad Technical Club 🚀.
        </p>
      </div>
    </div>
  );
};

export default Footer;
