import { Award, ExternalLink, Clock } from 'lucide-react';

const certifications = [
  {
    name: 'AWS Data Engineering Virtual Internship',
    issuer: 'AWS Academy',
    period: 'July – September 2025',
    status: 'upcoming',
  },
  {
    name: 'Programming for Python',
    issuer: 'University of Michigan',
    period: 'In Progress',
    status: 'in-progress',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Certifications & <span className="gradient-text">Learning</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Certification Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className="glass-card rounded-2xl p-6 hover:shadow-card-hover transition-all duration-300 group relative overflow-hidden"
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  {cert.status === 'in-progress' ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                      <Clock className="w-3 h-3" />
                      In Progress
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      <Clock className="w-3 h-3" />
                      Upcoming
                    </span>
                  )}
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-7 h-7 text-primary" />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-bold text-foreground mb-2 pr-20">{cert.name}</h3>
                    <p className="text-muted-foreground mb-1">{cert.issuer}</p>
                    <p className="text-sm text-primary font-medium">{cert.period}</p>
                  </div>
                </div>

                {/* Decorative gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
