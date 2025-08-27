import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Blog from "./sections/Blog";

function App() {
  return (
    <div className="bg-neutral-900 text-gray-100 font-sans">
      <Navbar />
      <main>
        <Home />
        <Experience />
        <Skills />
        <Education />
        <Blog />
      </main>
    </div>
  );
}

export default App;
