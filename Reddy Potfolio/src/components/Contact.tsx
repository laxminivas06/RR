import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  return (
    <>
      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Let's connect and explore opportunities in Data Science, Machine Learning, and Innovation.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6" />
          </div>

          {/* CENTERED CARD */}
          <div className="flex justify-center">
            <div className="glass-card rounded-2xl p-8 w-full max-w-xl">
              <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                Get in Touch
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <a
                  href="mailto:govardhinireddychirraiahgari@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/50 transition group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground break-all text-sm md:text-base">
                      govardhinireddychirraiahgari@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+917780252246"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/50 transition group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium text-foreground">
                      +91 77802 52246
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-border text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Connect on Social
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/chirraiahgari-govardhini-reddy-67a34a321/"
                    target="_blank"
                    className="w-12 h-12 rounded-xl glass-card flex items-center justify-center hover:bg-primary/10 transition group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                  </a>
                  <a
                    href="https://github.com/govardhini-reddy"
                    target="_blank"
                    className="w-12 h-12 rounded-xl glass-card flex items-center justify-center hover:bg-primary/10 transition group"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default Contact;