import styles from "./App.module.css";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import About from "../components/About";
import Schedule from "../components/Schedule";
import Footer from "../components/Footer";

function App() {
  return (
    <div id="app">
      <div id="hero">
        <NavBar />
        <Hero />
      </div>
      <About />
      <Schedule />
      <Footer />
    </div>
  );
}

export default App;
