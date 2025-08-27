import Navbar from "./components/Navbar";
import Home from "./sections/Home";

function App() {
  return (
    <div className="bg-neutral-900 text-gray-100 font-sans">
      <Navbar />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
