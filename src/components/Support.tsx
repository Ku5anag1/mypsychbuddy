
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { MessageCircle, Users, Brain, Sparkles } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Support = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Individual Therapy",
      shortDesc: "One-on-one sessions tailored to your needs",
      longDesc: "Our individual therapy sessions provide a safe, confidential space to address personal challenges. We work collaboratively to develop strategies for managing symptoms, improving relationships, and enhancing overall well-being."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Couples Counseling",
      shortDesc: "Strengthen relationships and improve communication",
      longDesc: "Couples counseling helps partners improve communication, resolve conflicts, and rebuild trust. We facilitate meaningful conversations and provide tools to help you and your partner create a more fulfilling relationship."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Cognitive Behavioral Therapy",
      shortDesc: "Evidence-based approach to changing thought patterns",
      longDesc: "Cognitive Behavioral Therapy (CBT) is a proven approach that helps identify and change negative thought patterns affecting your emotions and behaviors. We'll work together to develop practical strategies for managing specific challenges."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Stress Management",
      shortDesc: "Techniques to reduce stress and anxiety",
      longDesc: "Our stress management program combines evidence-based techniques to help you identify stressors, develop coping mechanisms, and implement lifestyle changes that promote relaxation and resilience in the face of life's challenges."
    }
  ];

  return (
    <section id="support" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Comprehensive Support</h2>
          <p className="text-muted-foreground text-lg">
            We offer a range of specialized services to address your unique psychological needs.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="right" className="order-2 lg:order-1">
            <div className="bg-background rounded-xl p-8 border border-border/40 shadow-sm h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary">
                  {services[activeTab].icon}
                </div>
                <h3 className="text-2xl font-semibold">{services[activeTab].title}</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                {services[activeTab].longDesc}
              </p>
              <div className="flex justify-start">
                <a
                  href="#contact"
                  className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium transition-colors hover:bg-primary/90"
                >
                  Book a Session
                </a>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" className="space-y-4 order-1 lg:order-2">
            <h3 className="text-xl font-medium mb-4">Our Services</h3>
            <div className="space-y-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={cn(
                    "p-4 rounded-lg cursor-pointer transition-all duration-300",
                    activeTab === index
                      ? "bg-primary/10 border-l-4 border-primary"
                      : "bg-background hover:bg-accent/30 border border-border/40"
                  )}
                  onClick={() => setActiveTab(index)}
                >
                  <div className="flex items-center">
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center mr-3",
                      activeTab === index ? "text-primary" : "text-muted-foreground"
                    )}>
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{service.title}</h4>
                      <p className="text-sm text-muted-foreground">{service.shortDesc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Support;
