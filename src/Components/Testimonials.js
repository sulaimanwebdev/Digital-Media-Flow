import React from 'react'

const Testimonials = () => {
  return (
    <>
     <div className="relative w-full mt-[120px] md:mt-[230px]">
     <div className="relative z-10 w-full mx-auto max-w-[1300px] pt-[150px]">
        <div className="w-full px-5 py-5 bg-[#F9F9FD] pt-14">
        <div className="text-center mb-6">
        <div className='font-[600] text-[#FF3B2F] text-[16px]'>Testimonials</div>
        <div className="mt-1 font-[600] text-[#111029] text-[36px]">Some testimonials from our customers</div>
      </div>

      <div className="w-full max-w-[1000px] mx-auto pb-8 bg-white px-3 rounded-xl mt-[100px] flex justify-between gap-20 sm2:gap-5 flex-col sm2:flex-row">
        <div className="text-center">
            <img src="/images/person1.png" alt="person" className='mx-auto w-[100px] transform -translate-y-1/2' />
            <div className='-mt-6'>
            <div className='text-[20px] text-[#111029] font-[600]'>Ronald Richards</div>
            <div className="mt-1.5 text-[15px] text-[#ABAFC7]">Google inc.</div>
            <div className='text-[16px] text-[#70798B] mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
            <img src="/images/stars.svg" alt="stars" className='mx-auto mt-2.5' />
            </div>
        </div>
        <div className="text-center">
            <img src="/images/person2.png" alt="person" className='mx-auto w-[100px] sm2:transform sm2:-translate-y-1/2' />
            <div className='sm2:-mt-6'>
            <div className='text-[20px] text-[#111029] font-[600] mt-6 sm2:mt-0'>Guy Hawkins</div>
            <div className="mt-1.5 text-[15px] text-[#ABAFC7]">Paypal inc.</div>
            <div className='text-[16px] text-[#70798B] mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
            <img src="/images/stars.svg" alt="stars" className='mx-auto mt-2.5' />
            </div>
        </div>
        <div className="text-center">
            <img src="/images/person3.png" alt="person" className='mx-auto w-[100px] sm2:transform sm2:-translate-y-1/2' />
            <div className='sm2:-mt-6'>
            <div className='text-[20px] text-[#111029] font-[600] mt-6 sm2:mt-0'>Kristin Watson</div>
            <div className="mt-1.5 text-[15px] text-[#ABAFC7]">Microsoft inc.</div>
            <div className='text-[16px] text-[#70798B] mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
            <img src="/images/stars.svg" alt="stars" className='mx-auto mt-2.5' />
            </div>
        </div>
      </div>


      <div className="w-full max-w-[1000px] mx-auto pb-8 bg-white px-3 rounded-xl mt-[100px] flex justify-between gap-20 sm2:gap-5 flex-col sm2:flex-row">
        <div className="text-center">
            <img src="/images/person4.png" alt="person" className='mx-auto w-[100px] transform -translate-y-1/2' />
            <div className='-mt-6'>
            <div className='text-[20px] text-[#111029] font-[600]'>Robert Fox</div>
            <div className="mt-1.5 text-[15px] text-[#ABAFC7]">Facebook inc.</div>
            <div className='text-[16px] text-[#70798B] mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
            <img src="/images/stars.svg" alt="stars" className='mx-auto mt-2.5' />
            </div>
        </div>
        <div className="text-center">
            <img src="/images/person5.png" alt="person" className='mx-auto w-[100px] sm2:transform sm2:-translate-y-1/2' />
            <div className='sm2:-mt-6'>
            <div className='text-[20px] text-[#111029] font-[600] mt-6 sm2:mt-0'>Savannah Nguyen</div>
            <div className="mt-1.5 text-[15px] text-[#ABAFC7]">Twitter inc.</div>
            <div className='text-[16px] text-[#70798B] mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
            <img src="/images/stars.svg" alt="stars" className='mx-auto mt-2.5' />
            </div>
        </div>
        <div className="text-center">
            <img src="/images/person6.png" alt="person" className='mx-auto w-[100px] sm2:transform sm2:-translate-y-1/2' />
            <div className='sm2:-mt-6'>
            <div className='text-[20px] text-[#111029] font-[600] mt-6 sm2:mt-0'>Courtney Henry</div>
            <div className="mt-1.5 text-[15px] text-[#ABAFC7]">Apple inc.</div>
            <div className='text-[16px] text-[#70798B] mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
            <img src="/images/stars.svg" alt="stars" className='mx-auto mt-2.5' />
            </div>
        </div>
      </div>

        </div>
     </div>
     <img src="/images/line2.svg" alt="line" className='absolute top-0 left-0 w-full' />
     <img src="/images/line2.svg" alt="line" className='absolute top-[2500px] sm2:top-[1150px] md:top-[1000px] lg:top-[900px] left-0 w-full' />
     </div>
    </>
  )
}

export default Testimonials