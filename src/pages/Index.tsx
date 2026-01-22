import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PropertiesSection from '@/components/PropertiesSection';
import ServicesSection from '@/components/ServicesSection';
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
      <PaymentSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
