import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import WorkHistory from './pages/WorkHistory';
import Projects from './pages/Projects';
import { useState } from 'react';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Router>
        <div className="App relative min-h-screen flex flex-col">
          {/* Light mode background - always present */}
          <div className="absolute inset-0 bg-gradient-to-tr from-green-400 to-blue-500 transition-opacity duration-300 ease-in-out dark:opacity-0"></div>
          {/* Dark mode background - always present but opacity changes */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black to-blue-500 transition-opacity duration-300 ease-in-out opacity-0 dark:opacity-100"></div>
          
          {/* Content container with transparent background */}
          <div className="relative z-10 flex flex-col min-h-screen">
            <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
            <section className="flex-grow pt-5">
              <Routes>
                <Route path="/" element={<AboutMe />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/work-history" element={<WorkHistory />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </section>
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;