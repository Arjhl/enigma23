import styles from "./Hero.module.css";
import headImg from "../src/assets/images/head.svg";
import mobileVid from "../src/assets/images/mobile.mp4";
import deskVid from "../src/assets/images/video.mp4";
import { useState } from "react";

const Hero = () => {
  // Set the date we're counting down to
  var countDownDate = new Date("June 1, 2023 00:00:00").getTime();

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Update the count down every 1 second
  setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      setDays(0);
      setMinutes(0);
      setHours(0);
      setSeconds(0);
    }
  }, 1000);

  return (
    <>
      <div className={styles.main_head}>
        <p className={styles.para}>The Malnad Technical Club Presents</p>
        <img src={headImg} alt="" />
        {/* <h2 className={styles.para}>Powered By:</h2> */}
        <div className={styles.countdown}>
          <h2 className={styles.countdown_head}>Enigma'23 Countdown:</h2>
          <div className={styles.countdown_flex}>
            <div>
              <p className={styles.countdown_value}>
                {String(days)
                  ?.split()
                  .map((day) => {
                    if (day < 1) {
                      return `00`;
                    }
                    if (day.length > 1) {
                      return day;
                    } else {
                      return 0 + day;
                    }
                  })}
              </p>
              <p className={styles.countdown_sub}>Days</p>
            </div>
            <div>
              <p className={styles.countdown_value}>
                {String(hours)
                  ?.split()
                  .map((day) => {
                    if (day < 1) {
                      return `00`;
                    }
                    if (day.length > 1) {
                      return day;
                    } else {
                      return 0 + day;
                    }
                  })}
              </p>
              <p className={styles.countdown_sub}>Hours</p>
            </div>
            <div>
              <p className={styles.countdown_value}>
                {String(minutes)
                  ?.split()
                  .map((day) => {
                    if (day < 1) {
                      return `00`;
                    }
                    if (day.length > 1) {
                      return day;
                    } else {
                      return 0 + day;
                    }
                  })}
              </p>
              <p className={styles.countdown_sub}>Minutes</p>
            </div>
            <div>
              <p className={styles.countdown_value}>
                {String(seconds)
                  ?.split()
                  .map((day) => {
                    if (day < 1) {
                      return `00`;
                    }
                    if (day.length > 1) {
                      return day;
                    } else {
                      return 0 + day;
                    }
                  })}
              </p>
              <p className={styles.countdown_sub}>Seconds</p>
            </div>
          </div>
        </div>
      </div>
      <video loop autoPlay muted className={styles.hero_vid}>
        <source
          type="video/mp4"
          src={screen.width > 600 ? deskVid : mobileVid}
        />
      </video>
    </>
  );
};

export default Hero;
