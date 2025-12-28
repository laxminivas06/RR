import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Govardhini Reddy | Data Science & Machine Learning Portfolio</title>
        <meta 
          name="description" 
          content="Portfolio of Govardhini Reddy Chirraiahgari - Data Science Undergraduate, Machine Learning Enthusiast, and Startup Co-Founder. Explore projects in healthcare ML and data analytics." 
        />
        <meta 
          name="keywords" 
          content="Data Science, Machine Learning, Python, TensorFlow, Startup, COO, Healthcare ML, Portfolio" 
        />
        <meta property="og:title" content="Govardhini Reddy | Data Science Portfolio" />
        <meta property="og:description" content="Data Science Undergraduate | Machine Learning Explorer | Startup Leader" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
