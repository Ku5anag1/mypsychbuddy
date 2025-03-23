
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import AnimatedSection from './AnimatedSection';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div 
          className={cn(
            "absolute top-0 right-0 w-full h-full bg-gradient-to-br from-accent/40 via-background to-background",
            "transition-opacity duration-[2000ms]",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
        />
        <div 
          className={cn(
            "absolute top-20 right-20 w-72 h-72 rounded-full bg-accent/20 animate-float",
            "transition-opacity duration-[2000ms] delay-300",
            isLoaded ? "opacity-30" : "opacity-0"
          )}
        />
        <div 
          className={cn(
            "absolute bottom-20 left-20 w-96 h-96 rounded-full bg-accent/20 animate-float",
            "animation-delay-1000 transition-opacity duration-[2000ms] delay-500",
            isLoaded ? "opacity-30" : "opacity-0"
          )}
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection className="space-y-6 text-center lg:text-left" delay={300}>
            <div className="inline-block px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-sm font-medium mb-2">
              Your Personal Psychologist
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Experience, Support, Results
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
              Begin your journey to mental wellness with personalized psychological 
              support designed around your unique needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 rounded-md bg-primary text-primary-foreground text-base font-medium transition-all hover:bg-primary/90 hover:shadow-md"
              >
                Book Initial Consultation
              </a>
              <a
                href="#support"
                className="px-6 py-3 rounded-md border border-primary/20 bg-transparent hover:bg-primary/5 text-base font-medium transition-all"
              >
                Learn More
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection className="relative" delay={600} direction="left">
            <div className="relative rounded-2xl overflow-hidden aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-10 rounded-2xl"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-tr from-primary/20 to-transparent z-0 rounded-2xl animate-pulse" style={{ animationDuration: '4s' }}></div>
              <div className="relative bg-accent/30 w-full h-full rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1551847627-91a55c3d64cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80')] bg-cover bg-center">
                    <div className="w-full h-full bg-primary/10 backdrop-blur-[2px]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/30 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '1s' }}></div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
