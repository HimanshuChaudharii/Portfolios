import React from 'react';
import AnimatedSection from '../ui/AnimatedSection';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: 'HP Power Lab 2.0 – Hackathon',
      date: 'Nov 2025',
      description: 'Cleared Round 1 of HPCL’s analytics challenge, demonstrating strong analytical and problem-solving abilities.',
    },
    {
      id: 2,
      title: 'Naukri Campus – Skill Contest',
      date: 'Sep 2025',
      description: 'Secured 98.75 percentile in Naukri Campus Young Turks 2025, India’s largest skill contest.',
    },
    {
      id: 3,
      title: 'Fundraising Internship',
      date: 'Dec 2025',
      description: 'Selected for Fundraising Internship at Muskurahat Foundation.',
    }
  ];

  return (
    <AnimatedSection id="achievements" className="bg-darker">
      <div className="container mx-auto px-6">
        <h2 className="gsap-animate text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="text-brandAccent">Achievements</span> & Experience
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item) => (
            <div key={item.id} className="gsap-animate glass p-8 rounded-2xl hover:-translate-y-2 transition-transform">
              <span className="text-brandAccent font-medium text-sm block mb-4">{item.date}</span>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-white/70 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Achievements;
