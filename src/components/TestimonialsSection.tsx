import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'María García',
    location: 'Buenos Aires, Argentina',
    rating: 5,
    text: 'Los domos son increíbles, una experiencia única. Despertar con vista a los Andes fue mágico. El tour de bodegas que nos organizaron fue impecable.',
    property: 'Domo Aurora',
    date: 'Noviembre 2024',
  },
  {
    name: 'Carlos Rodríguez',
    location: 'Santiago, Chile',
    rating: 5,
    text: 'El departamento en el centro está perfectamente ubicado. Caminamos a todo. La atención fue de primera y el check-in súper fácil.',
    property: 'Departamento Centro',
    date: 'Octubre 2024',
  },
  {
    name: 'Laura Fernández',
    location: 'Córdoba, Argentina',
    rating: 5,
    text: 'Hicimos el rafting y la cabalgata, ¡espectaculares! Los guías muy profesionales. Ya estamos planeando volver para hacer el tour de alta montaña.',
    property: 'Tours',
    date: 'Diciembre 2024',
  },
  {
    name: 'Martín López',
    location: 'Montevideo, Uruguay',
    rating: 5,
    text: 'Viajamos en familia y nos quedamos en el Domo Estelar. Los chicos no querían irse. La vista nocturna de las estrellas es impresionante.',
    property: 'Domo Estelar',
    date: 'Enero 2025',
  },
  {
    name: 'Ana Sánchez',
    location: 'Rosario, Argentina',
    rating: 5,
    text: 'El tour de bodegas fue increíble. Visitamos 4 bodegas premium y el almuerzo maridaje fue de otro nivel. 100% recomendado.',
    property: 'Tour Bodegas',
    date: 'Septiembre 2024',
  },
  {
    name: 'Diego Morales',
    location: 'Lima, Perú',
    rating: 5,
    text: 'Primera vez en Mendoza y gracias a Temporarios Mendoza conocimos los mejores lugares. El Puente del Inca y el Aconcagua nos dejaron sin palabras.',
    property: 'Tour Alta Montaña',
    date: 'Agosto 2024',
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-sans text-sm text-gold font-semibold tracking-wider uppercase mb-4 block">
            Testimonios
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Lo Que Dicen Nuestros Huéspedes
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            Más de 500 huéspedes satisfechos nos respaldan. Lee sus experiencias reales 
            en nuestras propiedades y tours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-gold/20" />
              
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              <p className="font-sans text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="border-t border-border pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-serif font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="font-sans text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-sans text-xs bg-sand px-2 py-1 rounded-full text-mountain">
                      {testimonial.property}
                    </span>
                    <p className="font-sans text-xs text-muted-foreground mt-1">
                      {testimonial.date}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '500+', label: 'Huéspedes Felices' },
            { value: '4.9', label: 'Rating Promedio' },
            { value: '150+', label: 'Tours Realizados' },
            { value: '98%', label: 'Recomendarían' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-serif text-4xl md:text-5xl font-bold text-mountain mb-2">
                {stat.value}
              </p>
              <p className="font-sans text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
