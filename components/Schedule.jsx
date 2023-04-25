import { useState } from "react";
import styles from "./Schedule.module.css";

const schedule_array = [
  {
    event: "MCD",
    time: "17:00",
    date: 1,
    venue: "Auditorium",
  },
  {
    event: "MCD",
    time: "17:00",
    date: 1,
    venue: "Auditorium",
  },
  {
    event: "MCD",
    time: "17:00",
    date: 1,
    venue: "Auditorium",
    end: true,
  },

  {
    event: "RoboSoccer",
    time: "17:00",
    date: 2,
    venue: "ME104",
    end: true,
  },
  {
    event: "RoboKombat",
    time: "17:00",
    date: 3,
    venue: "Alumini Hall",
  },
  {
    event: "RoboKombat",
    time: "17:00",
    date: 3,
    venue: "Alumini Hall",
    end: true,
  },
  {
    event: "mystery",
    time: "17:00",
    date: 4,
    venue: "Alumini Hall",
  },
  {
    event: "mystery",
    time: "17:00",
    date: 4,
    venue: "Alumini Hall",
  },

  {
    event: "mystery",
    time: "17:00",
    date: 4,
    venue: "Alumini Hall",
  },
  {
    event: "mystery",
    time: "17:00",
    date: 4,
    venue: "Alumini Hall",
  },
  {
    event: "mystery",
    time: "17:00",
    date: 4,
    venue: "Alumini Hall",
    end: true,
  },
];

const Schedule = () => {
  const [date, setDate] = useState(1);

  const scheduleHandler = (e) => {
    setDate(Number(e.target.dataset.id));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.head}>SCHEDULE</h2>
      <div className={styles.schedule_dates}>
        <h3
          onClick={scheduleHandler}
          data-id="1"
          className={date == 1 ? styles.active : ""}
        >
          02/06
        </h3>
        <h3
          onClick={scheduleHandler}
          data-id="2"
          className={date == 2 ? styles.active : ""}
        >
          03/06
        </h3>
        <h3
          onClick={scheduleHandler}
          data-id="3"
          className={date == 3 ? styles.active : ""}
        >
          04/06
        </h3>
        <h3
          onClick={scheduleHandler}
          data-id="4"
          className={date == 4 ? styles.active : ""}
        >
          05/06
        </h3>
      </div>

      {schedule_array.map((schedule, i) => {
        let a = true;
        if (date !== schedule.date) return;
        console.log(schedule.date);
        console.log(date);
        return (
          <>
            <div className={styles.schedule_time_venue}>
              <span className={styles.circle}></span>
              <div className={styles.schedule_time_flex}>
                <p className={styles.schedule_time}>{schedule.time}</p>
                <p className={styles.schedule_time}>{schedule.event}</p>
                <p className={styles.schedule_time}>{schedule.venue}</p>
              </div>
            </div>
            {!schedule.end && <span className={styles.line}></span>}
          </>
        );
      })}
    </div>
  );
};

export default Schedule;
