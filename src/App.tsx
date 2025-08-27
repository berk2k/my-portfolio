import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
{/*  import Education from "./sections/Education";*/}
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Packages from "./sections/Packages"; // ✅ eklendi
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="bg-neutral-900 text-gray-100 font-sans">
      <Navbar />
      <main>
        <Home />
        <About />       
        {/*  <Education />  */}  
        <Experience />
        <Skills />
        <Packages />
        <Projects />
        <Blog />
        <Contact />
      </main>
    </div>
  );
}

export default App;
