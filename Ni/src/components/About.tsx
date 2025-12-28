import { GraduationCap, Brain, BarChart3, Rocket } from 'lucide-react';
import profileImage from '@/assets/profile.jpeg';

const highlights = [
  { icon: GraduationCap, label: 'Student', color: 'from-blue-500 to-indigo-500' },
  { icon: Brain, label: 'ML Enthusiast', color: 'from-purple-500 to-pink-500' },
  { icon: BarChart3, label: 'Data Analytics Learner', color: 'from-teal-500 to-emerald-500' },
  { icon: Rocket, label: 'Startup Co-Founder', color: 'from-orange-500 to-red-500' },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden glass-card p-2">
                  <img
                    src={profileImage}
                    alt="Govardhini Reddy Chirraiahgari"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-2xl blur-xl" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Motivated Data Science–oriented undergraduate with a foundational understanding 
                of Python, Machine Learning, and data analytics. Actively exploring real-world 
                applications of data-driven techniques, particularly in healthcare and analytics domains.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Alongside academics, involved in startup leadership roles, contributing to operations, 
                strategy, and innovation. Strong believer in continuous learning, hands-on projects, 
                and impactful technology.
              </p>

              {/* Highlight Cards */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {highlights.map((item, index) => (
                  <div
                    key={item.label}
                    className="glass-card rounded-xl p-4 hover:shadow-card-hover transition-all duration-300 group cursor-default"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-medium text-foreground">{item.label}</p>
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

export default About;
