
import AnimatedSection from './AnimatedSection';
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';

const Contact = () => {
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
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default Contact;
