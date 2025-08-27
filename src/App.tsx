import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";

function App() {
  return (
    <div className="bg-neutral-900 text-gray-100 font-sans">
      <Navbar />
      <main>
        <Home />
        <Experience />
        <Skills />
      </main>
    </div>
  );
}

export default App;
