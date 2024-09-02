import './App.css';
import Navber from "./components/Navber";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
      <div>
        <Navber/>
        <Hero/>
        <Skills/>
        <About/>
        <Work/>
        <Contact/>
        <Footer/>
        </div>
  );
}

export default App;
