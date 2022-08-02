import React from 'react'

const Customers = () => {
  return (
    <>
   <div className="w-full mx-auto max-w-[1100px] px-5 mt-[140px] md:mt-[200px] overflow-hidden">
   <div className="text-center">
        <div className='font-[600] text-[#FF3B2F] text-[16px]'>Some of Our Great Customers</div>
        <div className="mt-1 font-[600] text-[#111029] text-[36px]">Some of the companies we have worked with</div>
   </div>
   <div className="mt-14 pb-6 md:pb-0 items-center flex justify-between gap-x-14 gap-y-16 min-w-[250px] overflow-x-scroll md:overflow-x-hidden md:min-w-full md:flex-wrap">
     <img src="/images/logo1.svg" alt="logo" />
     <img src="/images/logo2.svg" alt="logo" />
     <img src="/images/logo3.svg" alt="logo" />
     <img src="/images/logo4.svg" alt="logo" />
     <img src="/images/logo5.svg" alt="logo" />
     <img src="/images/logo6.svg" alt="logo" />
     <img src="/images/logo7.svg" alt="logo" />
     <img src="/images/logo8.svg" alt="logo" />
     <img src="/images/logo9.svg" alt="logo" />
     <img src="/images/logo10.svg" alt="logo" />
   </div>
   </div>
    </>
  )
}

export default Customers