import styles from "./Footer.module.css";
import vid from "../src/assets/images/end.mp4";
import { useNavigate } from "react-router-dom";
import rule from "../src/assets/rule-fina.pdf";
import brochure from "../src/assets/brochure.pdf";

const Footer = () => {
  const nav = useNavigate();

  const eventHandler = () => {
    nav("/events");
  };

  const teamHandler = () => {
    nav("/team");
  };
  const contactHandler = () => {
    nav("/contact");
  };

  return (
    <div className={styles.container}>
      <div className={styles.vid_parent}>
        <video loop autoPlay muted className={styles.foot_vid}>
          <source type="video/mp4" src={vid} />
        </video>
      </div>
      <h3 className={styles.head}>Quick Links </h3>
      <ul className={styles.quick_list}>
        <li>
          <a href="https://malnadtechnicalclub.com/">
            The Malnad Technical Club
          </a>
        </li>
        <li>
          <a href="https://www.mcehassan.ac.in/">
            Malnad College of Engineering
          </a>
        </li>
        <li onClick={eventHandler}>Events</li>
        <li>
          <a href={rule}>Rulebook</a>
        </li>
        <li>
          <a href={brochure}>Brochure</a>
        </li>
        <li>
          <a href="https://malnadtechnicalclub.com/techsandhya.html">
            Techsandhya
          </a>
        </li>
        <li onClick={teamHandler}>Team</li>
        <li onClick={contactHandler}>Contact</li>
      </ul>
      <h3 className={styles.touch}>Stay in touch</h3>
      <ul className={styles.social_list}>
        <li>
          <section
            className={`${styles.socialLogo} fa-brands fa-instagram`}
          ></section>
          <a href="https://www.instagram.com/malnad_technical_club/?igshid=YmMyMTA2M2Y%3D">
            @malnad_technical_club
          </a>
        </li>
        <li>
          <section
            className={`fa-brands fa-facebook ${styles.socialLogo}`}
          ></section>
          <a href="https://www.facebook.com/FoundationsMTC">@FoundationsMTC</a>
        </li>
        <li>
          <section
            className={`${styles.socialLogo} fa-brands fa-twitter`}
          ></section>
          <a href="https://twitter.com/MalnadTechClub?s=08">@MalnadTechClub</a>
        </li>
      </ul>

      <div className={styles.bottom_parent}>
        <p className={styles.bottom}>
          <section
            className={`fa-regular fa-copyright ${styles.copyright} `}
          ></section>{" "}
          Enigma'23 .<br /> Designed and Developed By The Malnad Technical Club
          🚀.
        </p>
      </div>
    </div>
  );
};

export default Footer;
