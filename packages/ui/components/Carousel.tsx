import React, { useState, useEffect } from 'react';
import { pre, mpre } from '../prefixConfig';
import { CarouselProps } from '../components/ComponentTypes';

export const Carousel: React.FC<CarouselProps> = ({ className = '', images, autoplay, interval }) => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const dots = (index: number) => setIndex(index);
  const classNames = className ? `${pre}carousel ${className}` : `${pre}carousel`;

  useEffect(() => {
    const timeout = interval || 5000;
    if (autoplay) {
      const timerId = setInterval(() => next(), timeout);
      return () => clearInterval(timerId);
    }
  }, [next, interval, autoplay]);
  return (
    <div className={classNames}>
      <img className={`${pre}carousel-image`} src={images[index]} alt={`Image ${index}`} />
      <div className={`${pre}carousel-buttons`}>
        <button className={`${pre}carousel-prev-button`} onClick={prev}>&#8592;</button>
        <button className={`${pre}carousel-next-button`} onClick={next}>&#8594;</button>
      </div>
      <div className={`${pre}carousel-dots`}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${pre}carousel-dot ${index === index ? `${pre}carousel-dot ${mpre}active` : ''}`}
            onClick={() => dots(index)}
          />
        ))}
      </div>
    </div>
  );
};
