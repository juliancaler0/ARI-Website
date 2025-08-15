import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  id: string;
  url: string;
  alt: string;
}

interface ImageGalleryProps {
  className?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ className }) => {
  const [images, setImages] = useState<GalleryImage[]>([
    {
      id: '1',
      url: '/images/Unknown-1.png',
      alt: 'Construction project showcase'
    },
    {
      id: '2',
      url: '/images/Unknown-2.png',
      alt: 'Rebar installation project'
    },
    {
      id: '3',
      url: '/images/Unknown-3.png',
      alt: 'Steel framework construction'
    }
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getPrevIndex = () => (currentIndex - 1 + images.length) % images.length;
  const getNextIndex = () => (currentIndex + 1) % images.length;

  return (
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
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg bg-gray-200">
            {images.length > 0 && (
              <img
                src={images[currentIndex].url}
                alt={images[currentIndex].alt}
                className="w-full h-full object-contain transition-opacity duration-300"
                style={{ objectFit: 'contain', width: '100%', height: '100%' }}
              />
            )}
            
            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Image Counter */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
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
  );
};

export default ImageGallery;