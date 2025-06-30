import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Service from "./Components/Service";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
