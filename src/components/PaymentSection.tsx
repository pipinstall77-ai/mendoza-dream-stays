import { motion } from 'framer-motion';
import { CreditCard, Banknote, Shield, Percent } from 'lucide-react';

const paymentMethods = [
  {
    name: 'Tarjeta de Crédito',
    description: 'Visa, Mastercard, American Express',
    icon: CreditCard,
    features: ['Hasta 12 cuotas sin interés', 'Pago seguro SSL'],
  },
  {
    name: 'Tarjeta de Débito',
    description: 'Todas las tarjetas de débito',
    icon: CreditCard,
    features: ['Acreditación inmediata', '5% de descuento'],
  },
  {
    name: 'Mercado Pago',
    description: 'QR, billetera y cuotas',
    icon: Banknote,
    features: ['Hasta 12 cuotas', 'Puntos MercadoPago'],
  },
  {
    name: 'Transferencia Bancaria',
    description: 'CBU / Alias disponibles',
    icon: Banknote,
    features: ['10% de descuento', 'Sin comisiones'],
  },
];

const PaymentSection = () => {
  return (
    <section id="pagos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-sans text-sm text-gold font-semibold tracking-wider uppercase mb-4 block">
            Métodos de Pago
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Paga Como Prefieras
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos múltiples opciones de pago seguras y flexibles para tu comodidad. 
            Todas las transacciones están protegidas con encriptación SSL.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-mountain/10 flex items-center justify-center mb-4">
                <method.icon className="w-7 h-7 text-mountain" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-1">
                {method.name}
              </h3>
              <p className="font-sans text-sm text-muted-foreground mb-4">
                {method.description}
              </p>
              <ul className="space-y-2">
                {method.features.map((feature, i) => (
                  <li
                    key={i}
                    className="font-sans text-sm text-foreground flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-border"
        >
          <div className="flex items-center gap-3 text-muted-foreground">
            <Shield className="w-6 h-6 text-mountain" />
            <span className="font-sans text-sm">Pago 100% Seguro</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Percent className="w-6 h-6 text-mountain" />
            <span className="font-sans text-sm">Mejor Precio Garantizado</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <CreditCard className="w-6 h-6 text-mountain" />
            <span className="font-sans text-sm">Cuotas Sin Interés</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PaymentSection;
