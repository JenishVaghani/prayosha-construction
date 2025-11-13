import { useEffect, useState } from 'react';
import { Star, Quote, Play, X } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Testimonial {
  id: string;
  client_name: string;
  company: string;
  quote: string;
  avatar_url?: string;
  video_url?: string;
  rating: number;
}

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const ref = useScrollAnimation();

  useEffect(() => {
    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials]);

  const fetchTestimonials = async () => {
    const { data } = await supabase
      .from('testimonials')
      .select('*')
      .order('order_index', { ascending: true });

    if (data) setTestimonials(data);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div ref={ref} className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full">
            <span className="text-orange-500 font-semibold text-sm">Client Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real feedback from real clients who trusted us with their projects
          </p>
        </div>

        {currentTestimonial ? (
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-slate-800 rounded-3xl p-12 shadow-2xl">
              <Quote className="absolute top-8 left-8 w-16 h-16 text-orange-500/20" />

              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < currentTestimonial.rating
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>

                <p className="text-2xl text-white mb-8 leading-relaxed text-center italic">
                  "{currentTestimonial.quote}"
                </p>

                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-yellow-400 p-1 mb-4">
                    <div className="w-full h-full rounded-full bg-slate-700 overflow-hidden">
                      {currentTestimonial.avatar_url ? (
                        <img
                          src={currentTestimonial.avatar_url}
                          alt={currentTestimonial.client_name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-slate-400">
                          {currentTestimonial.client_name.charAt(0)}
                        </div>
                      )}
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-white">
                    {currentTestimonial.client_name}
                  </h4>
                  <p className="text-orange-500 font-semibold">{currentTestimonial.company}</p>

                  {currentTestimonial.video_url && (
                    <button
                      onClick={() => setVideoUrl(currentTestimonial.video_url || null)}
                      className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors flex items-center gap-2"
                    >
                      <Play className="w-4 h-4" />
                      Watch Video Testimonial
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-12 bg-orange-500'
                      : 'w-2 bg-gray-600 hover:bg-orange-500/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400">No testimonials available yet.</p>
          </div>
        )}
      </div>

      {videoUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl aspect-video">
            <button
              onClick={() => setVideoUrl(null)}
              className="absolute -top-12 right-0 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              src={videoUrl}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
