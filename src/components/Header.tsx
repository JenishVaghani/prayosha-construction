import { useState, useEffect } from "react";
import { Building2, Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", id: "hero" },
    { label: "Projects", id: "projects" },
    { label: "Services", id: "services" },
    { label: "Process", id: "process" },
    { label: "Gallery", id: "gallery" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className=" justify-between mx-8 px-6 py-4">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <Building2 className="w-8 h-8 text-orange-500" />
            <span className="text-2xl font-bold text-white">PRAYOSHA</span>
          </div>

          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-300 hover:text-orange-500 transition-colors duration-300 font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-8">
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden md:block px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300 font-semibold"
            >
              Request Quote
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-slate-700">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left py-3 text-gray-300 hover:text-orange-500 transition-colors duration-300 font-medium"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full mt-4 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300 font-semibold"
            >
              Request Quote
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
