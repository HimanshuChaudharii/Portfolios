import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import CustomCursor from './components/ui/CustomCursor';
import ParticlesBackground from './components/ui/ParticlesBackground';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Languages from './components/sections/Languages';
import Education from './components/sections/Education';
import Training from './components/sections/Training';
import Achievements from './components/sections/Achievements';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-dark text-white selection:bg-brandAccent selection:text-white">
      <ParticlesBackground />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Languages />
        <Education />
        <Training />
        <Achievements />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      
      <footer className="py-8 text-center border-t border-white/10 text-white/50">
        <p>© {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
