import { ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-secondary/50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          {/* Copyright */}
          <div>
            <p className="text-muted-foreground">
              © {currentYear} Govardhini Reddy Chirraiahgari
            </p>
            <p className="text-sm text-muted-foreground/70 mt-2 flex items-center justify-center gap-1">
              Built with
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              for Data, Learning & Innovation
            </p>
          </div>

          {/* Back to Top */}
          <div className="flex justify-center">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-5 py-2 rounded-full glass-card hover:bg-primary/10 transition-all duration-300"
              aria-label="Back to top"
            >
              <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                Back to top
              </span>
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:-translate-y-1 transition-all duration-300">
                <ArrowUp className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;