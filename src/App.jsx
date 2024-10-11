import "./app.scss";
import Services from "./components/services/Services";
import Parallax from "./components/parallax/Parallax";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import About from "./components/about/About";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="About me">
        <Parallax type="services" />
      </section>
      
      <section id="About">
        <About />
      </section>

      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />

      <section id="Contact">
        <Contact />
      </section>

      {/* <Test/>
  <Test/> */}
    </div>
  );
};

export default App;
