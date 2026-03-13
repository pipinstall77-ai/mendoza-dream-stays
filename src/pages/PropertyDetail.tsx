import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, Users, Bed, Bath, ArrowLeft, Check, 
  MessageCircle, Star, ChevronLeft, ChevronRight 
} from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppBubble from '@/components/WhatsAppBubble';
import { getWhatsAppLink } from '@/components/WhatsAppBubble';
import { getPropertyById } from '@/data/properties';

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const property = getPropertyById(id || '');
  const [currentImage, setCurrentImage] = useState(0);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold mb-4">Propiedad no encontrada</h1>
          <Link to="/">
            <Button variant="gold">Volver al Inicio</Button>
          </Link>
        </div>
      </div>
    );
  }

  const whatsappMessage = `¡Hola! Estoy interesado/a en reservar la propiedad *${property.title}* ubicada en ${property.location}. Me gustaría recibir más información sobre disponibilidad y precios. ¡Gracias!`;

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % property.gallery.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + property.gallery.length) % property.gallery.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppBubble />

      {/* Hero Gallery */}
      <section className="pt-20">
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <motion.img
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src={property.gallery[currentImage]}
            alt={property.title}
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
          
          {/* Gallery Navigation */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <button
              onClick={prevImage}
              className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {property.gallery.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImage ? 'bg-gold w-6' : 'bg-background/60'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextImage}
              className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Back Button */}
          <Link
            to="/#propiedades"
            className="absolute top-24 left-4 md:left-8 flex items-center gap-2 text-primary-foreground bg-foreground/30 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-foreground/50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Volver</span>
          </Link>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Title & Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span className="font-sans text-sm">{property.location}</span>
                </div>
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  {property.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{property.guests} huéspedes</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span>{property.bedrooms} dormitorio{property.bedrooms > 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    <span>{property.bathrooms} baño{property.bathrooms > 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gold">
                    <Star className="w-4 h-4 fill-gold" />
                    <span className="font-medium">5.0</span>
                  </div>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="prose prose-lg max-w-none"
              >
                <h2 className="font-serif text-2xl font-bold mb-4">Sobre este alojamiento</h2>
                <div className="font-sans text-muted-foreground leading-relaxed whitespace-pre-line">
                  {property.longDescription}
                </div>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="font-serif text-2xl font-bold mb-4">Lo más destacado</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-secondary rounded-lg"
                    >
                      <Check className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="font-sans text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Amenities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="font-serif text-2xl font-bold mb-4">Servicios incluidos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {property.amenitiesDetailed.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 border border-border rounded-lg"
                    >
                      <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-sans font-medium text-foreground">{amenity.name}</p>
                        <p className="font-sans text-sm text-muted-foreground">{amenity.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Gallery Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="font-serif text-2xl font-bold mb-4">Galería de fotos</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {property.gallery.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`aspect-square rounded-lg overflow-hidden ${
                        index === currentImage ? 'ring-2 ring-gold' : ''
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${property.title} - Foto ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar - Booking Card */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="sticky top-24 bg-card rounded-2xl p-6 shadow-elevated"
              >
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-serif text-3xl font-bold text-foreground">
                      {property.price}
                    </span>
                    <span className="text-muted-foreground">/ noche</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    ${property.priceARS.toLocaleString()} ARS aproximadamente
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-gold" />
                    <span>Cancelación flexible</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-gold" />
                    <span>Check-in flexible</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-gold" />
                    <span>Respuesta en menos de 24hs</span>
                  </div>
                </div>

                <a
                  href={getWhatsAppLink(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="gold" size="xl" className="w-full">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Reservar por WhatsApp
                  </Button>
                </a>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Te responderemos a la brevedad para coordinar tu estadía
                </p>

                {/* Contact Info */}
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-2">
                    ¿Tenés dudas?
                  </p>
                  <a
                    href={getWhatsAppLink(`Hola! Tengo una consulta sobre ${property.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:underline text-sm font-medium"
                  >
                    Escribinos por WhatsApp →
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
