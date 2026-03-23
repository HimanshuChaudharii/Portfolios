import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter text-white">
          Portfolio<span className="text-brandAccent">.</span>
        </a>
        <div className="hidden md:flex gap-8 items-center text-sm font-medium text-white/80">
          <a href="#about" className="hover:text-brandAccent transition-colors">About</a>
          <a href="#skills" className="hover:text-brandAccent transition-colors">Skills</a>
          <a href="#education" className="hover:text-brandAccent transition-colors">Education</a>
          <a href="#projects" className="hover:text-brandAccent transition-colors">Projects</a>
          <a href="#contact" className="px-5 py-2.5 bg-brandAccent text-dark font-semibold rounded-full hover:bg-white transition-colors shadow-[0_0_20px_rgba(96,165,250,0.3)]">
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
