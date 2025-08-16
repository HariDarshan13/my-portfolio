import { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    // Frontend
    { name: 'HTML/CSS', level: 95, category: 'Frontend' },
    { name: 'JavaScript', level: 90, category: 'Frontend' },
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 85, category: 'Frontend' },
    
    // Backend
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'Express', level: 83, category: 'Backend' },
    { name: 'Flask', level: 78, category: 'Backend' },
    
    
    // Database
    { name: 'MongoDB', level: 82, category: 'Database' },
    { name: 'MySQL', level: 90, category: 'Database' },
    
    // DevOps & Tools
    { name: 'Git', level: 60, category: 'DevOps' },
   
    
    // Other
    { name: 'Machine Learning', level: 76, category: 'AI/ML' },
    { name: 'NLP', level: 74, category: 'AI/ML' },
    { name: 'Data Analysis', level: 78, category: 'AI/ML' },
  ];

  const categories = ['Frontend', 'Backend', 'Database', 'DevOps', 'AI/ML'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="fade-up text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category} className="glass-card p-6 fade-up">
                <h3 className="text-2xl font-semibold text-primary mb-6 text-center">
                  {category}
                </h3>
                
                <div className="space-y-4">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, index) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-foreground font-medium">{skill.name}</span>
                          <span className="text-primary text-sm">{skill.level}%</span>
                        </div>
                        
                        <div className="skill-bar">
                          <div 
                            className="skill-progress"
                            style={{
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${index * 0.1}s`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Circular Progress Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Frontend', 'Backend', 'DevOps', 'AI/ML'].map((category) => {
              const avgLevel = Math.round(
                skills
                  .filter(skill => skill.category === category)
                  .reduce((sum, skill) => sum + skill.level, 0) /
                skills.filter(skill => skill.category === category).length
              );
              
              return (
                <div key={category} className="text-center fade-up">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="hsl(var(--border))"
                        strokeWidth="8"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 45}`}
                        strokeDashoffset={isVisible ? `${2 * Math.PI * 45 * (1 - avgLevel / 100)}` : `${2 * Math.PI * 45}`}
                        className="transition-all duration-2000 ease-out"
                        style={{ filter: 'drop-shadow(0 0 5px hsl(var(--primary)))' }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">{avgLevel}%</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">{category}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
