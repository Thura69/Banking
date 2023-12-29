import React, { FunctionComponent } from 'react'
import styles from './herosection.module.css';
import ActionButton from '../ActionButton';
import { heroProps } from '../../Types/Herosection';

const HeroSection: FunctionComponent<heroProps> = ({title}) => {
    return (
        <div className={styles.banner}>
          <div className='w-1/2 flex flex-col gap-6'>
            <img
            className='absolute top-16 left-32'
            width="200px"
            src='/assets/ellipse 1.svg'
            alt='vector'
            />
        <h2 className="w-5/6  text-3xl font-[500] leading-10">
            <span className="text-[#015EB9] font-bold">{title || "KBZ Money"}</span> compass anti money
          laundering technology and services redefined
        </h2>
        <p className="w-5/6 ">
          KBZ Money Compass Group is a consulting, services and technology firm
          with a long established legacy of leadership.
        </p>
        <ActionButton title='Get Started' route='/'/>
          </div>
        <div className="flex w-1/2">
        <img  src="/assets/banner.svg" alt="banner" />
        </div>
        </div>
    )
};

export default HeroSection