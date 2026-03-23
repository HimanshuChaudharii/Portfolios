import { useEffect, useRef } from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Education = () => {
  const rocketRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (rocketRef.current && trackRef.current) {
        gsap.to(rocketRef.current, {
          y: () => trackRef.current.offsetHeight - window.innerHeight * 0.2,
          ease: "none",
          scrollTrigger: {
            trigger: trackRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1.5,
          }
        });
      }
    });
    return () => ctx.revert();
  }, []);

  const education = [
    {
      degree: 'Bachelor of Technology',
      institution: 'Lovely Professional University, Phagwara, Punjab',
      duration: 'Aug 2023 - Present',
      details: 'Computer Science and Engineering; CGPA: 6.10',
      icon: '🎓'
    },
    {
      degree: 'Intermediate (PCM)',
      institution: 'Oasis Sainik School, Suratgarh, Rajasthan',
      duration: '2021 - 2023',
      details: 'Percentage: 60.2%',
      icon: '🏫'
    },
    {
      degree: 'Matriculation',
      institution: 'Hallmark World School, Kushinagar, Uttar Pradesh',
      duration: '2019 - 2021',
      details: 'Percentage: 64.6%',
      icon: '📚'
    }
  ];

  return (
    <AnimatedSection id="education" className="bg-darker relative overflow-hidden">
      {/* Gamified Background Star Elements */}
      <div className="absolute top-20 right-20 text-yellow-500/20 text-5xl animate-[spin_10s_linear_infinite]">⭐</div>
      <div className="absolute bottom-40 left-10 text-brandAccent/20 text-4xl animate-[pulse_4s_linear_infinite]">✨</div>
      <div className="absolute top-1/2 right-10 text-purple-500/20 text-6xl animate-bounce">🪐</div>

      <div className="container mx-auto px-6 relative z-10 py-10">
        <h2 className="gsap-animate text-4xl md:text-5xl font-bold mb-20 text-center">
          Educational <span className="text-brandAccent">Journey</span>
        </h2>

        <div className="max-w-4xl mx-auto relative px-4">

          {/* Gamified Rocket Track (Vertical Line) */}
          <div ref={trackRef} className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1.5 md:-ml-[3px] rounded-full overflow-hidden bg-white/5">
            <div className="absolute top-0 left-0 w-full h-[150%] bg-gradient-to-b from-orange-500 via-brandAccent to-transparent animate-[pan_3s_linear_infinite]" style={{ animationFillMode: 'forwards' }}></div>
          </div>

          {/* Gamified Rocket */}
          <div ref={rocketRef} className="absolute left-[8px] md:left-1/2 md:-translate-x-1/2 -top-12 text-5xl drop-shadow-[0_0_20px_rgba(249,115,22,0.8)] z-20 tooltip" title="Ready for Launch!">
            🚀
          </div>

          <div className="space-y-16 mt-16 md:mt-24">
            {education.map((item, index) => (
              <div key={index} className={`gsap-animate relative flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                {/* Timeline Dot */}
                <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full z-10 shadow-[0_0_20px_rgba(96,165,250,0.8)] border-4 border-dark flex items-center justify-center
                                bg-gradient-to-tr from-brandAccent to-purple-500 hover:scale-150 transition-transform duration-300">
                  <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 w-full md:w-[45%] ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                  <div className="glass p-8 rounded-3xl hover:border-brandAccent/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(96,165,250,0.15)] group relative overflow-hidden">
                    <div className="absolute -inset-1 bg-gradient-to-r from-brandAccent to-purple-600 opacity-0 group-hover:opacity-20 blur transition duration-500"></div>

                    <div className="relative">
                      <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
                        <div className="text-5xl group-hover:animate-bounce shadow-xl">
                          {item.icon}
                        </div>
                        <span className="text-orange-400 font-mono text-sm border border-orange-400/30 px-4 py-1.5 rounded-full bg-orange-400/10 font-bold tracking-wider inline-block">
                          {item.duration}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-brandAccent transition-colors">{item.degree}</h3>
                      <h4 className="text-lg text-white/80 font-medium mb-4 flex items-center gap-2">
                        <span className="text-brandAccent">📍</span> {item.institution}
                      </h4>
                      <p className="text-white/60 leading-relaxed font-light">
                        {item.details}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </AnimatedSection>
  );
};

export default Education;