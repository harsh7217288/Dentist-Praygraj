import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const values = [
    'Patient-First Approach',
    'Affordable Treatments',
    'Painless Procedures',
    'Experienced Specialists',
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
                alt="Dr. at   Elite Dental Clinic"
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-1">Dr. Nishant </h3>
                <p className="text-slate-200 font-medium">BDS, MDS - Chief Dentist</p>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-blue-100 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-emerald-100 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              We Create Beautiful Smiles in Prayagraj
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              At Elite Dental Clinic, we believe that a healthy smile is the foundation of overall well-being. Located in the heart of Teliarganj, Prayagraj, our clinic is equipped with state-of-the-art technology to provide you with the best dental care possible.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{value}</span>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-2">Our Mission</h4>
              <p className="text-slate-600">
                To provide high-quality, ethical, and affordable dental treatments in a comfortable and hygienic environment.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
