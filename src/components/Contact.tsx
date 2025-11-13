import { useState } from "react";
import { Mail, Phone, MapPin, Send, Upload, Calendar } from "lucide-react";
import { supabase } from "../lib/supabase";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export function Contact() {
  const ref = useScrollAnimation();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    project_type: "",
    budget_range: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from("contact_submissions")
        .insert([formData]);

      if (error) throw error;

      setSubmitted(true);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        project_type: "",
        budget_range: "",
        message: "",
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div ref={ref} className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full">
            <span className="text-orange-500 font-semibold text-sm">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Request A Quote
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let's discuss your project and bring your vision to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <div className="bg-gradient-to-br from-orange-500 to-yellow-400 rounded-3xl p-12 text-white h-full">
              <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
              <p className="mb-8 text-white/90">
                Reach out to us through any of these channels. We're here to
                help you build your dreams.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-white/90">+1 (997) 25-62629</p>
                    <p className="text-white/90">Mon-Fri 8am-6pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-white/90">demo@prayosha.com</p>
                    <p className="text-white/90">quotes@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Office</h4>
                    <p className="text-white/90">968 Construction Ave</p>
                    <p className="text-white/90">New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Schedule Site Visit</h4>
                    <a
                      href="#"
                      className="text-white/90 underline hover:text-white"
                    >
                      Book a consultation
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-sm text-white/80 mb-4">
                  Follow us on social media
                </p>
                <div className="flex gap-4">
                  {[
                    { icon: <FaFacebookF /> },
                    { icon: <FaInstagram /> },
                    { icon: <FaLinkedinIn /> },
                    { icon: <FaTwitter /> },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={"#"}
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-all text-white text-lg hover:scale-110"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-slate-800 rounded-3xl p-8 shadow-lg"
            >
              {submitted && (
                <div className="mb-6 p-4 bg-green-900/30 border border-green-500 rounded-lg text-green-400">
                  Thank you! We'll get back to you soon.
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Project Type *
                  </label>
                  <select
                    name="project_type"
                    value={formData.project_type}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                  >
                    <option value="">Select type</option>
                    <option value="commercial">Commercial</option>
                    <option value="residential">Residential</option>
                    <option value="renovation">Renovation</option>
                    <option value="design">Design & Planning</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget_range"
                    value={formData.budget_range}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                  >
                    <option value="">Select range</option>
                    <option value="under-100k">Under $100k</option>
                    <option value="100k-500k">$100k - $500k</option>
                    <option value="500k-1m">$500k - $1M</option>
                    <option value="over-1m">Over $1M</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-white mb-2">
                  Project Details
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <div className="mb-6">
                <label className="flex items-center gap-3 px-4 py-3 bg-slate-900 border-2 border-dashed border-slate-700 rounded-lg cursor-pointer hover:border-orange-500 transition-colors">
                  <Upload className="w-5 h-5 text-orange-500" />
                  <span className="text-sm text-slate-400">
                    Upload project files (optional)
                  </span>
                  <input type="file" className="hidden" />
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-lg hover:from-orange-600 hover:to-orange-500 transition-all duration-300 font-semibold flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="mt-4 text-xs text-gray-400 text-center">
                By submitting this form, you agree to our privacy policy and
                terms of service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
