import { ExternalLink, Github, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import projectImage from '@/assets/wound-detection.jpg';

const techStack = ['Python', 'TensorFlow', 'Machine Learning', 'Image Processing'];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Project Card */}
          <div className="glass-card rounded-3xl overflow-hidden hover:shadow-card-hover transition-all duration-500 group">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img
                  src={projectImage}
                  alt="Wound Detection Project"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:bg-gradient-to-r" />
                
                {/* Floating Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 rounded-full glass-card">
                  <Activity className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">85% Accuracy</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-4">
                    Healthcare ML
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Early Detection of Wound Severity Using Machine Learning
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Developed a TensorFlow-based ML model to classify wound severity from medical images. 
                    Achieved 85% accuracy and reduced processing time by 30%. Research documentation 
                    75% complete, aiming for publication.
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Button
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full px-6 border-2"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* More Projects Coming Soon */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card text-muted-foreground">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              More projects coming soon...
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
