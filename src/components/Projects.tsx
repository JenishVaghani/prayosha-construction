import { useEffect, useState } from "react";
import { MapPin, Square, Clock, X } from "lucide-react";
import { supabase } from "../lib/supabase";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface Project {
  id: string;
  title: string;
  description: string;
  location: string;
  sqft: number;
  duration: string;
  category: string;
  image_url: string;
  model_url?: string;
  featured: boolean;
}

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useScrollAnimation();

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [selectedProject]);

  const fetchProjects = async () => {
    const { data } = await supabase.from("projects").select("*").limit(12);

    if (data) setProjects(data);
  };

  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div ref={ref} className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full">
            <span className="text-orange-500 font-semibold text-sm">
              Our Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our showcase of exceptional construction projects that
            define excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
              onClick={() => setSelectedProject(project)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={
                    project.image_url ||
                    "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
                  }
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Square className="w-4 h-4 text-orange-500" />
                      {project.sqft.toLocaleString()} sqft
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="w-4 h-4 text-orange-500" />
                      {project.duration}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No projects available yet.
            </p>
          </div>
        )}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative bg-white dark:bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-slate-900/50 hover:bg-slate-900/70 text-white rounded-full transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={
                selectedProject.image_url ||
                "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200"
              }
              alt={selectedProject.title}
              className="w-full h-96 object-cover"
            />

            <div className="p-8">
              <div className="mb-4">
                <span className="px-3 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full">
                  {selectedProject.category}
                </span>
              </div>

              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-slate-100 dark:bg-slate-700 rounded-lg">
                  <div className="flex items-center gap-2 text-orange-500 mb-1">
                    <MapPin className="w-5 h-5" />
                    <span className="font-semibold">Location</span>
                  </div>
                  <p className="text-slate-900 dark:text-white">
                    {selectedProject.location}
                  </p>
                </div>

                <div className="p-4 bg-slate-100 dark:bg-slate-700 rounded-lg">
                  <div className="flex items-center gap-2 text-orange-500 mb-1">
                    <Square className="w-5 h-5" />
                    <span className="font-semibold">Size</span>
                  </div>
                  <p className="text-slate-900 dark:text-white">
                    {selectedProject.sqft.toLocaleString()} sqft
                  </p>
                </div>

                <div className="p-4 bg-slate-100 dark:bg-slate-700 rounded-lg">
                  <div className="flex items-center gap-2 text-orange-500 mb-1">
                    <Clock className="w-5 h-5" />
                    <span className="font-semibold">Duration</span>
                  </div>
                  <p className="text-slate-900 dark:text-white">
                    {selectedProject.duration}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
