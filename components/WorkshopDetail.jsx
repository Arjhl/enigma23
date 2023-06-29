import gamedevimg from "../src/assets/images/gamedevimage.jpg";
import styles from "./WorkshopDetail.module.css";
import { useNavigate } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";

const WorkshopDetail = () => {
  const nav = useNavigate();

  const clickHandler = () => {
    nav("/workshops");
  };

  return (
    <div className={styles.container}>
      <div onClick={clickHandler}>
        <i className="fa-solid fa-xmark"></i>
      </div>
      <div className={styles.img}>
        <img src={gamedevimg} />
      </div>
      <div className={styles.flex_cont}>
        <aside className={styles.aside}>
          {/* <p className={styles.subheadhead}>Venue</p>
          <p>Alumni Hall</p>
          <p className={styles.subheadhead}>Date</p>
          <p>28/06 && 29/06</p> */}
          <p className={styles.subheadhead}>Contact</p>
          <p>
            Reon : <br />
            86187 00053
          </p>
          <button className={styles.registerButton}>
            <a href="https://forms.gle/ZdUvEQmxs4YTgfu6A">Register</a>
          </button>
        </aside>
        <div className={styles.main_content}>
          <h2 className={styles.head}>Unlocking AI's Full Potential </h2>
          <h3 className={styles.subhead}>Description</h3>
          <p className={styles.desc}>
            AI tools have become an integral part of our daily lives, from
            personalized recommendations in streaming services to
            voice-activated assistants in our homes,they automate tasks, provide
            convenience, and make our lives more efficient, enjoyable, and
            connected. By attending AI tools workshop, participants can engage
            in hands-on activities, explore real-world applications and also
            offer networking opportunities, allowing individuals to connect with
            industry professionals and like-minded enthusiasts. Ultimately, an
            AI tools workshop offers a focused and immersive learning experience
            that can boost expertise and provide valuable insights for
            leveraging AI in various domains.
          </p>

          <h3 className={styles.subhead}>Workshop Highlights</h3>
          <p className={styles.desc}>- Introduction to prompt engineering</p>
          <p className={styles.desc}>
            - Advanced usage customization and fine tuning
          </p>
          <p className={styles.desc}>
            - Revolution of AI in real-world applications and case studies
          </p>
          <p className={styles.desc}>
            - Good multimedia content to help students grasp the material easily
          </p>
          <p className={styles.desc}>
            - Best practices for refining and customizing responses by Hands-on
            practice session
          </p>
          <p className={styles.desc}>- Q&A and troubleshooting.</p>

          <p className={styles.desc}>
            - Wrap-up and resources to continue your Al journey
            beyond the workshop
          </p>

          <h3 className={styles.subhead}>Who Should Attend?</h3>
          <p className={styles.desc}>
            - Interested in learning about how to use AI to enhance productivity
          </p>

          <h3 className={styles.subhead}>Eligibility Criteria:</h3>
          <p className={styles.desc}>
            - There are no pre-requisite for joining this training program.
            Students from any branch can participate in this training Program.
          </p>

          <h3 className={styles.subhead}>Certification Policy:</h3>
          <p className={styles.desc}>
            - Certificate of Merit for all the workshop participants.
          </p>
          <p className={styles.desc}>
            - Certificate of Coordination for the coordinators of the campus
            workshops
          </p>
        </div>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default WorkshopDetail;
