import { useState } from "react";
import styles from "./Schedule.module.css";

const schedule_array = [
  {
    event: "Ingenium",
    time: "5:30PM",
    date: 0,
    venue: "SA101",
  },
  {
    event: "PlayBytes",
    time: "6:20PM",
    date: 0,
    venue: "SA201",
    end: true,
  },
  {
    event: "Resonance",
    time: "5:30PM",
    date: 1,
    venue: "SA201",
  },
  {
    event: "Inquizitive",
    time: "6:20PM",
    date: 1,
    venue: "SA101",
    end: true,
  },
  {
    event: "MegaStructure",
    time: "1:30PM",
    date: 2,
    venue: "SA101",
  },
  {
    event: "Inquizitive(Finals)",
    time: "1:30PM",
    date: 2,
    venue: "Mechanical Seminar Hall",
  },
  {
    event: "Ingenium(Finals)",
    time: "2:30PM",
    date: 2,
    venue: "SA201",
  },
  {
    event: "PlayBytes(Finals)",
    time: "2:30PM",
    date: 2,
    venue: "",
  },
  {
    event: "Resonance(Finals)",
    time: "2:30PM",
    date: 2,
    venue: "SA103",
  },
  {
    event: "Lazer Show",
    time: "5:00PM",
    date: 2,
    venue: "Auditorium",
    end: true,
  },
  {
    event: "Xtreme Machine",
    time: "9:30AM",
    date: 3,
    venue: "Auditorium",
  },
  {
    event: "Mystique Locomotor",
    time: "9:30AM",
    date: 3,
    venue: "Auditorium",
  },
  {
    event: "National Level Paper Presentation",
    time: "10:30AM",
    date: 3,
    venue: "Alumni Hall",
  },
  {
    event: "SpudZooka",
    time: "10:30AM",
    date: 3,
    venue: "Football Ground",
  },

  {
    event: "RoboKombat",
    time: "11:00AM",
    date: 3,
    venue: "Auditorium",
  },
  {
    event: "AeroNautica",
    time: "12:30PM",
    date: 3,
    venue: "Football Ground",
  },
  {
    event: "RoboSoccer",
    time: "2:00PM",
    date: 3,
    venue: "Auditorium",
    end: true,
  },
];

const Schedule = () => {
  const [date, setDate] = useState(0);

  const scheduleHandler = (e) => {
    setDate(Number(e.target.dataset.id));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.head}>SCHEDULE</h2>
      <div className={styles.schedule_dates}>
        <h3
          onClick={scheduleHandler}
          data-id="0"
          className={date == 0 ? styles.active : ""}
        >
          01/06
        </h3>
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
