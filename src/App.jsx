import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import About from "../components/About";
import Schedule from "../components/Schedule";
import Footer from "../components/Footer";
import Sponsors from "../components/Sponsors";
import { ScrollRestoration } from "react-router-dom";

function App() {
  return (
    <div id="app">
      <div id="hero">
        <NavBar />
        <Hero />
      </div>
      <About />
      <Schedule />
      <Sponsors />
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

export default App;
