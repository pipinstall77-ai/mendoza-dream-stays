import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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
              Contacto
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para tu
              <br />
              <span className="text-gold">Próxima Aventura?</span>
            </h2>
            <p className="font-sans text-primary-foreground/80 mb-8 leading-relaxed">
              Estamos aquí para ayudarte a planificar tu estadía perfecta en Mendoza. 
              Contáctanos para consultas, reservas o cualquier pregunta que tengas.
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

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-card text-foreground rounded-2xl p-8 shadow-elevated">
              <h3 className="font-serif text-2xl font-bold mb-6">Envíanos un Mensaje</h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-sans text-sm font-medium mb-2 block">
                      Nombre
                    </label>
                    <Input placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label className="font-sans text-sm font-medium mb-2 block">
                      Email
                    </label>
                    <Input type="email" placeholder="tu@email.com" />
                  </div>
                </div>

                <div>
                  <label className="font-sans text-sm font-medium mb-2 block">
                    Teléfono
                  </label>
                  <Input placeholder="+54 9 261..." />
                </div>

                <div>
                  <label className="font-sans text-sm font-medium mb-2 block">
                    Mensaje
                  </label>
                  <Textarea
                    placeholder="Cuéntanos sobre tu viaje, fechas de interés, cantidad de personas..."
                    rows={4}
                  />
                </div>

                <Button variant="gold" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Consulta
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
