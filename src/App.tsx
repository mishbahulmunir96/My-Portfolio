import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";
import Testimoni from "./components/Testimoni";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <AboutMe />
      <Portfolio />
      <Testimoni />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
