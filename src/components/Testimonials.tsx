import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Verma',
    role: 'Patient',
    content: 'Best dental clinic in Prayagraj! Dr. Sharma is very polite and explained the entire root canal process. It was completely painless. Highly recommended.',
    rating: 5,
  },
  {
    name: 'Sneha Gupta',
    role: 'Patient',
    content: 'Got my teeth whitening done here. The results are amazing and the clinic is extremely clean and hygienic. The staff is very cooperative.',
    rating: 5,
  },
  {
    name: 'Amit Singh',
    role: 'Patient',
    content: 'Affordable and professional. I visited for a routine checkup and scaling. Very satisfied with the service and the modern equipment they use.',
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-100/50 blur-3xl"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-emerald-100/50 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            What Our Patients Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-4xl font-bold text-slate-900">4.2</span>
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} fill="currentColor" size={24} />
              ))}
              <Star fill="currentColor" size={24} className="opacity-50" />
            </div>
          </div>
          <p className="text-slate-600 font-medium">Based on 6 Google Reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/40 border border-slate-100 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-100 -z-0" />
              <div className="flex text-yellow-400 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={18} />
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed mb-8 relative z-10 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
