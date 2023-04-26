import reon from "../src/assets/images/team/REON.jpg";
import likith from "../src/assets/images/team/likith.jpeg";
import stuthy from "../src/assets/images/team/Stu.png";
import arshil from "../src/assets/images/team/ali.jpg";
import tejaswini from "../src/assets/images/team/tejaswini.jpg";
import sampath from "../src/assets/images/team/sampath.jpg";
import adithya from "../src/assets/images/team/adithya.jpg";
import angel from "../src/assets/images/team/Angel.jpg";
import anish from "../src/assets/images/team/Anish.jpg";
import arjun from "../src/assets/images/team/Arjun.jpg";
import bhuvana from "../src/assets/images/team/bhuvana.jpg";
import prajwal from "../src/assets/images/team/prajwal.jpg";
import manjushree from "../src/assets/images/team/manjushree.jpg";
import manvith from "../src/assets/images/team/Manvith.jpg";
import monish from "../src/assets/images/team/Monish.jpg";
import nidhi from "../src/assets/images/team/Nidhi.A.Jain.jpg";
import sathvik from "../src/assets/images/team/sathvik.jpg";
import shashank from "../src/assets/images/team/Shashank.jpg";
import shilpa from "../src/assets/images/team/Shilpa_.jpg";
import sucheth from "../src/assets/images/team/sucheth.jpg";
import swati from "../src/assets/images/team/swati.jpg";
import vidwath from "../src/assets/images/team/vidwath.jpg";
import viji from "../src/assets/images/team/Vijithashwa.jpeg";
import vinit from "../src/assets/images/team/Vinith.jpg";

import styles from "./Team.module.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

const finalYears = [
  {
    name: "Reon Julius Rodrigues",
    img: reon,
  },
  {
    name: "Likhith M",
    img: likith,
  },
  {
    name: "Stuthi B Iyer",
    img: stuthy,
  },
  {
    name: "Tejaswini",
    img: tejaswini,
  },
  {
    name: "Sampathkumar S N",
    img: sampath,
  },
  {
    name: "Mohammad Arshil Ali",
    img: arshil,
  },
];

const thirdYears = [
  {
    name: "Adithya R Shetty",
    img: adithya,
  },
  {
    name: "Angel Joseph",
    img: angel,
  },
  {
    name: "Anish Kashyap N",
    img: anish,
  },
  {
    name: "Arjun H L",
    img: arjun,
  },
  {
    name: "Bhuvana N R",
    img: bhuvana,
  },
  {
    name: "J A Prajwal",
    img: prajwal,
  },
  {
    name: "Manjushree Patil",
    img: manjushree,
  },
  {
    name: "Manvith G S",
    img: manvith,
  },
  {
    name: "Monish D Naik",
    img: monish,
  },
  {
    name: "Nidhi A Jain",
    img: nidhi,
  },
  {
    name: "Sathvik Rao",
    img: sathvik,
  },
  {
    name: "Shashank K S",
    img: shashank,
  },
  {
    name: "Shilpashree Y",
    img: shilpa,
  },
  {
    name: "Sucheth S",
    img: sucheth,
  },
  {
    name: "Swati Sunil Shetty",
    img: swati,
  },
  {
    name: "Vidwath K T",
    img: vidwath,
  },
  {
    name: "Vijithashwa M G",
    img: viji,
  },
  {
    name: "Vinit M",
    img: vinit,
  },
];

const Team = () => {
  return (
    <div id="app">
      <NavBar />
      <h2 className={styles.main_head}>Enigma'23 Crew.</h2>
      <h3 className={styles.subhead}>Final Years :</h3>
      <div className={styles.container}>
        {finalYears.map((d) => {
          return (
            <div className={styles.card}>
              <div className={styles.card_div}>
                <img className={styles.img} src={d.img} alt="" srcset="" />
              </div>
              <h2 className={styles.head}>{d.name}</h2>
            </div>
          );
        })}
      </div>
      <h3 className={styles.subhead}>Third Years :</h3>
      <div className={styles.container}>
        {thirdYears.map((d) => {
          return (
            <div className={styles.card}>
              <div className={styles.card_div}>
                <img className={styles.img} src={d.img} alt="" srcset="" />
              </div>
              <h2 className={styles.head}>{d.name}</h2>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
export default Team;
