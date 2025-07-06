// ✅ App.tsx
import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css'; // Tailwind styles

function App() {
  const typedEl = useRef<HTMLSpanElement>(null);
  const [isDark, setIsDark] = useState(false);

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
    <div className={`${isDark ? 'dark' : ''}`}>
      <div className="bg-gray-100 text-gray-900 min-h-screen dark:bg-gray-900 dark:text-white">
        <header className="bg-blue-700 text-white py-10 text-center" data-aos="fade-down">
          <h1 className="text-4xl font-bold mb-2">Navaneeth Kaku</h1>
          <img src="/navaneeth.jpg" alt="Navaneeth" className="mx-auto rounded-full w-40 h-40 object-cover border-4 border-white shadow-md mb-4" />
          <p className="text-xl">
            <span ref={typedEl} className="typed-text"></span>
          </p>
          <a href="/Navaneeth_Resume.pdf" className="mt-4 inline-block bg-white text-blue-700 font-semibold py-2 px-4 rounded hover:bg-gray-200">
            Download Resume
          </a>
          <button onClick={() => setIsDark(!isDark)} className="ml-4 mt-4 inline-block bg-yellow-400 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-300">
            Toggle Dark Mode
          </button>
        </header>

        <section className="py-10 px-6" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p>
            I'm a B.Tech Computer Science student (2026), skilled in data analysis, Python, and Excel.
            I’ve worked on real-world projects involving e-commerce sales and Netflix content analysis.
          </p>
        </section>

        <section className="py-10 px-6 bg-white dark:bg-gray-800" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="list-disc list-inside">
            <li>Python</li>
            <li>SQL</li>
            <li>MS Excel</li>
            <li>Power BI</li>
            <li>Android with Java</li>
          </ul>
        </section>

        <section className="py-10 px-6 bg-gray-100 dark:bg-gray-800" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded shadow-md">
              <h3 className="text-xl font-bold">Netflix Data Analysis</h3>
              <p className="mt-2">Analyzed 6,000+ Netflix titles using Python, visualized trends, and published insights.</p>
              <a href="https://github.com/navaneethyadav/navaneethyadav-netflix-data-analysis" target="_blank" className="text-blue-500 underline mt-2 inline-block">View on GitHub</a>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded shadow-md">
              <h3 className="text-xl font-bold">E-Commerce Sales Analysis</h3>
              <p className="mt-2">Cleaned and analyzed 20,000+ sales records. Built revenue dashboards and insights.</p>
              <a href="https://github.com/navaneethyadav/ecommerce-data-analysis" target="_blank" className="text-blue-500 underline mt-2 inline-block">View on GitHub</a>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded shadow-md">
              <h3 className="text-xl font-bold">Weather Forecast Android App</h3>
              <p className="mt-2">Built an Android weather app using Java and OpenWeatherMap API with real-time features.</p>
              <a href="https://github.com/navaneethyadav/weather-forecast-app" target="_blank" className="text-blue-500 underline mt-2 inline-block">View on GitHub</a>
            </div>
          </div>
        </section>

        <section className="py-10 px-6" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
          <form className="space-y-4 max-w-md mx-auto">
            <input className="w-full p-2 border rounded" type="text" placeholder="Your Name" required />
            <input className="w-full p-2 border rounded" type="email" placeholder="Your Email" required />
            <textarea className="w-full p-2 border rounded" placeholder="Your Message" required></textarea>
            <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Send</button>
          </form>
        </section>

        <footer className="bg-blue-700 text-white py-6 text-center" data-aos="fade-up">
          <p>📫 navaneethkaku@gmail.com</p>
          <p>
            🔗 <a href="https://linkedin.com/in/navaneeth-kaku" className="underline">LinkedIn</a> |{' '}
            <a href="https://github.com/navaneethyadav" className="underline">GitHub</a>
          </p>
          <p className="text-sm mt-2">© 2025 Navaneeth Kaku</p>
        </footer>
      </div>
    </div>
  );
}

export default App;

