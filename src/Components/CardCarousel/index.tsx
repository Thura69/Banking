import React, { FunctionComponent } from 'react'
import { Navigation, Pagination } from "swiper";
import { cardcarouselProps } from '../../Types/Cardcarousel';
import { Swiper } from 'swiper/react';

const CardCarousel: FunctionComponent<cardcarouselProps> = ({
  children,
  maxWidth,
  breakpoints,
}) => {
  return (
    <div>
      <div
        className="w-full px-40 py-4 "
        style={{ maxWidth : maxWidth || "100%"}}
      >
        <Swiper
          breakpoints={breakpoints}
          // slidesPerView={4}
          modules={[Pagination, Navigation]}
          navigation
        >
          {children}
        </Swiper>
      </div>
    </div>
  );
};

export default CardCarousel;
