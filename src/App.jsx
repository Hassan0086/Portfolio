import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Social from './pages/Social';
import Footer from './components/Footer';

function App() {
  const [preselectedService, setPreselectedService] = useState('');

  const handleSelectService = (serviceTitle) => {
    setPreselectedService(serviceTitle);
  };

  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Home />
        <About />
        <Services onSelectService={handleSelectService} />
        <Projects />
        <Contact preselectedService={preselectedService} />
        <Social />
      </main>
      <Footer />
    </div>
  );
}

export default App;
