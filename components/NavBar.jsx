import styles from "./NavBar.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const nav = useNavigate();
  const [navActive, setNavActive] = useState(false);

  const clickHandler = () => {
    setNavActive((navActive) => !navActive);
  };

  const homeHandler = () => {
    nav("/home");
  };

  const eventHandler = () => {
    nav("/events");
  };
  const workshopHandler = () => {
    nav("/workshops");
  };

  const teamHandler = () => {
    nav("/team");
  };
  const galleryHandler = () => {
    nav("/gallery");
  };
  const contactHandler = () => {
    nav("/contact");
  };

  return (
    <nav className={styles.navbar}>
      <img
        src="https://malnadtechnicalclub.com/images/mtclogo.png"
        alt="club-logo"
        className={styles.logo}
      />
      <ul className={`${styles.list} + ${navActive ? styles.active : ""}`}>
        <li onClick={homeHandler}>Home</li>
        <li onClick={eventHandler}>Events</li>
        <li onClick={workshopHandler}>Workshops and Shows</li>
        <li onClick={teamHandler}>Team</li>
        <li onClick={galleryHandler}>Gallery</li>
        <li onClick={contactHandler}>Contact</li>
      </ul>

      <div className={styles.hamburger} onClick={clickHandler}>
        <span className={navActive ? styles.hamAct : ""}></span>
        <span className={navActive ? styles.hamActNeg : ""}></span>
      </div>
    </nav>
  );
};

export default NavBar;
