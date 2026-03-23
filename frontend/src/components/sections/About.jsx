import AnimatedSection from '../ui/AnimatedSection';
import Tilt from 'react-parallax-tilt';

const About = () => {
  return (
    <AnimatedSection id="about">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left Content */}
          <div className="lg:w-1/2">
            <h2 className="gsap-animate text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-brandAccent">Me</span>
            </h2>

            {/* ✅ Updated About Paragraph */}
            <p className="gsap-animate text-white/70 text-lg leading-relaxed mb-8">
              I am Himanshu Chaudhari, a Computer Science and Engineering undergraduate at Lovely Professional University with a strong passion for building intelligent, data-driven, and scalable software solutions. My core interests include Artificial Intelligence, Data Analytics, and Backend Development, where I enjoy applying my knowledge to solve complex problems efficiently.

              I have hands-on experience with programming languages such as Java, Python, C++, C, and SQL, along with practical exposure to data analysis and visualization tools like Pandas, NumPy, Matplotlib, and Seaborn. A solid foundation in Data Structures and Algorithms allows me to write optimized and maintainable code while approaching challenges methodically.

              Beyond technical skills, I bring analytical thinking, adaptability, and a collaborative mindset. I am committed to continuous learning and motivated to contribute to innovative software solutions that make a meaningful impact.
            </p>

            {/* 🔽 Download Resume Button */}
            <div className="gsap-animate">
              <a
                href="/Himanshu new cv 2025.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-brandAccent text-black font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 relative gsap-animate">
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.05}
              transitionSpeed={2000}
            >
              <div className="w-full aspect-square max-w-md mx-auto relative rounded-2xl overflow-hidden glass p-2 group shadow-2xl">

                {/* Border Overlay */}
                <div className="absolute inset-0 border border-white/10 rounded-2xl z-20 pointer-events-none group-hover:border-brandAccent/30 transition-colors duration-500" />

                {/* Overlay */}
                <div className="absolute inset-0 bg-brandAccent/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>

                <img
                  src="/image1.jpeg"
                  alt="Himanshu Chaudhari"
                  className="w-full h-full object-cover rounded-xl transition-all duration-500 relative z-0"
                />
              </div>
            </Tilt>
          </div>

        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;