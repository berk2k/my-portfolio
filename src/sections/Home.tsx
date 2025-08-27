export default function Home() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-b from-neutral-950 to-neutral-900"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12),transparent_70%)]"></div>

      <div className="relative z-10">

        <h1 className="text-5xl md:text-6xl font-extrabold text-white">
          Hi, I&apos;m <span className="text-indigo-400">Berk Polat</span>
        </h1>


        <p className="text-gray-400 mt-6 max-w-xl text-lg">
          A young software engineer passionate about building scalable,
          maintainable, and cloud-native systems.
        </p>


        <div className="mt-8 flex space-x-6 justify-center">
          <a
            href="https://github.com/berk2k"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-500 hover:bg-gray-800 text-gray-300 font-medium rounded-lg transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
