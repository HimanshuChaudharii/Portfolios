import { useEffect, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import gsap from 'gsap';

const Hero = () => {
  const comp = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from('.hero-badge', { y: -20, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 })
        .from('.hero-title', { y: 40, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.4')
        .from('.hero-desc', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
        .from('.hero-buttons a', { scale: 0.9, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'back.out(1.5)' }, '-=0.4');
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" ref={comp}>
      {/* Subtle Professional Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brandAccent/10 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6 text-center z-10">
        <div className="hero-badge inline-block glass px-4 py-1.5 rounded-full text-brandAccent text-sm font-medium mb-6">
          B.Tech CSE Student @ LPU
        </div>
        
        <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6">
          Hi, I'm <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandAccent to-purple-500">
            Himanshu Chaudhari
          </span>
        </h1>
        
        <p className="hero-desc text-lg md:text-xl text-brandAccent font-medium max-w-2xl mx-auto mb-10 h-16">
          <Typewriter
            words={[
              'A passionate software engineer specializing in Data Science.',
              'Building scalable web applications and REST APIs.',
              'Deriving deep insights from complex data.',
              'Expert in Java, Python, and the MERN Stack.'
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </p>
        
        <div className="hero-buttons flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="px-8 py-4 bg-white text-dark font-bold rounded-full hover:scale-105 transition-transform">
            View My Work
          </a>
          <a href="https://github.com/HimanshuChaudharii" target="_blank" rel="noreferrer" className="px-8 py-4 glass text-white font-bold rounded-full hover:bg-white/10 transition-colors flex items-center gap-2">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/himanshu-chaudhari-4868a9298/" target="_blank" rel="noreferrer" className="px-8 py-4 glass text-white font-bold rounded-full hover:bg-white/10 transition-colors flex items-center gap-2">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
