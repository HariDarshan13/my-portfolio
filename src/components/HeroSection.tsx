import { Button } from '@/components/ui/button';
import TypewriterEffect from './TypewriterEffect';
import techBackground from '@/assets/tech-background.jpg';

const HeroSection = () => {
  const jobTitles = [
    'Full Stack Developer',
    'Problem Solver', 
    'Innovator',
    'Code Architect'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image - Only for dark mode */}
      <div 
        className="absolute inset-0 dark:opacity-100 opacity-0 transition-opacity duration-500"
        style={{
          backgroundImage: `url(${techBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Light mode gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-secondary/20 dark:opacity-0 opacity-100 transition-opacity duration-500" />
      
      {/* Dark mode overlay */}
      <div className="absolute inset-0 bg-tech-navy/80 dark:opacity-100 opacity-0 transition-opacity duration-500" />
      
      {/* Tech Grid Animation - Only visible in dark mode */}
      <div className="absolute inset-0 tech-grid opacity-30 dark:opacity-30 opacity-10" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="fade-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent">
            Hari Darshan
          </h1>
          
          <div className="text-2xl md:text-4xl mb-8 h-16 flex items-center justify-center">
            <TypewriterEffect 
              texts={jobTitles}
              className="text-primary font-semibold"
            />
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Crafting intelligent digital solutions with modern web technologies.
            Transforming ideas into scalable, user-focused applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="neon-button text-lg px-8 py-4"
            >
              View Projects
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 4 + 4}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;