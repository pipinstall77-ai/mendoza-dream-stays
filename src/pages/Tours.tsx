import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, MapPin, Star, ChevronRight, Calendar, Phone, Mail, CheckCircle } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

import tourBodegas from '@/assets/tour-bodegas.jpg';
import tourMontana from '@/assets/tour-montana.jpg';
import tourRafting from '@/assets/tour-rafting.jpg';
import tourCabalgata from '@/assets/tour-cabalgata.jpg';

const tours = [
  {
    id: 'bodegas',
    image: tourBodegas,
    title: 'Tour de Bodegas Premium',
    subtitle: 'Luján de Cuyo & Valle de Uco',
    description: 'Recorre las mejores bodegas de Mendoza con degustación de vinos de alta gama y almuerzo gourmet maridaje.',
    duration: '8 horas',
    groupSize: '2-8 personas',
    price: 45000,
    rating: 4.9,
    reviews: 127,
    includes: ['Transporte privado', 'Guía sommelier', '4 bodegas premium', 'Almuerzo maridaje', 'Degustación 12 vinos'],
    highlight: 'Más Popular',
  },
  {
    id: 'montana',
    image: tourMontana,
    title: 'Alta Montaña Expedition',
    subtitle: 'Aconcagua, Puente del Inca & Las Cuevas',
    description: 'Viaja a lo más alto de los Andes. Conoce el Aconcagua, el mítico Puente del Inca y la frontera con Chile.',
    duration: 'Full day',
    groupSize: '2-12 personas',
    price: 38000,
    rating: 4.8,
    reviews: 89,
    includes: ['Transporte 4x4', 'Guía bilingüe', 'Snacks y bebidas', 'Seguro de viaje', 'Paradas fotográficas'],
    highlight: 'Imperdible',
  },
  {
    id: 'rafting',
    image: tourRafting,
    title: 'Rafting Aventura',
    subtitle: 'Río Mendoza - Potrerillos',
    description: 'Adrenalina pura navegando los rápidos del río Mendoza. Apto para todos los niveles de experiencia.',
    duration: '4 horas',
    groupSize: '4-10 personas',
    price: 32000,
    rating: 4.9,
    reviews: 156,
    includes: ['Equipo completo', 'Instructor certificado', 'Traslado', 'Seguro', 'Fotos y videos'],
    highlight: 'Aventura',
  },
  {
    id: 'cabalgata',
    image: tourCabalgata,
    title: 'Cabalgata Andina',
    subtitle: 'Cordillera de los Andes',
    description: 'Paseo a caballo por senderos de montaña con vistas panorámicas espectaculares y asado criollo incluido.',
    duration: '6 horas',
    groupSize: '2-8 personas',
    price: 55000,
    rating: 5.0,
    reviews: 64,
    includes: ['Caballo manso', 'Guía gaucho', 'Asado completo', 'Traslado', 'Vino de la casa'],
    highlight: 'Exclusivo',
  },
];

interface TourBookingFormProps {
  tour: typeof tours[0];
  onClose: () => void;
}

const TourBookingForm = ({ tour, onClose }: TourBookingFormProps) => {
  const [date, setDate] = useState<Date>();
  const [guests, setGuests] = useState('2');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-16 h-16 text-gold mx-auto mb-4" />
        <h3 className="font-serif text-2xl font-bold mb-2">¡Reserva Enviada!</h3>
        <p className="text-muted-foreground mb-6">
          Te contactaremos dentro de las próximas 24 horas para confirmar tu reserva.
        </p>
        <Button onClick={onClose} variant="gold">
          Cerrar
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-sand rounded-lg p-4">
        <h4 className="font-serif font-bold text-lg">{tour.title}</h4>
        <p className="text-muted-foreground text-sm">{tour.subtitle}</p>
        <p className="font-bold text-gold text-xl mt-2">
          ${tour.price.toLocaleString()} <span className="text-sm font-normal text-muted-foreground">/persona</span>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="font-sans text-sm font-medium mb-2 block">Nombre Completo</label>
          <Input placeholder="Tu nombre" required />
        </div>
        <div>
          <label className="font-sans text-sm font-medium mb-2 block">Email</label>
          <Input type="email" placeholder="tu@email.com" required />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="font-sans text-sm font-medium mb-2 block">Teléfono</label>
          <Input placeholder="+54 9 261..." required />
        </div>
        <div>
          <label className="font-sans text-sm font-medium mb-2 block">Cantidad de Personas</label>
          <Select value={guests} onValueChange={setGuests}>
            <SelectTrigger>
              <SelectValue placeholder="Seleccionar" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num} {num === 1 ? 'persona' : 'personas'}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <label className="font-sans text-sm font-medium mb-2 block">Fecha del Tour</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <Calendar className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP", { locale: es }) : "Seleccionar fecha"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <CalendarComponent
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(date) => date < new Date()}
              initialFocus
              className="pointer-events-auto"
            />
          </PopoverContent>
        </Popover>
      </div>

      <div>
        <label className="font-sans text-sm font-medium mb-2 block">Comentarios Adicionales</label>
        <Textarea placeholder="¿Alguna preferencia o necesidad especial?" rows={3} />
      </div>

      <div className="bg-muted/50 rounded-lg p-4 text-sm">
        <p className="font-medium mb-2">Precio estimado:</p>
        <p className="text-2xl font-bold text-gold">
          ${(tour.price * parseInt(guests)).toLocaleString()} ARS
        </p>
        <p className="text-muted-foreground text-xs mt-1">
          ({guests} {parseInt(guests) === 1 ? 'persona' : 'personas'} × ${tour.price.toLocaleString()})
        </p>
      </div>

      <Button type="submit" variant="gold" size="lg" className="w-full">
        Solicitar Reserva
      </Button>
    </form>
  );
};

const Tours = () => {
  const [selectedTour, setSelectedTour] = useState<typeof tours[0] | null>(null);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-mountain to-mountain/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans text-sm text-gold font-semibold tracking-wider uppercase mb-4 block"
          >
            Experiencias Únicas
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl font-bold mb-6"
          >
            Tours Turísticos <span className="text-gold">en Mendoza</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-primary-foreground/80 max-w-2xl mx-auto text-lg"
          >
            Descubre los tesoros de Mendoza con nuestros tours exclusivos. 
            Desde catas de vino hasta aventuras extremas, tenemos la experiencia perfecta para ti.
          </motion.p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-20 bg-sand">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tours.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="relative md:w-2/5 h-64 md:h-auto overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {tour.highlight}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
                      <Star className="w-4 h-4 fill-gold text-gold" />
                      <span className="font-sans text-sm font-semibold">{tour.rating}</span>
                      <span className="font-sans text-xs text-muted-foreground">({tour.reviews})</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:w-3/5 p-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-serif text-xl font-bold text-foreground">
                          {tour.title}
                        </h3>
                        <div className="flex items-center gap-1 text-muted-foreground text-sm">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{tour.subtitle}</span>
                        </div>
                      </div>
                    </div>

                    <p className="font-sans text-sm text-muted-foreground mb-4 leading-relaxed">
                      {tour.description}
                    </p>

                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{tour.groupSize}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="font-sans text-xs text-muted-foreground uppercase tracking-wider block mb-2">
                        Incluye:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {tour.includes.map((item, i) => (
                          <span
                            key={i}
                            className="font-sans text-xs bg-sand px-2 py-1 rounded-full text-foreground"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <span className="font-sans text-xs text-muted-foreground">Desde</span>
                        <p className="font-serif text-2xl font-bold text-gold">
                          ${tour.price.toLocaleString()}
                          <span className="font-sans text-sm text-muted-foreground font-normal"> /persona</span>
                        </p>
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            className="bg-mountain hover:bg-mountain/90 text-white gap-2"
                            onClick={() => setSelectedTour(tour)}
                          >
                            Reservar
                            <ChevronRight className="w-4 h-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="font-serif text-2xl">Reservar Tour</DialogTitle>
                          </DialogHeader>
                          {selectedTour && (
                            <TourBookingForm tour={selectedTour} onClose={() => setSelectedTour(null)} />
                          )}
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Tours CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-mountain rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <Users className="w-12 h-12 mx-auto mb-4 text-gold" />
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">
              ¿Vienes en Grupo?
            </h3>
            <p className="font-sans text-white/80 max-w-xl mx-auto mb-6">
              Organizamos tours privados para grupos con descuentos especiales. 
              Ideal para empresas, familias numerosas o grupos de amigos.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-mountain">
                <Phone className="w-4 h-4 mr-2" />
                +54 261 500 7373
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-mountain">
                <Mail className="w-4 h-4 mr-2" />
                temporarios@grupo-nexus.com.ar
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tours;
