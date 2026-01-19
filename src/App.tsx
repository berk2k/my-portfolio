import Navbar from "./components/Navbar";
import Home from "./sections/Home";
//import Education from "./sections/Education";
import Experience from "./sections/Experience";
//import Skills from "./sections/Skills";

import Projects from "./sections/Projects";
//import Awards from "./sections/Awards"; 
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="bg-neutral-900 text-gray-100 font-sans">
      <Navbar />
      <main>
        <Home />
        {/* <Education /> */}
        <Experience />
        {/*<Skills /> */}
        <Projects />
        {/*<Awards /> */}
        <Blog />
        <Contact />
      </main>
    </div>
  );
}

export default App;