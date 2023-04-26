import styles from "./Error.module.css";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const nav = useNavigate();

  const clickHandler = () => {
    nav("/home");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.head}>
        Thank you for visiting our website! We are still in the process of
        creating an amazing online experience for you. Please excuse our
        appearance while we work to bring you the best event possible. Stay
        tuned for updates and announcements!
        <br />
        <span onClick={clickHandler}>GO HOME</span>
      </h2>
    </div>
  );
};

export default Error;
