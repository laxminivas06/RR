import { Building2, Calendar, ExternalLink } from 'lucide-react';

const experiences = [
  {
    company: 'Smart & Light Innovation',
    role: 'Co-Founder & Chief Operating Officer (COO)',
    duration: '2023 – Present',
    logo: '/public/images/snl.png',
    website: 'https://smartnlightinnovation.netlify.app',
    responsibilities: [
      'Co-founded the startup and helped shape its vision and strategy',
      'Managing daily operations and workflow optimization',
      'Coordinating between technical and business teams',
      'Supporting innovation-driven product initiatives',
    ],
  },
  {
    company: 'Wisdom Roots',
    role: 'Chief Operating Officer (COO)',
    duration: '2024 – Present',
    logo: '/public/images/wr.png',
    website: 'https://wisdomroots.netlify.app',
    responsibilities: [
      'Overseeing operational planning and execution',
      'Managing internal processes and team coordination',
      'Supporting growth initiatives and organizational efficiency',
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-secondary/30 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Cards */}
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="glass-card rounded-2xl p-6 md:p-8 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Logo */}
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 group"
                    aria-label={`${exp.company} website`}
                  >
                    <div className="w-20 h-20 rounded-2xl bg-card flex items-center justify-center shadow-card transition-transform duration-300 group-hover:scale-105 overflow-hidden">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain p-2"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <Building2 className="w-10 h-10 text-primary hidden" />
                    </div>
                  </a>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                      <div>
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                        >
                          <h3 className="text-xl font-bold text-foreground">
                            {exp.company}
                          </h3>
                          <ExternalLink className="w-4 h-4 opacity-70" />
                        </a>
                        <p className="text-primary font-medium">{exp.role}</p>
                      </div>

                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-3">
                      {exp.responsibilities.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;