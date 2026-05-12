import { motion } from 'motion/react';
import { ShieldCheck, Stethoscope, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
    title: 'Expert Dental Care',
    description: 'Over 10 years of experience providing top-tier dental treatments in Prayagraj.',
  },
  {
    icon: <Sparkles className="w-8 h-8 text-emerald-500" />,
    title: 'Modern Equipment',
    description: 'We use the latest technology for painless and precise dental procedures.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-indigo-500" />,
    title: 'Strict Hygiene',
    description: '100% sterilization and safety protocols followed for every patient.',
  },
];

export default function Highlights() {
  return (
    <section className="py-16 bg-white relative z-20 -mt-10 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
