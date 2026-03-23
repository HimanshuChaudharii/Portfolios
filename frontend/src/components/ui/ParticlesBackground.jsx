import { useEffect, useRef } from 'react';

const ParticlesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Set exact dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];
    const numberOfParticles = 80;

    const mouse = {
      x: null,
      y: null,
      radius: 150
    };

    const handleMouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };

    window.addEventListener('mousemove', handleMouseMove);

    class Particle {
      constructor(x, y, dx, dy, size, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.size = size;
        this.color = color;
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
      
      update() {
        if (this.x > canvas.width || this.x < 0) this.dx = -this.dx;
        if (this.y > canvas.height || this.y < 0) this.dy = -this.dy;

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
      }
    }

    const init = () => {
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        let size = Math.random() * 2 + 0.5;
        let x = Math.random() * (innerWidth - size * 2) + size;
        let y = Math.random() * (innerHeight - size * 2) + size;
        let dx = (Math.random() - 0.5) * 1.5;
        let dy = (Math.random() - 0.5) * 1.5;
        let color = 'rgba(255, 255, 255, 0.4)';
        particlesArray.push(new Particle(x, y, dx, dy, size, color));
      }
    };

    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, innerWidth, innerHeight);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      
      // Connect particles to each other and to mouse
      for (let a = 0; a < particlesArray.length; a++) {
        // Particles to particles
        for (let b = a; b < particlesArray.length; b++) {
          let distance = ((particlesArray[a].x - particlesArray[b].x) ** 2) + 
                         ((particlesArray[a].y - particlesArray[b].y) ** 2);
          
          if (distance < 12000) {
            let opacityValue = 1 - (distance / 12000);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacityValue * 0.15})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
        
        // Particles to mouse (Blue / brandAccent interaction)
        if (mouse.x && mouse.y) {
          let mouseDist = ((particlesArray[a].x - mouse.x) ** 2) + 
                          ((particlesArray[a].y - mouse.y) ** 2);
          if (mouseDist < 25000) {
            let mouseOpacity = 1 - (mouseDist / 25000);
            ctx.strokeStyle = `rgba(96, 165, 250, ${mouseOpacity * 0.4})`; // Tailwind #60a5fa
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', handleResize);
    
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none opacity-80"
    />
  );
};

export default ParticlesBackground;
