
import { useState } from 'react';
import { Calendar } from 'lucide-react';
import { toast } from 'sonner';
import AnimatedSection from '../AnimatedSection';

const ContactForm = () => {
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

  return (
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
  );
};

export default ContactForm;
