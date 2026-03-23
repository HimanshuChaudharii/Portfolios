import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Mental Health Simulator Developer',
      company: 'Ciphers School (Training)',
      period: 'Jun 2025 - Jul 2025',
      description: 'Developed a Mental Health Simulator application using core OOP concepts, applying Encapsulation, Inheritance, Polymorphism, and Abstraction to build structured and maintainable code.',
      skills: ['Java', 'OOP', 'Interfaces']
    },
    {
      id: 2,
      role: 'Hacking/Analytics Participant',
      company: 'HP Power Lab 2.0 Hackathon',
      period: 'Nov 2025',
      description: 'Cleared Round 1 of HPCL’s analytics challenge, demonstrating strong analytical and problem-solving abilities.',
      skills: ['Analytics', 'Problem Solving']
    },
    {
      id: 3,
      role: 'Fundraising Intern',
      company: 'Muskurahat Foundation',
      period: 'Dec 2025',
      description: 'Selected for Fundraising Internship at Muskurahat Foundation, focusing on outreach and project management.',
      skills: ['Teamwork', 'Project Management']
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Technology in CSE',
      institution: 'Lovely Professional University',
      period: 'Aug 2023 - Present',
      description: 'CGPA: 6.10. Specialized in Computer Science and Engineering.'
    },
    {
      id: 2,
      degree: 'Intermediate (PCM)',
      institution: 'Oasis Sainik School',
      period: '2021 - 2023',
      description: 'Achieved 60.2% in Physics, Chemistry, and Mathematics.'
    },
    {
      id: 3,
      degree: 'Matriculation',
      institution: 'Hallmark World School',
      period: '2019 - 2021',
      description: 'Achieved 64.6% in Matriculation.'
    }
  ];

  return (
    <section id="experience" className="py-24 relative z-10 w-full">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Experience Column */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-10">
              Professional <span className="text-brandAccent">Experience</span>
            </h2>
            <div className="space-y-8">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-white/10">
                  <span className="absolute left-[-4.5px] top-2 w-3 h-3 rounded-full bg-brandAccent ring-4 ring-dark"></span>
                  <div className="glass p-6 rounded-2xl hidden-scrollbar group hover:-translate-y-1 transition-transform">
                    <span className="text-brandAccent font-medium text-sm block mb-2">{exp.period}</span>
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                    <h4 className="text-white/60 text-lg mb-4">{exp.company}</h4>
                    <p className="text-white/80 leading-relaxed mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-white/70">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-10">
              My <span className="text-brandAccent">Education</span>
            </h2>
            <div className="space-y-8">
              {education.map((edu) => (
                <div key={edu.id} className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-white/10">
                  <span className="absolute left-[-4.5px] top-2 w-3 h-3 rounded-full bg-white ring-4 ring-dark"></span>
                  <div className="glass p-6 rounded-2xl group hover:-translate-y-1 transition-transform">
                    <span className="text-brandAccent font-medium text-sm block mb-2">{edu.period}</span>
                    <h3 className="text-2xl font-bold">{edu.degree}</h3>
                    <h4 className="text-white/60 text-lg mb-4">{edu.institution}</h4>
                    <p className="text-white/80 leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
