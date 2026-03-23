import React from 'react';
import AnimatedSection from '../ui/AnimatedSection';

const Certifications = () => {
  const certs = [
    {
      id: 1,
      title: 'Certified Data Science Professional',
      issuer: 'Oracle Cloud Infrastructure 2025',
      date: 'Sep 2025',
      link: 'https://drive.google.com/file/d/1eVAdBTDRaAL3tV9xl0MSIv18lvdHN-nE/view' // Add actual link if available
    },
    {
      id: 2,
      title: 'A Web Hackathon of Excellence',
      issuer: 'Code off Duty',
      date: 'Mar 2024',
      link: 'https://drive.google.com/file/d/1BYp2PNvKEhEvj8jP5Tb2YmSKfwBWM01z/view'
    },
    {
      id: 3,
      title: 'Data Analytics Job Simulation',
      issuer: 'Deloitte Australia',
      date: 'Jun 2025',
      link: 'https://drive.google.com/file/d/1nw6coMtCpgEhsk4vrugAHDpRxhuXO6_2/view'
    },
    {
      id: 4,
      title: 'Google Analytics Certification',
      issuer: 'Google',
      date: 'Jun 2025',
      link: 'https://www.linkedin.com/posts/himanshu-chaudhari-4868a9298_googleanalyticscertified-dataanalytics-digitalgrowth-activity-7374037985555775488-MPo1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgJCWYBTh7gnof8XhqZMtLeNWZ9FcbDwm8'
    },
    {
      id: 5,
      title: 'C Programming',
      issuer: 'Simplilearn',
      date: 'March 2024',
      link: 'https://drive.google.com/file/d/1pGuHk3fBXhXLzqaLogA3qemHIu1voL_o/view?usp=drive_link'
    },
  ];
  return (
    <AnimatedSection id="certifications" className="bg-darker">
      <div className="container mx-auto px-6">
        <h2 className="gsap-animate text-4xl md:text-5xl font-bold mb-4 text-center">
          Licenses & <span className="text-brandAccent">Certifications</span>
        </h2>
        <p className="gsap-animate text-white/60 text-center max-w-2xl mx-auto mb-16">
          Continuous learning is key to staying current in technology. Here are some of my professional accomplishments and certifications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert) => (
            <div key={cert.id} className="gsap-animate glass p-8 rounded-3xl group hover:border-brandAccent/50 transition-colors flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
              <p className="text-brandAccent font-medium mb-1">{cert.issuer}</p>
              <p className="text-white/50 text-sm mb-6">{cert.date}</p>

              <a href={cert.link} target="_blank" rel="noreferrer" className="mt-auto px-6 py-2 rounded-full border border-white/20 text-sm font-semibold hover:bg-white hover:text-dark transition-colors">
                View Credential
              </a>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Certifications;