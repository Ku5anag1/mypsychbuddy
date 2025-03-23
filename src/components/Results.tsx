
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Results = () => {
  const testimonials = [
    {
      content: "Working with my psychologist has been life-changing. I've developed coping strategies that actually work for my anxiety, and for the first time in years, I feel hopeful about the future.",
      author: "Michael K.",
      role: "Anxiety Management"
    },
    {
      content: "After struggling with depression for over a decade, I finally found the right support. The personalized approach made all the difference. It wasn't easy, but the results have been worth every effort.",
      author: "Rebecca T.",
      role: "Depression Recovery"
    },
    {
      content: "The tools I gained through couples therapy saved our marriage. We learned to communicate effectively and resolve conflicts in healthy ways. I'm grateful for the expert guidance we received.",
      author: "James & Lisa P.",
      role: "Couples Counseling"
    }
  ];

  const outcomes = [
    "Reduced symptoms of anxiety and depression",
    "Improved relationships and communication skills",
    "Enhanced stress management and resilience",
    "Better work-life balance and productivity",
    "Increased self-awareness and personal growth",
    "Effective coping strategies for life's challenges"
  ];

  return (
    <section id="results" className="section-padding bg-accent/20">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Proven Results</h2>
          <p className="text-muted-foreground text-lg">
            Our approach delivers meaningful outcomes for our clients across a wide range of concerns.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <AnimatedSection direction="right">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold">What You Can Expect</h3>
              <div className="space-y-4">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-0.5 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <p>{outcome}</p>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <div className="inline-flex items-center">
                  <div className="bg-primary/10 h-1 w-12 rounded"></div>
                  <p className="ml-4 text-muted-foreground">Based on client improvement metrics</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left">
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 bg-primary/5 rounded-xl transform rotate-3"></div>
              <div className="relative bg-background rounded-xl overflow-hidden shadow-sm border border-border/40">
                <div className="p-2">
                  <img
                    src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Client Results"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">Success Rate</h4>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-full bg-accent/50 rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: "86%" }}></div>
                    </div>
                    <span className="text-lg font-medium">86%</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Percentage of clients who report significant improvement after completing their treatment plan.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <h3 className="text-2xl font-semibold text-center mb-10">Client Testimonials</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection 
              key={index} 
              className="bg-background rounded-xl p-6 shadow-sm border border-border/40"
              delay={300 + (index * 100)}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="text-muted-foreground italic flex-grow mb-4">
                  "{testimonial.content}"
                </blockquote>
                <div className="mt-auto">
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
