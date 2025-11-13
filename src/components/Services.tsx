import { Building2, Hammer, PenTool, Building, Wrench, Home } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: Building2,
    title: 'Commercial Construction',
    description: 'Full-scale commercial building projects from office complexes to retail spaces.',
    features: ['Office Buildings', 'Retail Centers', 'Industrial Facilities']
  },
  {
    icon: Home,
    title: 'Residential Projects',
    description: 'Custom homes and residential developments built to the highest standards.',
    features: ['Custom Homes', 'Apartments', 'Housing Communities']
  },
  {
    icon: PenTool,
    title: 'Design & Planning',
    description: 'Comprehensive architectural design and project planning services.',
    features: ['Architecture', '3D Visualization', 'Planning Permits']
  },
  {
    icon: Building,
    title: 'Renovations',
    description: 'Transform existing spaces with expert renovation and remodeling.',
    features: ['Interior Remodeling', 'Facade Updates', 'Space Optimization']
  },
  {
    icon: Hammer,
    title: 'General Contracting',
    description: 'End-to-end project management and contracting services.',
    features: ['Project Management', 'Subcontractor Coordination', 'Quality Control']
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    description: 'Ongoing maintenance and support for completed projects.',
    features: ['Regular Inspections', 'Repairs', 'Upgrades']
  }
];

export function Services() {
  const ref = useScrollAnimation();

  return (
    <section id="services" className="py-24 bg-slate-800">
      <div className="container mx-auto px-6">
        <div ref={ref} className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full">
            <span className="text-orange-500 font-semibold text-sm">What We Do</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-slate-900 rounded-2xl p-8 hover:bg-gradient-to-br hover:from-orange-500 hover:to-yellow-400 transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-6 inline-block p-4 bg-slate-800 rounded-xl group-hover:bg-white/90 transition-colors shadow-lg">
                <service.icon className="w-8 h-8 text-orange-500 group-hover:text-orange-600" />
              </div>

              <h3 className="text-2xl font-bold text-white group-hover:text-white mb-3 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-400 group-hover:text-white/90 mb-4 transition-colors">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-white/80 transition-colors">
                    <div className="w-1.5 h-1.5 bg-orange-500 group-hover:bg-white rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-white text-xl">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
