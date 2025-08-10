import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import ResumePDF from "@/assets/Resume.pdf"; // ✅ Import your resume from assets

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { name: 'Home', href: 'hero' },
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'Education', href: 'education' },
    { name: 'Contact', href: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.href));
      const scrollPos = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (
          section &&
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActiveSection(navItems[index].href);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-cyber-aqua/20 backdrop-blur-lg">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div
              className="text-2xl font-bold bg-gradient-neon bg-clip-text text-transparent cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              HD
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    activeSection === item.href
                      ? 'text-cyber-aqua'
                      : 'text-off-white/80 hover:text-cyber-aqua'
                  }`}
                >
                  {item.name}
                  {activeSection === item.href && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyber-aqua" />
                  )}
                </button>
              ))}

              {/* ✅ Download Resume Button */}
              <a
                href={ResumePDF}
                download="HariDarshan-Resume.pdf"
                className="px-4 py-2 rounded-lg border border-cyber-aqua text-cyber-aqua text-sm font-medium flex items-center gap-2 hover:bg-cyber-aqua hover:text-tech-navy transition-all duration-300"
              >
                <Download size={16} />
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-cyber-aqua"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-tech-navy/95 backdrop-blur-lg" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-2xl font-medium transition-all duration-300 ${
                  activeSection === item.href
                    ? 'text-cyber-aqua'
                    : 'text-off-white/80 hover:text-cyber-aqua'
                }`}
              >
                {item.name}
              </button>
            ))}

            {/* ✅ Resume in Mobile Menu */}
            <a
              href={ResumePDF}
              download="HariDarshan-Resume.pdf"
              className="px-6 py-3 rounded-lg border border-cyber-aqua text-cyber-aqua text-lg font-semibold flex items-center gap-2 hover:bg-cyber-aqua hover:text-tech-navy transition-all duration-300"
            >
              <Download size={20} />
              Resume
            </a>
          </div>
        </div>
      )}

      {/* Scroll Progress Bar */}
      <div className="fixed top-16 left-0 right-0 z-40 h-1 bg-cyber-blue/20">
        <div
          className="h-full bg-gradient-neon transition-all duration-150 ease-out"
          style={{
            width: `${Math.min(
              (window.scrollY /
                (document.documentElement.scrollHeight -
                  window.innerHeight)) *
                100,
              100
            )}%`
          }}
        />
      </div>
    </>
  );
};

export default Navigation;
