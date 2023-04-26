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
    </div>
  );
};

export default Gallery;
