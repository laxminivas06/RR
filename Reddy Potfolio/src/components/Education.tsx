import { GraduationCap, School, BookOpen } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech – Computer Science Engineering',
    institution: 'Sphoorthy Engineering College',
    duration: '2023 – Present',
    score: 'CGPA: 8.03 / 10',
    icon: GraduationCap,
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Narayana Junior College',
    duration: '2021 – 2023',
    score: '77.2%',
    icon: School,
  },
  {
    degree: 'CBSE Schooling',
    institution: 'Jyothi Vidhya Niketan CBSE School',
    duration: '2021',
    score: '550 / 600',
    icon: BookOpen,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-tr from-accent/5 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Education <span className="gradient-text">Timeline</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 transform md:-translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {education.map((item, index) => (
                <div
                  key={item.degree}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-4 h-4 rounded-full bg-primary shadow-glow" />
                  </div>

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="glass-card rounded-2xl p-6 hover:shadow-card-hover transition-all duration-300 group">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-grow">
                          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-2">
                            {item.duration}
                          </span>
                          <h3 className="text-lg font-bold text-foreground mb-1">{item.degree}</h3>
                          <p className="text-muted-foreground mb-2">{item.institution}</p>
                          <p className="text-accent font-semibold">{item.score}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
