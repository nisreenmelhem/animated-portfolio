import "./css/app.scss"
import Homepage from "./components/homepage/Homepage";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Skills from "./components/skills/skills";

const App = () => {


  return <main className="main-container">
    <section id="Homepage">
      <Navbar />
      <Homepage />
    </section>
    <section id="About"  className="private">
      <About />
    </section>
    <section id="Services"><Parallax type="services" /></section>
    <section className="private"><Services /></section>
    <section id="Skills"  className="private">
      <Skills/>
    </section>
    <section id="Portfolio"><Parallax type="portifolio" /></section>
    
    <Portfolio />

    <section id="Contact" className="private">
      <Contact />
    </section>

  </main>
};

export default App;
