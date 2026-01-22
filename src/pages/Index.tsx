import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PropertiesSection from '@/components/PropertiesSection';
import ServicesSection from '@/components/ServicesSection';
import ToursSection from '@/components/ToursSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PaymentSection from '@/components/PaymentSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PropertiesSection />
      <ServicesSection />
      <ToursSection />
      <TestimonialsSection />
      <PaymentSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
