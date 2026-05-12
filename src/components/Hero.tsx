import { motion } from 'motion/react';
import { Calendar, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000"
          alt="Modern Dental Clinic"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/70 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-200 text-sm font-semibold tracking-wider uppercase mb-4 border border-blue-400/30">
              Elite Dental Clinic
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
              Your Smile, <br />
              <span className="text-blue-400">Our Priority</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-6 leading-relaxed max-w-xl">
              Experience premium dental care in Prayagraj. We combine advanced technology with compassionate care to give you the perfect smile.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#appointment" className="inline-flex justify-center items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 hover:-translate-y-1">
                <Calendar size={20} />
                Book Appointment
              </a>
              <a href="tel:+91 7619999974" className="inline-flex justify-center items-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all hover:-translate-y-1">
                <Phone size={20} />
                Call Now
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div>
                <p className="text-3xl font-bold text-white mb-1 flex items-center">
                  4.9<span className="text-yellow-400 text-xl ml-1">★</span>
                </p>
                <p className="text-sm text-slate-400">Google Rating</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-1">22+</p>
                <p className="text-sm text-slate-400">Happy Patients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-1">10+</p>
                <p className="text-sm text-slate-400">Years Exp.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}