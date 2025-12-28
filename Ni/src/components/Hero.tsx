import { ArrowDown, FileText, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

// ✅ Import resume from assets (same pattern as images)
import resumePDF from '@/assets/Govardhini_Reddy_Chirraiahgari_Resume.pdf';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl floating" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl floating-delayed" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mt-6 rounded-full glass-card text-sm font-medium text-muted-foreground mb-8">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Open to Opportunities
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Govardhini Reddy</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-4">
            Data Science Undergraduate | Machine Learning Explorer | Startup Leader
          </p>

          {/* Tagline */}
          <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10">
            Passionate about applying data-driven techniques to real-world problems,
            especially in healthcare and analytics.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full shadow-glow"
              onClick={() =>
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              View Projects
            </Button>

            {/* ✅ Resume Download from assets */}
            <a href={resumePDF} download>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 rounded-full border-2"
              >
                <FileText className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </a>
          </div>

          {/* Scroll Down Indicator */}
          <div className="mt-10 flex justify-center">
            <button
              onClick={() =>
                document
                  .getElementById('about')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition"
              aria-label="Scroll down"
            >
              <span className="text-xs tracking-wide">Scroll</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-10">
            <a
              href="https://www.linkedin.com/in/chirraiahgari-govardhini-reddy-67a34a321/"
              className="p-3 rounded-full glass-card hover:bg-primary/10 transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/govardhini-reddy"
              className="p-3 rounded-full glass-card hover:bg-primary/10 transition"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;