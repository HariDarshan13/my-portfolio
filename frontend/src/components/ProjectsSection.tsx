import { ExternalLink, Github } from 'lucide-react';
import Student from "@/assets/p1.jpg"; 
import Job from "@/assets/p2.jpg";
import Currency from "@/assets/p3.jpg";
import Weather from "@/assets/p4.png"; 
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: 'Weather Application',
      description: 'A React-based weather application that fetches real-time forecasts using geolocation and Weather API integration.',
      techStack: ['React', 'Weather API', 'Geolocation'],
      image: Weather,
      githubUrl: '#',
      demoUrl: '#',
      featured: true // ✅ featured project 1
    },
    {
      title: 'Fake Job Detector',
      description: 'AI-powered application that analyzes job postings to detect fraudulent listings using NLP and machine learning.',
      techStack: ['Python', 'Flask', 'scikit-learn', 'NLP'],
      image: Job,
      githubUrl: '#',
      demoUrl: '#',
      featured: true // ✅ featured project 2
    },
    {
      title: 'Student Management System',
      description: 'A comprehensive platform for managing student records.',
      techStack: ['Html', 'Css', 'Javascript'],
      image: Student,
      githubUrl: '#',
      demoUrl: '#'
      // ❌ not featured
    },
    {
      title: 'Currency Converter',
      description: 'Real-time currency conversion app with historical data charts and rate tracking functionality.',
      techStack: ['Html', 'Css', 'Javascript'],
      image: Currency,
      githubUrl: '#',
      demoUrl: '#'
      // ❌ not featured
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="fade-up text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-off-white/80 max-w-2xl mx-auto">
            A showcase of innovative solutions and creative applications
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-cyber-aqua mb-8 text-center">Highlighted Work</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.filter(project => project.featured).map((project) => (
              <div key={project.title} className="glass-card p-8 fade-up group hover:scale-105 transition-all duration-500">
                
                {/* ✅ Image Render */}
                <div className="aspect-video rounded-lg mb-6 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <h4 className="text-2xl font-bold text-off-white mb-4">{project.title}</h4>
                <p className="text-off-white/80 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-cyber-blue/30 text-cyber-aqua text-sm rounded-full border border-cyber-aqua/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-cyber-aqua text-cyber-aqua hover:bg-cyber-aqua hover:text-tech-navy"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button 
                      size="sm"
                      className="neon-button"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div>
          <h3 className="text-3xl font-semibold text-cyber-aqua mb-8 text-center">All Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projects.map((project) => (
              <div key={project.title} className="glass-card p-6 fade-up group hover:scale-105 transition-all duration-300">
                
                {/* ✅ Image Render */}
                <div className="aspect-video rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <h4 className="text-xl font-bold text-off-white mb-3">{project.title}</h4>
                <p className="text-off-white/70 text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-cyber-blue/20 text-cyber-aqua text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 text-off-white/50 text-xs">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-cyber-aqua/50 text-cyber-aqua text-xs px-3 py-1 h-auto"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button 
                      size="sm"
                      className="bg-cyber-aqua text-tech-navy text-xs px-3 py-1 h-auto hover:bg-cyber-aqua/80"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
