import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <p className={styles.about_head}>ABOUT</p>
      <p className={styles.about_content}>
        Enigma is a <span>State-Level Technical Fest</span> which sets the scene
        for students to showcase their talent and create an environment where
        fun and innovation go hand in hand.
      </p>
    </div>
  );
};

export default About;
