import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import RentalBookingForm from '@/components/RentalBookingForm';

const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 bg-mountain text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-sans text-sm text-gold font-semibold tracking-wider uppercase mb-4 block">
              Reservas
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Reserva tu
              <br />
              <span className="text-gold">Estadía Perfecta</span>
            </h2>
            <p className="font-sans text-primary-foreground/80 mb-8 leading-relaxed">
              Completa el formulario con tus fechas de interés y la propiedad que deseas. 
              Te contactaremos para confirmar disponibilidad y coordinar todos los detalles de tu estadía.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-sans text-sm text-primary-foreground/60">Teléfono</p>
                  <p className="font-sans font-medium">+54 261 555 0123</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-sans text-sm text-primary-foreground/60">Email</p>
                  <p className="font-sans font-medium">reservas@refugiomendoza.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-sans text-sm text-primary-foreground/60">Ubicación</p>
                  <p className="font-sans font-medium">Ciudad de Mendoza, Argentina</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-card text-foreground rounded-2xl p-8 shadow-elevated">
              <h3 className="font-serif text-2xl font-bold mb-6">Solicitar Reserva</h3>
              <RentalBookingForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
