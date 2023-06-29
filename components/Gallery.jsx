import NavBar from "./NavBar";
import Footer from "./Footer";
import styles from "./Gallery.module.css";

import img1 from "../src/assets/images/gallery/img1.jpg";
import img2 from "../src/assets/images/gallery/img2.jpg";
import img3 from "../src/assets/images/gallery/img3.jpg";
import img4 from "../src/assets/images/gallery/img4.jpg";
import img5 from "../src/assets/images/gallery/img5.jpg";
import img6 from "../src/assets/images/gallery/img6.png";
import img7 from "../src/assets/images/gallery/img7.jpg";
import img8 from "../src/assets/images/gallery/img8.jpg";
import img9 from "../src/assets/images/gallery/img9.jpg";
import img10 from "../src/assets/images/gallery/img10.jpg";
import img11 from "../src/assets/images/gallery/img11.png";
import img12 from "../src/assets/images/gallery/img12.png";
import img13 from "../src/assets/images/gallery/img13.jpg";
import img14 from "../src/assets/images/gallery/img14.png";
import img15 from "../src/assets/images/gallery/img15.jpg";
import img16 from "../src/assets/images/gallery/img16.jpg";
// import img17 from "../src/assets/images/gallery/img17.HEIC";
import img18 from "../src/assets/images/gallery/img18.jpg";
// import img19 from "../src/assets/images/gallery/img19.HEIC";
import img20 from "../src/assets/images/gallery/img20.jpg";
import img21 from "../src/assets/images/gallery/img21.png";
import img22 from "../src/assets/images/gallery/img22.jpg";
import img23 from "../src/assets/images/gallery/img23.jpg";
import img24 from "../src/assets/images/gallery/img24.jpg";
import { ScrollRestoration } from "react-router-dom";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  // img17,
  img18,
  // img19,
  img20,
  img21,
  img22,
  img23,
  img24,
];

const Gallery = () => {
  return (
    <div id="app">
      <NavBar />
      <h2 className={styles.head}>Gallery</h2>
      <div className={styles.container}>
        {images.map((i) => {
          return (
            <div className={styles.card}>
              <img src={i} className={styles.img} />
            </div>
          );
        })}
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default Gallery;
