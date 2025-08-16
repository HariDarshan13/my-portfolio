import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/HariDarshan13',
      color: 'hover:text-cyber-aqua'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/s-haridarshan',
      color: 'hover:text-cyber-aqua'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'haridarshanhari123@gmail.com',
      color: 'hover:text-cyber-aqua'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-cyber-aqua/20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Logo */}
          <div 
            className="inline-block text-4xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-6 cursor-pointer hover:scale-110 transition-transform duration-300"
            onClick={scrollToTop}
          >
            HD
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 glass-card hover:scale-110 transition-all duration-300 group ${link.color}`}
                  aria-label={link.name}
                >
                  <IconComponent className="w-6 h-6 text-off-white/70 group-hover:text-cyber-aqua" />
                </a>
              );
            })}
          </div>
          
          {/* Quote */}
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg text-off-white/80 italic">
              "Code is like humor. When you have to explain it, it's bad."
            </p>
            <p className="text-cyber-aqua text-sm mt-2">- Cory House</p>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-cyber-aqua/20 pt-8">
            <p className="text-off-white/60 flex items-center justify-center gap-2">
              © {currentYear} Hari Darshan. Made with 
              <Heart className="w-4 h-4 text-cyber-aqua animate-pulse" />
              and lots of coffee.
            </p>
            <p className="text-off-white/40 text-sm mt-2">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
      
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="particle animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`,
              opacity: 0.2
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;