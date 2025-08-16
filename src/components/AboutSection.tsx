import myPhoto from "@/assets/profile.jpg"; // ✅ replace with your actual image file

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="fade-up text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent">
            About Me
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 fade-up">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Text Section */}
              <div className="flex-1">
                <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6">
                  I am a passionate <span className="text-primary font-semibold">Full Stack Developer</span> from Salem, Tamil Nadu, 
                  specializing in building scalable, user-focused web applications. 
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-8">
                  Skilled across both frontend and backend technologies, I merge creativity with technology 
                  to solve real-world problems and create meaningful digital experiences.
                </p>
                
                {/* Growth Timeline */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-primary mb-4">My Journey</h3>
                  
                  <div className="timeline-item fade-up">
                    <div className="mb-2">
                      <span className="text-primary font-semibold">2023</span>
                      <h4 className="text-xl font-semibold text-foreground">Started Programming Journey</h4>
                      <p className="text-muted-foreground">Discovered the world of coding and fell in love with problem-solving</p>
                    </div>
                  </div>
                  
                  <div className="timeline-item fade-up">
                    <div className="mb-2">
                      <span className="text-primary font-semibold">2024</span>
                      <h4 className="text-xl font-semibold text-foreground">Web Development Focus</h4>
                      <p className="text-muted-foreground">Specialized in full-stack development with modern frameworks</p>
                    </div>
                  </div>
                  
                  <div className="timeline-item fade-up">
                    <div className="mb-2">
                      <span className="text-primary font-semibold">2024-Present</span>
                      <h4 className="text-xl font-semibold text-foreground">Building Solutions</h4>
                      <p className="text-muted-foreground">Creating impactful applications and expanding into AI/ML</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* ✅ Profile Image Section */}
              <div className="flex-shrink-0">
                <div className="w-64 h-64 rounded-full bg-gradient-cyber p-1">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img 
                      src={myPhoto} 
                      alt="Hari Darshan" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
