import { useState } from 'react';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';

interface CarouselProps {
  slides: string[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr(curr === 0 ? slides.length - 1 : curr - 1);
  const next = () => setCurr(curr === slides.length - 1 ? 0 : curr + 1);

  if (!slides || slides.length === 0) {
    return (
      <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-md">
        <span className="text-gray-400 text-sm">Sin imágenes disponibles</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg group shadow-md">
      <div
        className="flex h-full transition-transform ease-out duration-500"
        style={{
          transform: `translateX(-${curr * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full">
            <img
              src={slide}
              alt={`Property slide ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      
      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={prev}
              className="p-2 rounded-full shadow bg-black/60 hover:bg-black/80 text-white transition-all hover:scale-105"
              aria-label="Imagen anterior"
            >
              <CgChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full shadow bg-black/60 hover:bg-black/80 text-white transition-all hover:scale-105"
              aria-label="Siguiente imagen"
            >
              <CgChevronRight size={20} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 right-0 left-0">
            <div className="flex items-center justify-center gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurr(i)}
                  className={`transition-all w-2 h-2 rounded-full ${
                    curr === i ? 'bg-white p-1' : 'bg-white/50'
                  }`}
                  aria-label={`Ir a imagen ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
