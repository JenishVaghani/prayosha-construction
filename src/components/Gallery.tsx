import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { supabase } from "../lib/supabase";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface GalleryImage {
  id: string;
  title: string;
  before_url: string;
  after_url: string;
  category: string;
}

export function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const ref = useScrollAnimation();

  useEffect(() => {
    fetchGalleryImages();
  }, []);

  const fetchGalleryImages = async () => {
    const { data } = await supabase
      .from("gallery_images")
      .select("*")
      .order("order_index", { ascending: true });

    if (data) setImages(data);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setSliderPosition(50);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setSliderPosition(50);
  };

  const currentImage = images[currentIndex];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <section id="gallery" className="py-24 bg-slate-800">
      <div className="container mx-auto px-6">
        <div ref={ref} className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full">
            <span className="text-orange-500 font-semibold text-sm">
              Transformations
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Before & After Gallery
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See the remarkable transformations we've achieved
          </p>
        </div>

        {currentImage ? (
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-900 mb-8">
              <div
                className="relative h-full cursor-ew-resize select-none"
                onMouseMove={handleMouseMove}
                onTouchMove={(e) => {
                  const touch = e.touches[0];
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = touch.clientX - rect.left;
                  const percentage = (x / rect.width) * 100;
                  setSliderPosition(Math.max(0, Math.min(100, percentage)));
                }}
              >
                <img
                  src={
                    currentImage.after_url ||
                    "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  }
                  alt={`${currentImage.title} - After`}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <img
                    src={
                      currentImage.before_url ||
                      "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    }
                    alt={`${currentImage.title} - Before`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <div className="flex gap-1">
                      <ChevronLeft className="w-4 h-4 text-slate-900" />
                      <ChevronRight className="w-4 h-4 text-slate-900" />
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 left-4 px-4 py-2 bg-slate-900/80 backdrop-blur-sm text-white rounded-lg text-sm font-semibold">
                  Before
                </div>
                <div className="absolute top-4 right-4 px-4 py-2 bg-orange-500/90 backdrop-blur-sm text-white rounded-lg text-sm font-semibold">
                  After
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mb-8">
              <button
                onClick={handlePrevious}
                className="p-3 bg-slate-700 hover:bg-orange-500 hover:text-white rounded-full transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {currentImage.title}
                </h3>
                <p className="text-orange-500 font-semibold">
                  {currentImage.category}
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  {currentIndex + 1} / {images.length}
                </p>
              </div>

              <button
                onClick={handleNext}
                className="p-3 bg-slate-700 hover:bg-orange-500 hover:text-white rounded-full transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
              {images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => {
                    setCurrentIndex(index);
                    setSliderPosition(50);
                  }}
                  className={`aspect-square rounded-lg overflow-hidden transition-all ${
                    index === currentIndex
                      ? "ring-4 ring-orange-500 scale-105"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={
                      image.after_url ||
                      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=200"
                    }
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400">No gallery images available yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
