import styles from "./NavBar.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../src/assets/images/logo_enigma.png";

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
        src={logo}
        alt="club-logo"
        className={styles.logo}
        onClick={homeHandler}
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
