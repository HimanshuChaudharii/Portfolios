import React from 'react';
import AnimatedSection from '../ui/AnimatedSection';

const Skills = () => {
  const categories = [
    {
      title: 'Languages',
      items: ['Java', 'C++', 'Python', 'C', 'SQL', 'JavaScript']
    },
    {
      title: 'Data Science & Frameworks',
      items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'React.js', 'Express.js', 'Node.js', 'HTML', 'CSS']
    },
    {
      title: 'Tools & Platforms',
      items: ['Power BI', 'Tableau', 'SQL Server', 'Excel', 'Jupyter Notebook', ' MongoDB', 'Jupyter Notebook', 'MS-Office', 'Git', 'GitHub']
    },
    {
      title: 'Soft Skills',
      items: ['Critical Thinking', 'Teamwork', 'Project Management', 'Adaptability', 'Leadership']
    }
  ];

  return (
    <AnimatedSection id="skills" className="bg-darker">
      <div className="container mx-auto px-6">
        <h2 className="gsap-animate text-4xl md:text-5xl font-bold mb-16 text-center">
          Technical <span className="text-brandAccent">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, idx) => (
            <div key={idx} className="gsap-animate glass p-8 rounded-2xl group hover:-translate-y-2 transition-transform">
              <h3 className="text-xl font-bold mb-6 text-brandAccent">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((item, i) => (
                  <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;
