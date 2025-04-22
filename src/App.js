import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import WorkHistory from './pages/WorkHistory';
import Projects from './pages/Projects';
import { useState } from 'react';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

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
            <main className="flex-grow pt-5 relative">
              <AnimatedRoutes />
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="page-container" // Keep the class for styling
      >
        <Routes location={location}>
          <Route path="/" element={<AboutMe />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/work-history" element={<WorkHistory />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;