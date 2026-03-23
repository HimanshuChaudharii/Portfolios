const ProjectCard = ({ project }) => {
  return (
    <div className="glass rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-brand/20 group-hover:bg-transparent transition-colors z-10"></div>
        <img 
          src={project.imageUrl || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop'} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
        <p className="text-white/60 mb-6 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack?.map((tech, i) => (
            <span key={i} className="text-xs px-3 py-1 bg-white/10 rounded-full font-medium text-brandAccent">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 mt-auto">
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex-1 py-2 text-center bg-brandAccent text-dark font-bold rounded hover:bg-white transition-colors">
              Live Demo
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex-1 py-2 text-center bg-white/10 hover:bg-white/20 font-bold rounded transition-colors">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
