import React, { useState, useEffect } from 'react';

type CarouselProps = {
  images: string[];
  autoplay?: boolean;
  interval?: number;
};

export const Carousel: React.FC<CarouselProps> = ({ images, autoplay, interval }) => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const dots = (index: number) => setIndex(index);

  useEffect(() => {
    const timeout = interval || 5000;
    if (autoplay) {
      const timerId = setInterval(() => next(), timeout);
      return () => clearInterval(timerId);
    }
  }, [next, interval, autoplay]);

  return (
    <div className="carousel">
      <img className='carousel-image' src={images[index]} alt={`Image ${index}`} />
      <div className='carousel-buttons'>
        <button className='carousel-prev-button' onClick={prev}>&#8592;</button>
        <button className='carousel-next-button' onClick={next}>&#8594;</button>
      </div>
      <div className='carousel-dots'>
        {images.map((_, index) => (
          <span
            key={index}
            className={`carousel-dot ${index === index ? 'carousel-dot is_active' : ''}`}
            onClick={() => dots(index)}
          />
        ))}
      </div>
    </div>
  );
};
