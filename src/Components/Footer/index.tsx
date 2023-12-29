import React from 'react'
import styles from './footer.module.css'
import {
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";

function Footer() {
  return (
    <div className={styles.footer}>
          <div className='flex gap-36'>
          <div className='flex flex-col w-2/5 gap-5  items-start'>
          <img 
            src='/assets/logo-white.svg' 
            alt='logo-white'
            width={250}
            />
          <div className='flex gap-4 mt-3'>
          <FaMapMarkerAlt
           color="#FFB547"
           fontSize="20px"
           style={{ marginLeft: 2 }}
           />
            <h6 className="text-white">
              1250 Capital of Texas Hwy. South Building 3, Suite 400 Austin, TX
              78746
            </h6>
          </div>
           <div className="flex gap-3">
            <RiSendPlaneFill color="#FFB547" fontSize="20px" />
            <h6 className="text-white">
                <a href="mailto:admin@kbzmoney.com">
                 Support: admin@kbzmoney.com
                </a>
                </h6>
          </div>
          <div className='flex gap-3'>
         <BsTelephoneFill color='#FFB547' fontSize="20px"/>
         <h6 className='text-white'>
            <a href='tel:09265577722'>
                Hotline: +959 265577722
            </a>
         </h6>
          </div>
          </div>
          <div className='flex  w-3/5 gap-5 items-start'>
          <div className='flex flex-col w-1/3 gap-5 text-white'>
          <h6 className='text-xl font-semibold mt-4 mb-4'>Quick Links</h6>
            <h6><a href="/">Home</a></h6>
            <h6><a href="/">Services</a></h6>
            <h6><a href="/">AML Technology</a></h6>
            <h6><a href="/">Crypto Currencies</a></h6>
            <h6><a href="/">Resources</a></h6>
          </div>
             <div className="flex flex-col w-1/3 gap-5 text-white">
            <h6 className="mt-4 mb-4 font-semibold text-xl invisible">
              Quick Links
            </h6>
            <h6><a href="/">Contact</a></h6>
            <h6><a href="/">About Us</a></h6>
            <h6><a href="/">Client Support</a></h6>
            <h6><a href="/">Alerts</a></h6>
          </div>
           <div className='flex flex-col w-1/3 gap-5 text-white'>
            <h6 className='text-xl font-semibold mt-4 mb-4'>About Us</h6>
            <h6><a href="/">Disclaimer</a></h6>
            <h6><a href="/">Privacy Policy</a></h6>
            <h6><a href="/">Terms of Service</a></h6>
            <h6><a href="/">Careers</a></h6>
          </div>
          </div>
          </div>   
          <hr className='mt-12 opacity-20'></hr>
          <div className="flex justify-between items-center text-white font-[500] mt-8">
        <h6>
          Copyright &copy; 2022{" "}
          <span className="text-[#FFB547]">KBZ Money</span>. All Rights
          Reserved.
        </h6>
        <div className="flex gap-6">
          <div className="cursor-pointer w-10 h-10 flex justify-center items-center border-2 rounded-full">
            <FaFacebookF fontSize="15px" />
          </div>
          <div className="cursor-pointer w-10 h-10 flex justify-center items-center bg-[#FFB547] rounded-full">
            <FaLinkedinIn fontSize="15px" />
          </div>
          <div className="cursor-pointer w-10 h-10 flex justify-center items-center border-2 rounded-full">
            <FaInstagram fontSize="15px" />
          </div>
          <div className="cursor-pointer w-10 h-10 flex justify-center items-center border-2 rounded-full">
            <FaTwitter fontSize="15px" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer