import { Code, Database, BarChart3, Brain, MessageSquare, Users, Lightbulb, Clock, RefreshCw, Sparkles } from 'lucide-react';

const technicalSkills = [
  { name: 'Python', icon: Code, level: 85 },
  { name: 'C', icon: Code, level: 70 },
  { name: 'SQL (Basics)', icon: Database, level: 60 },
  { name: 'DSA (Basics)', icon: Code, level: 65 },
  { name: 'Tableau', icon: BarChart3, level: 75 },
  { name: 'ML Fundamentals', icon: Brain, level: 70 },
  { name: 'TensorFlow', icon: Brain, level: 65 },
];

const softSkills = [
  { name: 'Communication', icon: MessageSquare },
  { name: 'Teamwork', icon: Users },
  { name: 'Problem Solving', icon: Lightbulb },
  { name: 'Time Management', icon: Clock },
  { name: 'Adaptability', icon: RefreshCw },
  { name: 'Willingness to Learn', icon: Sparkles },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-accent/5 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Code className="w-5 h-5 text-primary" />
                </div>
                Technical Skills
              </h3>

              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <skill.icon className="w-5 h-5 text-primary" />
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                Soft Skills
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="glass-card rounded-xl p-5 hover:shadow-card-hover transition-all duration-300 group cursor-default"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <skill.icon className="w-6 h-6 text-accent" />
                    </div>
                    <p className="font-medium text-foreground">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
