import React from 'react';
import AnimatedSection from '../ui/AnimatedSection';

const Training = () => {
  return (
    <AnimatedSection id="training">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="gsap-animate text-4xl md:text-5xl font-bold mb-16 text-center">
          Professional <span className="text-brandAccent">Training</span>
        </h2>

        <div className="gsap-animate glass p-10 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brandAccent/10 rounded-full blur-[50px]"></div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div>
              <h3 className="text-3xl font-bold mb-2">JAVA with OOPS Programming</h3>
              <h4 className="text-brandAccent text-xl font-medium">Ciphers School</h4>
            </div>
            <span className="px-5 py-2 bg-white/10 rounded-full font-medium border border-white/5">Jun 2025 - Jul 2025</span>
          </div>

          <ul className="space-y-4 text-white/80 text-lg mb-8">
            <li className="flex gap-4">
              <span className="text-brandAccent mt-1">▹</span>
              Gained hands-on experience with core OOP concepts including Encapsulation and Inheritance, applying Polymorphism and Abstraction to construct maintainable code.
            </li>
            <li className="flex gap-4">
              <span className="text-brandAccent mt-1">▹</span>
              Developed a Mental Health Simulator application using classes, objects, constructors, and interfaces.
            </li>
            <li className="flex gap-4">
              <span className="text-brandAccent mt-1">▹</span>
              Implemented method overloading and overriding for real-time problem-solving scenarios.
            </li>
          </ul>

          {/* Credential Button */}
          <div className="flex justify-center md:justify-start">
            <a
              href="https://drive.google.com/file/d/18gMvcLznxwzPz-GFrUtMJQh5CJ6xATVx/view"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-brandAccent text-white font-medium rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              View Credential
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Training;