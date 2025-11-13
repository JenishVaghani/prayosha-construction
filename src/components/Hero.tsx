import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { ConstructionScene } from "./3d/ConstructionScene";
import { ArrowRight, Play } from "lucide-react";
import { Suspense } from "react";

export function Hero() {
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
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
      </div>

      <div className="relative w-full h-full min-h-screen">
        {/* Canvas - Right side background */}
        <div
          className="absolute inset-0 md:inset-0 md:left-auto md:right-0 md:w-1/2 lg:w-3/5 xl:w-2/3 2xl:w-3/4 opacity-80 pointer-events-auto z-20"
          style={{ height: "100%" }}
        >
          <Canvas style={{ width: "100%", height: "100%" }}>
            <Suspense fallback={null}>
              <PerspectiveCamera makeDefault position={[8, 5, 8]} />
              <OrbitControls
                enableZoom={true}
                enablePan={false}
                enableRotate={true}
                autoRotate={false}
                zoomSpeed={0.8}
                minDistance={10}
                maxDistance={15}
                rotateSpeed={0.5}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 4}
              />
              <ConstructionScene />
            </Suspense>
          </Canvas>
        </div>

        {/* Content - Left side, overlapping */}
        <div className="absolute inset-0 z-10 flex items-center pointer-events-none">
          <div className="w-full px-6 md:px-12 lg:px-16">
            <div className="max-w-2xl pointer-events-auto">
              <div className="inline-block mb-4 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full">
                <span className="text-orange-500 font-semibold text-md">
                  Building Excellence Since 2010
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl 2xl:text-7xl font-bold text-white mb-6 leading-tight text-left">
                Building Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">
                  Future Today
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed text-left">
                Premium construction and architectural solutions that transform
                visions into reality. From concept to completion, we deliver
                excellence in every project.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-start">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="group px-8 py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-300 font-semibold flex items-center justify-center gap-2 shadow-lg shadow-orange-500/50"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold flex items-center justify-center gap-2 border border-white/20"
                >
                  <Play className="w-5 h-5" />
                  View Projects
                </button>
              </div>

              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">250+</div>
                  <div className="text-sm text-gray-400">Projects Complete</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">15+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">98%</div>
                  <div className="text-sm text-gray-400">
                    Client Satisfaction
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">12</div>
                  <div className="text-sm text-gray-400">Industry Awards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-white/50 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}