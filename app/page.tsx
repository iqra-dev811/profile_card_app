

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-pink-600">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm text-center">
        <img
  className="w-32 h-32 rounded-full mx-auto border-4 border-pink-500"
  src="https://randomuser.me/api/portraits/women/44.jpg"
  alt="Iqra"
/>

        <h1 className="text-2xl font-bold mt-4">Iqra Shakoor</h1>
        <p className="text-gray-600">Frontend Developer</p>
        <p className="mt-2 text-sm text-gray-500">✉ iqra@email.com</p>
        <a
          href="https://github.com/iqra"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 underline block mt-1"
        >
          💼 github.com/iqra
        </a>
      </div>
    </div>
  );
}

