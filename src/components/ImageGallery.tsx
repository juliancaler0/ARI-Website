import React, { useState, useMemo, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Expand } from 'lucide-react';

interface GalleryImage {
  id: string;
  url: string;
  alt: string;
}

interface ImageGalleryProps {
  className?: string;
}

// Automatically import all images from the projects folder
// Just drop your images in src/assets/projects/ and restart the dev server
const importAll = (r: __WebpackModuleApi.RequireContext): GalleryImage[] => {
  return r.keys().map((key) => ({
    id: key,
    url: r(key) as string,
    alt: key.replace('./', '').replace(/\.[^/.]+$/, '').replace(/-/g, ' ')
  }));
};

// Export function to get all project images (for use in other components)
export const getProjectImages = (): GalleryImage[] => {
  try {
    const context = require.context('../assets/projects', false, /\.(png|jpe?g|svg|webp|gif)$/i);
    const allImages = importAll(context);

    // Sort so "Starting Image" comes first
    return allImages.sort((a, b) => {
      if (a.id.toLowerCase().includes('starting')) return -1;
      if (b.id.toLowerCase().includes('starting')) return 1;
      return 0;
    });
  } catch (e) {
    return [];
  }
};

// Fullscreen Lightbox Component
interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, currentIndex, onClose, onNavigate }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % images.length);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, images.length, onClose, onNavigate]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-10"
        aria-label="Close lightbox"
      >
        <X size={28} />
      </button>

      {/* Navigation - Previous */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((currentIndex - 1 + images.length) % images.length);
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-10"
          aria-label="Previous image"
        >
          <ChevronLeft size={32} />
        </button>
      )}

      {/* Main Image */}
      <div
        className="max-w-[90vw] max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].alt}
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
        />
      </div>

      {/* Navigation - Next */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((currentIndex + 1) % images.length);
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-10"
          aria-label="Next image"
        >
          <ChevronRight size={32} />
        </button>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ className }) => {
  const images = useMemo(() => getProjectImages(), []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getPrevIndex = () => (currentIndex - 1 + images.length) % images.length;
  const getNextIndex = () => (currentIndex + 1) % images.length;

  const openLightbox = () => setIsLightboxOpen(true);
  const closeLightbox = () => setIsLightboxOpen(false);

  if (images.length === 0) {
    return (
      <div className={`space-y-4 ${className}`}>
        <div className="relative h-96 rounded-lg overflow-hidden shadow-lg bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500">No project images yet. Add images to src/assets/projects/</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={`space-y-4 ${className}`}>
        {/* Main Gallery Layout with Side Images */}
        <div className="flex items-center space-x-4">
          {/* Previous Image */}
          {images.length > 1 && (
            <div className="flex-shrink-0 w-24 h-32 opacity-70 hover:opacity-100 transition-opacity cursor-pointer" onClick={prevImage}>
              <img
                src={images[getPrevIndex()].url}
                alt={images[getPrevIndex()].alt}
                className="w-full h-full object-contain rounded-lg shadow-md"
              />
            </div>
          )}

          {/* Main Image Display */}
          <div className="relative flex-1 max-w-2xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg bg-gray-200 group">
              {images.length > 0 && (
                <>
                  <img
                    src={images[currentIndex].url}
                    alt={images[currentIndex].alt}
                    className="w-full h-full object-contain transition-opacity duration-300 cursor-pointer"
                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                    onClick={openLightbox}
                  />
                  {/* Fullscreen hint */}
                  <div
                    className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors cursor-pointer flex items-center justify-center"
                    onClick={openLightbox}
                  >
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 text-white px-3 py-2 rounded-lg flex items-center gap-2">
                      <Expand size={18} />
                      <span className="text-sm">Click to expand</span>
                    </div>
                  </div>
                </>
              )}

              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              {/* Image Counter */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-10">
                  {currentIndex + 1} / {images.length}
                </div>
              )}
            </div>
          </div>

          {/* Next Image */}
          {images.length > 1 && (
            <div className="flex-shrink-0 w-24 h-32 opacity-70 hover:opacity-100 transition-opacity cursor-pointer" onClick={nextImage}>
              <img
                src={images[getNextIndex()].url}
                alt={images[getNextIndex()].alt}
                className="w-full h-full object-contain rounded-lg shadow-md"
              />
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <Lightbox
          images={images}
          currentIndex={currentIndex}
          onClose={closeLightbox}
          onNavigate={setCurrentIndex}
        />
      )}
    </>
  );
};

export default ImageGallery;
