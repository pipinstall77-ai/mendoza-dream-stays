import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PropertiesSection from '@/components/PropertiesSection';
import ServicesSection from '@/components/ServicesSection';
import ToursPromoSection from '@/components/ToursPromoSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PaymentSection from '@/components/PaymentSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import VendimiaPromoPopup from '@/components/VendimiaPromoPopup';

const Index = () => {
  return (
    <div className="min-h-screen">
      <VendimiaPromoPopup />
      <Header />
      <HeroSection />
      <PropertiesSection />
      <ServicesSection />
      <ToursPromoSection />
      <TestimonialsSection />
      <PaymentSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
