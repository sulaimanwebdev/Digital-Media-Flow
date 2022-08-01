import React from 'react'
import {Helmet} from "react-helmet";

const Hero = () => {
  <Helmet>
    <script src="https://player.vimeo.com/api/player.js"></script>
  </Helmet>
  return (
    <>
   <div className="w-full mx-auto max-w-[1300px] gap-10 px-5 flex items-center justify-between mt-4">
      <div className=''>
      <div className='text-[35px] font-[700] mb-4 text-[#111029]'>We build crypto apps and do <span className='text-[#FF6800]'>digital Marketing</span> to grow your business</div>
      <div className='text-[16px] leading-loose text-[#6B6B6B] font-[400]'>Digital Media Flow is an award-winning digital  marketing, Crypto app development agency with offices in New York City and Miami.  Our team comprises an innovative group of marketers, designers, software engineers, copywriters, and bloggers.  </div>
      <button className='shadow mt-16 rounded-xl bg-[#EB5757] text-white font-[500] px-10 py-4 text-[16px]'>Get free Quote</button>
      </div>
      <div className="relative">
      <iframe className='-mt-20 relative z-10 w-[700px] h-[700px]' src="https://player.vimeo.com/video/733865121?h=21ebaa5906&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen  title="."></iframe>
     <img src="/images/dots.svg" alt="dots" className='absolute bottom-0 -left-14' />
    </div>
    </div>
    <img src="/images/line1.svg" alt="line" className='absolute top-[700px] left-0 w-full' />
    </>
  )
}

export default Hero