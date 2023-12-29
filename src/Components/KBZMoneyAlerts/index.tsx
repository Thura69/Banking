import React from 'react'
import { mockData } from '../../Data/mockData'
import CardCarousel from '../CardCarousel';
import { SwiperSlide } from 'swiper/react';
import GridCard from '../GridCard';
import ActionButton from '../ActionButton';
import 'swiper/css';

const breakpoints = {
  520: {
    slidesPerView: 2,
  },
  750: {
    slidesPerView: 2,
  },
  1300: { slidesPerView: 3 },
};

const KBZMoneyAlerts = ()=> {
  return (
    <div className='py-12 '>
      <h3 className='text-3xl mt-6 font-extrabold color-[#082A36] text-center'>KBZ Money Alerts</h3>
      <CardCarousel breakpoints={breakpoints} maxWidth="100%">
        {mockData?.map((data: any) => (
          <SwiperSlide key={data.title}>
            <GridCard data={data} />
          </SwiperSlide>
        ))}
      </CardCarousel>
       <div className="flex justify-center">
        <ActionButton title="Load More" route="/" />
      </div>
    </div>
  )
}

export default KBZMoneyAlerts