import { motion } from 'motion/react';
import { Sparkles, Activity, ShieldPlus, Smile, Zap } from 'lucide-react';

const services = [
  {
    icon: <Sparkles className="w-10 h-10 text-blue-500" />,
    title: 'Teeth Cleaning',
    description: 'Professional scaling and polishing to remove plaque and tartar for a brighter smile.',
  },
  {
    icon: <Activity className="w-10 h-10 text-emerald-500" />,
    title: 'Root Canal Treatment',
    description: 'Painless RCT using advanced rotary endodontics to save your natural teeth.',
  },
  {
    icon: <ShieldPlus className="w-10 h-10 text-indigo-500" />,
    title: 'Braces & Aligners',
    description: 'Straighten your teeth with traditional braces or invisible clear aligners.',
  },
  {
    icon: <Zap className="w-10 h-10 text-yellow-500" />,
    title: 'Teeth Whitening',
    description: 'Instant laser teeth whitening for a dazzling, confident smile in just one visit.',
  },
  {
    icon: <Smile className="w-10 h-10 text-rose-500" />,
    title: 'Dental Implants',
    description: 'Permanent replacement for missing teeth that look and feel completely natural.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Our Services</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Comprehensive Dental Care
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            From routine checkups to advanced surgical procedures, we offer a complete range of dental treatments under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 group"
            >
              <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
              <a href="#appointment" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2 group-hover:gap-3 transition-all">
                Book Now <span aria-hidden="true">&rarr;</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
