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
        <div className="App bg-gradient-to-tr from-green-400 to-blue-500 min-h-screen flex flex-col dark:bg-gradient-to-tr dark:from-black dark:to-orange-500">
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
      </Router>
    </div>
  );
}

export default App;