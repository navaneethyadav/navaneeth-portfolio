import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css'; // ✅ Tailwind CSS

function App() {
  const typedEl = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current as Element, {
      strings: ['Aspiring Data Analyst', 'Python Developer', 'Android App Builder'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });

    AOS.init({ duration: 1000, once: true });

    return () => typed.destroy();
  }, []);

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      {/* Header */}
      <header className="bg-blue-700 text-white py-10 text-center" data-aos="fade-down">
        <h1 className="text-4xl font-bold mb-2">Navaneeth Kaku</h1>

        <img
          src="/navaneeth.jpg"
          alt="Navaneeth"
          className="mx-auto rounded-full w-40 h-40 object-cover border-4 border-white shadow-md mb-4"
        />

        <p className="text-xl">
          <span ref={typedEl} className="typed-text"></span>
        </p>

        <a
          href="/Navaneeth_Resume.pdf"
          className="mt-4 inline-block bg-white text-blue-700 font-semibold py-2 px-4 rounded hover:bg-gray-200"
          download
        >
          Download Resume
        </a>
      </header>

      {/* About Me */}
      <section className="py-10 px-6" data-aos="fade-up">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I'm a B.Tech Computer Science student (2026), skilled in data analysis, Python, and Excel.
          I’ve worked on real-world projects involving e-commerce sales and Netflix content analysis.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white py-6 text-center" data-aos="fade-up">
        <p>📫 navaneethkaku@gmail.com</p>
        <p>
          🔗 <a href="https://linkedin.com/in/navaneeth-kaku" className="underline">LinkedIn</a> |{' '}
          <a href="https://github.com/navaneethyadav" className="underline">GitHub</a>
        </p>
        <p className="text-sm mt-2">© 2025 Navaneeth Kaku</p>
      </footer>
    </div>
  );
}

export default App;
