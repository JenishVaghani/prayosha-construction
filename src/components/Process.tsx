import { Lightbulb, PenTool, Hammer, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useRef } from 'react';

const steps = [
  {
    icon: Lightbulb,
    title: 'Concept',
    description: 'Initial consultation and ideation',
    details: 'We meet with you to understand your vision, requirements, and budget. Our team conducts site analysis and feasibility studies.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: PenTool,
    title: 'Design',
    description: 'Detailed planning and visualization',
    details: 'Our architects create detailed blueprints, 3D models, and renderings. We refine designs based on your feedback.',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Hammer,
    title: 'Build',
    description: 'Expert construction execution',
    details: 'Our skilled craftsmen bring the design to life with precision. We maintain strict quality control and regular updates.',
    color: 'from-orange-600 to-red-500'
  },
  {
    icon: CheckCircle,
    title: 'Handover',
    description: 'Final inspection and delivery',
    details: 'Comprehensive final inspection, documentation, and project handover. We provide ongoing support and maintenance.',
    color: 'from-green-500 to-emerald-600'
  }
];

export function Process() {
  const ref = useScrollAnimation();
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="process" className="py-24 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div ref={ref} className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full">
            <span className="text-orange-500 font-semibold text-sm">How We Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From concept to completion, we follow a proven methodology
          </p>
        </div>

        <div ref={scrollRef} className="relative w-full pt-10">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-yellow-400 to-green-500 -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`relative mb-6 w-24 h-24 rounded-full bg-gradient-to-br ${step.color} p-1 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                      <step.icon className="w-10 h-10 text-orange-500" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-slate-900 rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors mt-4">
                    {step.title}
                  </h3>

                  <p className="text-sm font-semibold text-orange-500 mb-3">
                    {step.description}
                  </p>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.details}
                  </p>

                  <div className="mt-4 w-12 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-4 text-4xl text-orange-500 opacity-50">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-yellow-400 rounded-2xl p-8 text-white max-w-3xl">
            <h3 className="text-2xl font-bold mb-3">Average Project Timeline</h3>
            <p className="text-lg mb-4">Most projects are completed within 6-12 months</p>
            <div className="flex justify-center gap-8 text-sm">
              <div>
                <div className="text-3xl font-bold">2-4</div>
                <div className="opacity-90">Weeks Planning</div>
              </div>
              <div>
                <div className="text-3xl font-bold">4-8</div>
                <div className="opacity-90">Months Building</div>
              </div>
              <div>
                <div className="text-3xl font-bold">1-2</div>
                <div className="opacity-90">Weeks Finishing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
