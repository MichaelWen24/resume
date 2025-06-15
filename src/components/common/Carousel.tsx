import {FC, useEffect, useRef, useState} from 'react';
import Image, {StaticImageData} from 'next/image';
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/outline';

interface CarouselProps {
  images: (string | StaticImageData)[];
  interval?: number;
  altPrefix?: string;
}

const Carousel: FC<CarouselProps> = ({images, interval = 5000, altPrefix = 'carousel-image'}) => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Helper to clear and restart timer
  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent(c => (c + 1) % images.length);
        setFade(true);
      }, 400);
    }, interval);
  };

  useEffect(() => {
    if (images.length <= 1) return;
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [images.length, interval]);

  const goTo = (idx: number) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(idx);
      setFade(true);
    }, 400);
    resetTimer();
  };
  const prev = () => goTo((current - 1 + images.length) % images.length);
  const next = () => goTo((current + 1) % images.length);

  return (
    <div className="relative h-full w-full">
      <div className={`absolute z-0 h-full w-full transition-opacity duration-700 ${fade ? 'opacity-100' : 'opacity-0'}`}>
        <Image
          alt={`${altPrefix}-${current}`}
          className="h-full w-full object-cover"
          placeholder="blur"
          priority
          src={images[current]}
        />
      </div>
      {images.length > 1 && (
        <>
          <button
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-gray-900/40 p-2 text-white hover:bg-gray-900/70 focus:outline-none"
            onClick={prev}
            aria-label="Previous"
          >
            <ChevronLeftIcon className="h-8 w-8" />
          </button>
          <button
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-gray-900/40 p-2 text-white hover:bg-gray-900/70 focus:outline-none"
            onClick={next}
            aria-label="Next"
          >
            <ChevronRightIcon className="h-8 w-8" />
          </button>
          <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`h-3 w-3 rounded-full border-2 ${current === idx ? 'bg-white border-orange-500 scale-110' : 'bg-gray-400 border-white opacity-60'} transition-all`}
                onClick={() => goTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel; 