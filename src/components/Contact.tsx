import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Get in Touch</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Visit Dr Nishant Dental Clinic          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We are conveniently located in Teliarganj, Prayagraj. Drop by or call us to schedule your visit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Clinic Address</h3>
            <p className="text-slate-600 leading-relaxed">
              Pratap Market, Govindpur,<br />
              Teliarganj, Prayagraj,<br />
              Uttar Pradesh 211004
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
              <Phone className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Contact Details</h3>
            <p className="text-slate-600 leading-relaxed mb-2">
              <a href="tel:+91 8429998602" className="hover:text-emerald-600 transition-colors font-medium">+91 8429998602</a>
            </p>
            <p className="text-slate-600 leading-relaxed">
              <a href="mailto:info@nishantdental.com" className="hover:text-emerald-600 transition-colors font-medium">info@nishantdental.com</a>
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Working Hours</h3>
            <p className="text-slate-600 leading-relaxed">
              Monday - Saturday<br />
              <span className="font-semibold text-slate-800">09:00 AM - 08:00 PM</span><br />
              Sunday: Closed
            </p>
          </div>
        </div>

        {/* Map Embed */}
        <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-lg border border-slate-200">
          <iframe
            title="Elite Dental Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3602.434316661448!2d81.8617533150146!3d25.45688998377636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398534c9b20bd49f%3A0xa2237856ad4041a!2sGovindpur%2C%20Teliarganj%2C%20Prayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1645000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
