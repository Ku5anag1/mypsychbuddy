
import { cn } from '@/lib/utils';
import { Brain, GraduationCap, Clock, Heart } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Experience = () => {
  const qualifications = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Qualified Professionals",
      description: "Our team consists of licensed psychologists with advanced degrees and specialized training."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Years of Experience",
      description: "With over 15 years of clinical experience, we've helped thousands of patients achieve their goals."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Evidence-Based Approaches",
      description: "We utilize scientifically-validated therapeutic techniques tailored to your specific needs."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Compassionate Care",
      description: "We believe in treating the whole person with empathy, respect, and understanding."
    }
  ];

  return (
    <section id="experience" className="section-padding bg-accent/20">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Experience That Makes a Difference</h2>
          <p className="text-muted-foreground text-lg">
            Our expertise and qualifications ensure you receive the highest quality psychological care.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualifications.map((item, index) => (
            <AnimatedSection 
              key={index} 
              className="bg-background rounded-xl p-6 shadow-sm border border-border/40 hover:shadow-md transition-all"
              delay={300 + (index * 100)}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16 max-w-3xl mx-auto text-center" delay={700}>
          <div className="bg-background rounded-xl p-8 border border-border/40 shadow-sm">
            <blockquote className="text-lg italic text-muted-foreground">
              "Our mission is to provide exceptional psychological care that empowers individuals to overcome challenges, 
              discover their strengths, and live more fulfilling lives."
            </blockquote>
            <div className="mt-4 font-medium">Dr. Sarah Johnson, Clinical Director</div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Experience;
