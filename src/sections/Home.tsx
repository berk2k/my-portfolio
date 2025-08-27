export default function Home() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-neutral-900"
    >
      {/* İsim */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-white">
        Hi, I&apos;m <span className="text-indigo-400">Berk</span>
      </h1>

      {/* Kısa Tanıtım */}
      <p className="text-gray-400 mt-6 max-w-xl text-lg">
        A young software engineer passionate about building scalable, maintainable,
        and cloud-native systems.
      </p>

      {/* Butonlar */}
      <div className="mt-8 flex space-x-6">
        <a
          href="https://github.com/berk2k"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-gray-500 hover:bg-gray-800 text-gray-300 font-medium rounded-lg transition"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
