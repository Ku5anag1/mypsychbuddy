
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Support from '@/components/Support';
import Results from '@/components/Results';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = "PsychBuddy - Your Personal Psychologist";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Experience />
        <Support />
        <Results />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
