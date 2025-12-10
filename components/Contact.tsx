import React, { useState } from 'react';
import { Phone, MapPin, Send, Loader2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    revenue: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/mpwvywdw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Thank you for your interest. Our team will contact you shortly.");
        setFormData({
          name: '',
          company: '',
          email: '',
          revenue: '',
          message: ''
        });
      } else {
        alert("Oops! There was a problem submitting your form. Please try again or call us directly.");
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 translate-x-32 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">
              Ready to Scale Again?
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              Stop guessing why growth has stalled. Let's have a candid conversation about your challenges. We only work with companies we know we can help.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Call Us</p>
                  <p className="font-medium text-slate-900">+61 4 2426 4928</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Headquarters</p>
                  <p className="font-medium text-slate-900">Sydney, Australia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-2xl border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Request a Consultation</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Work Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="revenue" className="block text-sm font-medium text-slate-700 mb-1">Annual Revenue</label>
                <select
                  id="revenue"
                  name="revenue"
                  className="w-full px-4 py-2 border border-slate-300 rounded-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all bg-white"
                  value={formData.revenue}
                  onChange={handleChange}
                >
                  <option value="">Select Range</option>
                  <option value="<10M">$1M - $10M</option>
                  <option value="10M-50M">$10M - $50M</option>
                  <option value="50M-100M">$50M - $100M</option>
                  <option value="100M+">$100M+</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Primary Challenge</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-300 rounded-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
                  placeholder="What is currently holding you back?"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-goldHover text-white font-bold py-3 px-4 rounded-sm transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>Sending... <Loader2 className="animate-spin" size={18} /></>
                ) : (
                  <>Get in Touch <Send size={18} /></>
                )}
              </button>
              <p className="text-xs text-center text-slate-400 mt-2">
                We respect your privacy. Non-disclosure agreements available upon request.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
