import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import Student from "@/assets/p1.jpg"; 
import Job from "@/assets/p2.jpg";
import Currency from "@/assets/p3.jpg";
import Weather from "@/assets/p4.png"; 

// Video Assets
import WeatherVideo from "@/assets/weather video.mp4";
import JobVideo from "@/assets/Fake job video.mp4";
import StudentVideo from "@/assets/student.mp4";
import CurrencyVideo from "@/assets/currency con video.mp4";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  githubUrl?: string;
  demoVideo?: string;
  featured?: boolean;
}

const ProjectsSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const projects: Project[] = [
    {
      title: 'Weather Application',
      description: 'A React-based weather application that fetches real-time forecasts using geolocation and Weather API integration.',
      techStack: ['React', 'Weather API', 'Geolocation'],
      image: Weather,
      githubUrl: 'https://github.com/HariDarshan13/WeatherApp',
      demoVideo: WeatherVideo,
      featured: true
    },
    {
      title: 'Fake Job Detector',
      description: 'AI-powered application that analyzes job postings to detect fraudulent listings using NLP and machine learning.',
      techStack: ['Python', 'Flask', 'scikit-learn', 'NLP'],
      image: Job,
      githubUrl: 'https://github.com/HariDarshan13/Fake-job-detector',
      demoVideo: JobVideo,
      featured: true
    },
    {
      title: 'Student Management System',
      description: 'A comprehensive platform for managing student records.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      image: Student,
      githubUrl: 'https://github.com/HariDarshan13/student-management-system',
      demoVideo: StudentVideo
    },
    {
      title: 'Currency Converter',
      description: 'Real-time currency conversion app with historical data charts and rate tracking functionality.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      image: Currency,
      githubUrl: 'https://github.com/HariDarshan13/currency-conv',
      demoVideo: CurrencyVideo
    }
  ];

  // Handle clicking outside video to close modal
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedVideo(null);
    }
  };

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
                    <button 
                      className="border border-cyber-aqua text-cyber-aqua px-4 py-2 rounded flex items-center hover:bg-cyber-aqua hover:text-tech-navy transition"
                      onClick={() => window.open(project.githubUrl!, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </button>
                  )}
                  {project.demoVideo && (
                    <button 
                      className="neon-button px-4 py-2 rounded flex items-center transition"
                      onClick={() => setSelectedVideo(project.demoVideo!)}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </button>
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
                    <button 
                      className="border border-cyber-aqua/50 text-cyber-aqua text-xs px-3 py-1 rounded h-auto flex items-center hover:bg-cyber-aqua/20 transition"
                      onClick={() => window.open(project.githubUrl!, '_blank')}
                    >
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </button>
                  )}
                  {project.demoVideo && (
                    <button 
                      className="bg-cyber-aqua text-tech-navy text-xs px-3 py-1 rounded h-auto flex items-center hover:bg-cyber-aqua/80 transition"
                      onClick={() => setSelectedVideo(project.demoVideo!)}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={handleOverlayClick}
        >
          <div className="relative w-[90%] md:w-[70%] lg:w-[60%]">
            <button 
              className="absolute -top-10 right-0 text-white hover:text-cyber-aqua"
              onClick={() => setSelectedVideo(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <video 
              src={selectedVideo} 
              controls 
              autoPlay 
              className="w-full rounded-lg shadow-lg"
              onEnded={() => setSelectedVideo(null)} // close when finished
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
