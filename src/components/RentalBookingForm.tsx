import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Home, Send, CheckCircle } from 'lucide-react';
import { format, differenceInDays } from 'date-fns';
import { es } from 'date-fns/locale';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';

const properties = [
  { id: 'domo-andes', name: 'Domo Andes - Vista Montaña', price: 85000 },
  { id: 'domo-viñedos', name: 'Domo Viñedos - Entre Viñas', price: 78000 },
  { id: 'depto-ciudad', name: 'Departamento Centro - Ciudad', price: 65000 },
];

const RentalBookingForm = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState('2');
  const [property, setProperty] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const nights = checkIn && checkOut ? differenceInDays(checkOut, checkIn) : 0;
  const selectedProperty = properties.find(p => p.id === property);
  const estimatedTotal = selectedProperty && nights > 0 ? selectedProperty.price * nights : 0;

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <CheckCircle className="w-20 h-20 text-gold mx-auto mb-6" />
        <h3 className="font-serif text-3xl font-bold mb-4">¡Consulta Enviada!</h3>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Hemos recibido tu solicitud de reserva. Te contactaremos dentro de las próximas 24 horas 
          para confirmar disponibilidad y detalles del pago.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="outline">
          Hacer Otra Consulta
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="font-sans text-sm font-medium mb-2 block">
            Nombre Completo
          </label>
          <Input placeholder="Tu nombre" required />
        </div>
        <div>
          <label className="font-sans text-sm font-medium mb-2 block">
            Email
          </label>
          <Input type="email" placeholder="tu@email.com" required />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="font-sans text-sm font-medium mb-2 block">
            Teléfono
          </label>
          <Input placeholder="+54 9 261..." required />
        </div>
        <div>
          <label className="font-sans text-sm font-medium mb-2 block">
            <Users className="inline w-4 h-4 mr-1" />
            Huéspedes
          </label>
          <Select value={guests} onValueChange={setGuests}>
            <SelectTrigger>
              <SelectValue placeholder="Cantidad" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num} {num === 1 ? 'huésped' : 'huéspedes'}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <label className="font-sans text-sm font-medium mb-2 block">
          <Home className="inline w-4 h-4 mr-1" />
          Propiedad de Interés
        </label>
        <Select value={property} onValueChange={setProperty}>
          <SelectTrigger>
            <SelectValue placeholder="Seleccionar propiedad" />
          </SelectTrigger>
          <SelectContent>
            {properties.map((prop) => (
              <SelectItem key={prop.id} value={prop.id}>
                {prop.name} - ${prop.price.toLocaleString()}/noche
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="font-sans text-sm font-medium mb-2 block">
            <Calendar className="inline w-4 h-4 mr-1" />
            Check-in
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !checkIn && "text-muted-foreground"
                )}
              >
                {checkIn ? format(checkIn, "PPP", { locale: es }) : "Fecha de llegada"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <CalendarComponent
                mode="single"
                selected={checkIn}
                onSelect={setCheckIn}
                disabled={(date) => date < new Date()}
                initialFocus
                className="pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>
        <div>
          <label className="font-sans text-sm font-medium mb-2 block">
            <Calendar className="inline w-4 h-4 mr-1" />
            Check-out
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !checkOut && "text-muted-foreground"
                )}
              >
                {checkOut ? format(checkOut, "PPP", { locale: es }) : "Fecha de salida"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <CalendarComponent
                mode="single"
                selected={checkOut}
                onSelect={setCheckOut}
                disabled={(date) => date < (checkIn || new Date())}
                initialFocus
                className="pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {nights > 0 && selectedProperty && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="bg-sand rounded-lg p-4"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-muted-foreground">
              ${selectedProperty.price.toLocaleString()} × {nights} {nights === 1 ? 'noche' : 'noches'}
            </span>
            <span className="font-medium">${estimatedTotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-border">
            <span className="font-semibold">Total Estimado</span>
            <span className="font-serif text-2xl font-bold text-gold">
              ${estimatedTotal.toLocaleString()} ARS
            </span>
          </div>
        </motion.div>
      )}

      <div>
        <label className="font-sans text-sm font-medium mb-2 block">
          Comentarios Adicionales
        </label>
        <Textarea
          placeholder="¿Alguna preferencia o necesidad especial? ¿Viajas con mascotas?"
          rows={3}
        />
      </div>

      <Button type="submit" variant="gold" size="lg" className="w-full">
        <Send className="w-4 h-4 mr-2" />
        Solicitar Reserva
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Al enviar, aceptas ser contactado para confirmar la disponibilidad y coordinar el pago.
      </p>
    </form>
  );
};

export default RentalBookingForm;
