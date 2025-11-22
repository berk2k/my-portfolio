import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Packages from "./sections/Packages";
import Awards from "./sections/Awards"; 
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="bg-neutral-900 text-gray-100 font-sans">
      <Navbar />
      <main>
        <Home />
        <About />
        <Experience />
        <Skills />
        <Packages />
        <Projects />
        <Awards /> 
        <Blog />
        <Contact />
      </main>
    </div>
  );
}

export default App;