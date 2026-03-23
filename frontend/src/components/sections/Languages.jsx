import React from 'react';
import AnimatedSection from '../ui/AnimatedSection';

const Languages = () => {
  const languages = [
    { name: 'English', proficiency: 'Professional / Fluent', percentage: 100 },
    { name: 'Hindi', proficiency: 'Native / Bilingual', percentage: 100 },
  ];

  return (
    <AnimatedSection id="languages">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="gsap-animate text-4xl md:text-5xl font-bold mb-12 text-center">
          Spoken <span className="text-brandAccent">Languages</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {languages.map((lang, index) => (
            <div key={index} className="gsap-animate glass p-8 rounded-3xl relative overflow-hidden group hover:border-brandAccent/30 transition-colors">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{lang.name}</h3>
                  <span className="text-white/60 text-sm">{lang.proficiency}</span>
                </div>
                <span className="text-brandAccent font-bold text-xl">{lang.percentage}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2.5 bg-darker rounded-full overflow-hidden relative">
                {/* Background glow trail */}
                <div className="absolute inset-0 bg-brandAccent/10" />
                {/* Animated fill */}
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-brandAccent to-purple-500 rounded-full transition-all duration-[1500ms] ease-out group-hover:shadow-[0_0_15px_rgba(96,165,250,0.5)]"
                  style={{ width: `${lang.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Languages;