import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Calendar, Clock, MapPin, MessageSquare } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success('Consultation request sent successfully!', {
      description: "We'll contact you within 24 hours to confirm your appointment."
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Working Hours",
      info: "Monday - Friday: 9AM - 7PM\nSaturday: 10AM - 4PM"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      info: "123 Wellness Street\nMindful City, MC 10001"
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Contact",
      info: "info@psychbuddy.com\n+1 (555) 123-4567"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Book Your Consultation</h2>
          <p className="text-muted-foreground text-lg">
            Take the first step towards psychological wellness by scheduling an initial consultation.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <AnimatedSection className="lg:col-span-2 bg-background rounded-xl p-8 shadow-sm border border-border/40" direction="right">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Calendar className="w-6 h-6 mr-2" />
              Request a Session
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select a service</option>
                    <option value="individual">Individual Therapy</option>
                    <option value="couples">Couples Counseling</option>
                    <option value="cbt">Cognitive Behavioral Therapy</option>
                    <option value="stress">Stress Management</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-md bg-primary text-primary-foreground text-base font-medium transition-all hover:bg-primary/90 hover:shadow-md"
                >
                  Request Consultation
                </button>
              </div>
            </form>
          </AnimatedSection>

          <AnimatedSection direction="left" className="space-y-6">
            {contactInfo.map((item, index) => (
              <div 
                key={index}
                className="bg-background rounded-xl p-6 shadow-sm border border-border/40"
              >
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">{item.title}</h4>
                    <p className="text-muted-foreground whitespace-pre-line">{item.info}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-accent rounded-xl p-6 border border-border/40">
              <h4 className="font-medium mb-2">Need Immediate Support?</h4>
              <p className="text-muted-foreground mb-4">
                If you're experiencing a crisis, please contact emergency services or call the National Crisis Hotline.
              </p>
              <a
                href="tel:988"
                className="inline-block px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium transition-colors hover:bg-primary/90"
              >
                Call Crisis Hotline: 988
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
