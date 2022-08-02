import React from 'react'

const Works = () => {
  return (
    <>
   <div id='works' className="scroll-my-12 w-full mx-auto max-w-[1000px] mt-[200px] md:mt-[400px] px-5">
      <div className="text-center">
        <div className='font-[600] text-[#FF3B2F] text-[16px]'>Some of our works</div>
        <div className="mt-1 font-[600] text-[#111029] text-[36px]">Let’s meet some of our projects</div>
      </div>
       <div className="mt-8 relative grid-cols-1 grid md:grid-cols-3 gap-5 mb-10 md:h-[800px]">
          <div className='grid md:grid-rows-[40%,1fr] gap-5'>
              <div className="relative h-[300px] md:h-auto px-3 py-3 flex items-end"><img src="/images/image1.png" alt='space' className='rounded-md h-full w-full absolute top-0 left-0 object-cover object-center md:object-top' /><div className="text-white font-[500] relative z-10">Front working space</div></div>
              <div className="relative h-[300px] md:h-auto px-3 py-3 flex items-end"><img src="/images/image4.png" alt='space' className='rounded-md h-full w-full absolute top-0 left-0 object-cover object-center md:object-top' /><div className="text-white font-[500] relative z-10">Guest rest room</div></div>
          </div>
          <div className='grid md:grid-rows-[1fr,40%] gap-5'>
              <div className="relative h-[300px] md:h-auto px-3 py-3 flex items-end"><img src="/images/image2.png" alt='space' className='rounded-md h-full w-full absolute top-0 left-0 object-cover object-center md:object-top' /><div className="text-white font-[500] relative z-10">Meeting corner</div></div>
              <div className="relative h-[300px] md:h-auto px-3 py-3 flex items-end"><img src="/images/image5.png" alt='space' className='rounded-md h-full w-full absolute top-0 left-0 object-cover object-bottom' /><div className="text-white font-[500] relative z-10">Single working space</div></div>
          </div>
          <div className='grid md:grid-rows-[1fr,1fr] gap-5'>
              <div className="relative h-[300px] md:h-auto px-3 py-3 flex items-end"><img src="/images/image3.png" alt='space' className='rounded-md h-full w-full absolute top-0 left-0 object-cover object-center md:object-top' /><div className="text-white font-[500]  h-[300px] md:h-auto z-10">Guest meeting room</div></div>
              <div className="relative h-[300px] md:h-auto px-3 py-3 flex items-end"><img src="/images/image6.png" alt='space' className='rounded-md h-full w-full absolute top-0 left-0 object-cover object-center md:object-top' /><div className="text-white font-[500] relative z-10">Kitchen room</div></div>
          </div>
       </div>
   </div>
    </>
  )
}

export default Works