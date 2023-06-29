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
        404 Erorr
        <br />
        <span onClick={clickHandler}>GO HOME</span>
      </h2>
    </div>
  );
};

export default Error;
