import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react';
import { getProjectImages } from './ImageGallery.tsx';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({ isOpen, onClose }) => {
  const images = getProjectImages();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [view, setView] = useState<'grid' | 'single'>('grid');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setSelectedIndex(null);
      setView('grid');
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        if (view === 'single') {
          setView('grid');
          setSelectedIndex(null);
        } else {
          onClose();
        }
      }

      if (view === 'single' && selectedIndex !== null) {
        if (e.key === 'ArrowLeft') {
          setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
        }
        if (e.key === 'ArrowRight') {
          setSelectedIndex((selectedIndex + 1) % images.length);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, view, selectedIndex, images.length, onClose]);

  if (!isOpen) return null;

  const openSingleView = (index: number) => {
    setSelectedIndex(index);
    setView('single');
  };

  const backToGrid = () => {
    setView('grid');
    setSelectedIndex(null);
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-900/95 backdrop-blur-md overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/80 to-transparent">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {view === 'single' && (
              <button
                onClick={backToGrid}
                className="text-white/70 hover:text-white flex items-center gap-2 transition-colors"
              >
                <LayoutGrid size={20} />
                <span className="text-sm font-medium">Back to Gallery</span>
              </button>
            )}
            {view === 'grid' && (
              <h2 className="text-2xl font-bold text-white">Our Work</h2>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close gallery"
          >
            <X size={28} />
          </button>
        </div>
      </div>

      {/* Grid View */}
      {view === 'grid' && (
        <div className="h-full overflow-y-auto pt-20 pb-8">
          <div className="container mx-auto px-4">
            <p className="text-white/90 mb-8 text-center text-lg">
              Explore our portfolio of rebar installation projects across California
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {images.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative aspect-square bg-gray-800 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                  onClick={() => openSingleView(index)}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-medium capitalize truncate">
                      {image.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Single Image View */}
      {view === 'single' && selectedIndex !== null && (
        <div className="h-full flex items-center justify-center pt-16">
          {/* Navigation - Previous */}
          <button
            onClick={() => setSelectedIndex((selectedIndex - 1 + images.length) % images.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Main Image */}
          <div className="max-w-[85vw] max-h-[85vh] flex flex-col items-center">
            <img
              src={images[selectedIndex].url}
              alt={images[selectedIndex].alt}
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
            />
            <p className="mt-4 text-white text-lg font-medium capitalize">
              {images[selectedIndex].alt}
            </p>
          </div>

          {/* Navigation - Next */}
          <button
            onClick={() => setSelectedIndex((selectedIndex + 1) % images.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/70 px-4 py-3 rounded-full max-w-[90vw] overflow-x-auto">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setSelectedIndex(index)}
                className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden transition-all duration-200 ${
                  index === selectedIndex
                    ? 'ring-2 ring-white scale-110'
                    : 'opacity-50 hover:opacity-100'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryModal;
