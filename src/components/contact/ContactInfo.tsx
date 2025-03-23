
import { Clock, MapPin, MessageSquare } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

interface ContactInfoItem {
  icon: React.ReactNode;
  title: string;
  info: string;
}

const ContactInfo = () => {
  const contactInfo: ContactInfoItem[] = [
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
  );
};

export default ContactInfo;
