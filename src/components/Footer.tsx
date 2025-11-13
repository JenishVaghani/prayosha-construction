import { useEffect, useState } from "react";
import { Building2, Mail, ArrowUp } from "lucide-react";
import { supabase } from "../lib/supabase";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 10, behavior: "smooth" });
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from("newsletter_subscribers")
        .insert([{ email }]);

      if (error) throw error;

      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    } catch (error) {
      console.error("Error subscribing:", error);
      alert("Error subscribing. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-8 h-8 text-orange-500" />
              <span className="text-2xl font-bold">PRAYOSHA</span>
            </div>
            <p className="text-gray-400 mb-6">
              Building excellence since 2010. Your trusted partner for premium
              construction and architectural solutions.
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

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", id: "hero" },
                { label: "Projects", id: "projects" },
                { label: "Services", id: "services" },
                { label: "Gallery", id: "gallery" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                "Commercial Construction",
                "Residential Projects",
                "Renovations",
                "Design & Planning",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4 text-sm">
              Subscribe to get updates on our latest projects and industry
              insights.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-500"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
              {subscribed && (
                <p className="text-green-400 text-sm">
                  Successfully subscribed!
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 PRAYOSHA Construction. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {showBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg transition-all duration-300 z-40 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      {/* only single image in site store */}
      {/* <div className="sticky bottom-8 flex justify-end pr-8">
        {showBtn && (
          <button
            onClick={scrollToTop}
            className="p-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        )}
      </div> */}
    </footer>
  );
}
