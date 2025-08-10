import dgctLogo from "@/assets/dgct.jpg";
import schoolLogo from "@/assets/vidhyamandir.jpg";

const EducationSection = () => {
  const education = [
    {
      year: '2023-2027',
      degree: 'Bachelor of Technology',
      field: 'Information Technology',
      institution: 'Dhirajlal Gandhi College Of Technology',
      location: 'Salem, Tamil Nadu, India',
      percentage: '80%', // still studying
      image: dgctLogo,
    },
    {
      year: '2021-2023',
      degree: 'Higher Secondary (HSC)',
      field: 'Computer Science',
      institution: 'Sri Vidhya Mandir Matriculation Higher Secondary School',
      location: 'Salem, Tamil Nadu, India',
      percentage: '66%', // example
      image: schoolLogo,
    },
    {
      year: '2020-2021',
      degree: 'Secondary School Leaving Certificate (SSLC)',
      field: 'General Education',
      institution: 'Sri Vidhya Mandir Matriculation Higher Secondary School',
      location: 'Salem, Tamil Nadu, India',
      percentage: '61%', // example
      image: schoolLogo,
    },
  ];

  const achievements = [
    {
      title: 'Technology Digger Winner',
      description:
        'Won first place in National Level Technical Symposium at Paavai Engineering College',
      year: '2024',
    },
    {
      title: 'Best Co-curricular Award',
      description:
        'Recognized with the Best Co-curricular Award for outstanding participation and excellence in non-academic activities.',
      year: '2024-2025',
    },
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="fade-up text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent">
            Education & Achievements
          </h2>
          <p className="text-xl text-off-white/80 max-w-2xl mx-auto">
            Academic foundation and recognition in technology and innovation
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Education */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold text-cyber-aqua mb-8 text-center">
              Education
            </h3>

            {education.map((edu, index) => (
              <div
                key={index}
                className="glass-card p-8 fade-up max-w-4xl mx-auto mb-8"
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={edu.image}
                      alt={edu.institution}
                      className="w-20 h-20 object-cover rounded-full border-2 border-cyber-aqua shadow-lg"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-off-white mb-1">
                          {edu.degree}
                        </h4>
                        <h5 className="text-xl text-cyber-aqua mb-2">
                          {edu.field}
                        </h5>
                        <p className="text-off-white/80">{edu.institution}</p>
                        <p className="text-off-white/60 text-sm">{edu.location}</p>
                        {/* ✅ Percentage */}
                        <p className="mt-2 text-sm font-semibold text-cyber-aqua">
                          Percentage: {edu.percentage}
                        </p>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <span className="inline-block px-4 py-2 bg-cyber-blue/30 text-cyber-aqua rounded-full text-sm font-semibold">
                          {edu.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements & Recognition */}
          <div>
            <h3 className="text-3xl font-semibold text-cyber-aqua mb-8 text-center">
              Achievements & Recognition
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="glass-card p-6 fade-up group hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-cyber rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-xl">🏆</div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-bold text-off-white">
                          {achievement.title}
                        </h4>
                        <span className="text-cyber-aqua text-sm font-semibold">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-off-white/80 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
