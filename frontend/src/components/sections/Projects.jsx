import { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import ProjectCard from '../ui/ProjectCard';
import AnimatedSection from '../ui/AnimatedSection';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fallback data if API fails
  const fallbackProjects = [
    {
      _id: '1',
      title: 'AI Karaoke Song Selector',
      description: 'An AI-powered web app using Flask and Hugging Face API (Mistral-7B) to recommend songs based on users vocal ranges.',
      techStack: ['Python', 'Flask', 'Hugging Face API', 'JS'],
      githubLink: 'https://github.com/HimanshuChaudharii/AI-Project-Ai-Karaoke-Song-Selector',
      liveLink: '',
      imageUrl: '/karaoke-ai.png'
    },
    {
      _id: '2',
      title: 'Traffic Data Analysis',
      description: 'Conducted EDA on NYC MTA AADT (2008–2021) traffic data to identify seasonal/COVID patterns and automated monthly pipelines.',
      techStack: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib'],
      githubLink: 'https://github.com/HimanshuChaudharii/PythonProjectINT375',
      liveLink: '',
      imageUrl: '/traffic-data.png'
    },
    {
      _id: '3',
      title: 'SpotMyStay',
      description: 'A full-stack hostel discovery and booking platform with secure JWT authentication, admin/owner dashboards, and property listing management workflows.',
      techStack: ['React', 'Vite', 'Express', 'Node.js', 'MongoDB'],
      githubLink: 'https://github.com/HimanshuChaudharii/spotmystay',
      liveLink: '',
      imageUrl: '/spotmystay.png'
    },
    {
      _id: '4',
      title: 'System monitoring dashboard',
      description: 'To provide a clear, KPI-driven view of insurance performance by analyzing Total Policies, Total Claim Amount, Claim Frequency, and Average Claim Amount, while identifying risk trends across demographics, vehicles, and coverage zones.',
      techStack: ['Power BI'],
      githubLink: 'https://github.com/HimanshuChaudharii/System-monitoring-dashboard',
      liveLink: '',
      imageUrl: 'System monitoring dashbaord.png'
    },
    {
      _id: '5',
      title: 'AGRILIVE – Mandi Price Predictive Analytics.',
      description: 'Designed a data-driven pricing intelligence system for agricultural markets using machine learning techniques. The solution transforms raw mandi data into actionable insights through regression and classification models.',
      techStack: ['Python', 'Predictive Analytics'],
      githubLink: 'https://www.linkedin.com/posts/himanshu-chaudhari-4868a9298_analytics-datascience-machinelearning-activity-7406397885220556800-IQJW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgJCWYBTh7gnof8XhqZMtLeNWZ9FcbDwm8',
      liveLink: '',
      imageUrl: 'Smart farming_ AI-driven pricing analytics.png'
    },
    {
      _id: '6',
      title: 'QR-Code project',
      description: 'To design and develop a system that can generate and scan QR codes for storing and retrieving information efficiently using modern programming techniques.',
      techStack: ['MERN Stack'],
      githubLink: 'https://github.com/HimanshuChaudharii/Qr-code-Project',
      liveLink: '',
      imageUrl: 'QR code generator and scanner setup.png'
    },
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/projects`);
        if (!res.ok) throw new Error('Failed to fetch projects');
        const data = await res.json();
        setProjects(data.length > 0 ? data : fallbackProjects);
        setLoading(false);
      } catch (err) {
        console.error("API fetch failed, using fallback data", err);
        setProjects(fallbackProjects);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <AnimatedSection id="projects" className="bg-darker">
      <div className="container mx-auto px-6">
        <h2 className="gsap-animate text-4xl md:text-5xl font-bold mb-4 text-center">
          Featured <span className="text-brandAccent">Projects</span>
        </h2>
        <p className="gsap-animate text-white/60 text-center max-w-2xl mx-auto mb-16">
          A selection of projects that showcase my technical skills and problem-solving abilities.
        </p>

        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brandAccent"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Tilt
                key={project._id}
                className="gsap-animate"
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                scale={1.02}
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#ffffff"
                glarePosition="all"
              >
                <div className="h-full">
                  <ProjectCard project={project} />
                </div>
              </Tilt>
            ))}
          </div>
        )}
      </div>
    </AnimatedSection>
  );
};

export default Projects;
