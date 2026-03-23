import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the plugin only once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AnimatedSection = ({ children, className = '', id }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.gsap-animate', {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: "play none none reverse"
        }
      });
    }, sectionRef);
    
    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <section id={id} className={`py-24 relative z-10 ${className}`} ref={sectionRef}>
      {children}
    </section>
  );
};

export default AnimatedSection;
