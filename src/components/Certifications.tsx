import { Shield, Award, FileCheck, Download } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const certifications = [
  {
    icon: Shield,
    title: 'OSHA Certified',
    description: 'Occupational Safety and Health Administration compliance',
    badge: 'Safety First'
  },
  {
    icon: Award,
    title: 'ISO 9001:2015',
    description: 'Quality Management System certification',
    badge: 'Quality Assured'
  },
  {
    icon: FileCheck,
    title: 'LEED Accredited',
    description: 'Leadership in Energy and Environmental Design',
    badge: 'Green Building'
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully licensed general contractor with comprehensive insurance',
    badge: 'Protected'
  }
];

export function Certifications() {
  const ref = useScrollAnimation();

  return (
    <section className="py-24 bg-slate-800">
      <div className="container mx-auto px-6">
        <div ref={ref} className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full">
            <span className="text-orange-500 font-semibold text-sm">Trust & Safety</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications & Safety
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Industry-leading standards and safety protocols
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-slate-900 rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-orange-500"
            >
              <div className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                {cert.badge}
              </div>

              <div className="inline-block p-4 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                <cert.icon className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                {cert.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {cert.description}
              </p>

              <div className="mt-4 h-1 w-12 mx-auto bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Safety Documentation</h3>
              <p className="text-gray-300 mb-6">
                Download our complete safety protocols, certifications, and compliance documents.
              </p>
              <div className="flex flex-col gap-3">
                <button className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-left">
                  <Download className="w-5 h-5 text-orange-500" />
                  <div>
                    <div className="font-semibold">Safety Manual</div>
                    <div className="text-xs text-gray-400">PDF - 2.4 MB</div>
                  </div>
                </button>
                <button className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-left">
                  <Download className="w-5 h-5 text-orange-500" />
                  <div>
                    <div className="font-semibold">Certifications Package</div>
                    <div className="text-xs text-gray-400">ZIP - 5.1 MB</div>
                  </div>
                </button>
                <button className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-left">
                  <Download className="w-5 h-5 text-orange-500" />
                  <div>
                    <div className="font-semibold">Insurance Documents</div>
                    <div className="text-xs text-gray-400">PDF - 1.8 MB</div>
                  </div>
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Zero Accident Policy</h4>
                  <p className="text-sm text-gray-300">Committed to maintaining the highest safety standards on every project site.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-6 h-6 text-slate-900" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Regular Inspections</h4>
                  <p className="text-sm text-gray-300">Daily safety checks and third-party audits ensure compliance at all times.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Trained Professionals</h4>
                  <p className="text-sm text-gray-300">All team members receive ongoing safety training and certification updates.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
