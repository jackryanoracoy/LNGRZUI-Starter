import React, { useState, useEffect, useCallback } from 'react';
import { pre, mpre } from '../prefixConfig';
import '../styles/Carousel.scss';

type CarouselProps = {
  className?: string;
  items: React.ReactNode[];
  autoplay?: boolean;
  interval?: number;
};

export const Carousel: React.FC<CarouselProps> = ({ className = '', items, autoplay, interval }) => {
  const classNames = className ? `${pre}carousel ${className}` : `${pre}carousel`;
  const [index, setIndex] = useState<number>(0);
  const next = useCallback(() => setIndex((prevIndex) => (prevIndex + 1) % items.length), [items]);
  const prev = useCallback(() => setIndex((index - 1 + items.length) % items.length), [index, items]);
  const dots = (dotIndex: number) => setIndex(dotIndex);

  useEffect(() => {
    if (autoplay) {
      const timeout = interval || 5000;
      const timerId = setInterval(next, timeout);
      return () => clearInterval(timerId);
    }
  }, [next, interval, autoplay]);
  return (
    <div className={classNames}>
      <div className={`${pre}carousel-items`}>
        {items.map((item: any, itemIndex: number) => (
          <div
            key={itemIndex}
            className={itemIndex === index ? `${pre}carousel-item ${mpre}active` : `${pre}carousel-item`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className={`${pre}carousel-buttons`}>
        <button className={`${pre}carousel-prev-button`} onClick={prev}>&#8249;</button>
        <button className={`${pre}carousel-next-button`} onClick={next}>&#8250;</button>
      </div>
      <div className={`${pre}carousel-dots`}>
        {items.map((_, dotIndex) => (
          <span
            key={dotIndex}
            className={dotIndex === index ? `${pre}carousel-dot ${mpre}active` : `${pre}carousel-dot`}
            onClick={() => dots(dotIndex)}
          />
        ))}
      </div>
    </div>
  );
};
