import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;

    const onMouseMove = (e) => {
      // Instant movement for the center dot
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
        ease: "none"
      });

      // Trailing smooth movement for the outline ring
      gsap.to(outline, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power3.out"
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <>
      <div 
        ref={dotRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-brandAccent rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block mix-blend-screen"
      />
      <div 
        ref={outlineRef} 
        className="fixed top-0 left-0 w-10 h-10 border border-brandAccent/50 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden md:block mix-blend-screen"
      />
    </>
  );
};

export default CustomCursor;
