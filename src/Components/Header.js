import React from 'react'

const Header = () => {
  return (
    <>
    <div className="w-full h-[60px] bg-[#210170]"></div>
    <div className="w-full mx-auto max-w-[1300px] px-5 flex items-center justify-between mt-4">
      <div className='max-h-[80px] overflow-hidden'><img src="/images/logo.svg" alt="logo" className='cursor-pointer w-[130px] transform -translate-y-5 ' /></div>
      <div className="flex items-center gap-20">
        <a href="#/" className='text-[16px] font-[500] text-[#6B6B6B]'>Home</a>
        <a href="#/" className='text-[16px] font-[500] text-[#6B6B6B]'>Works</a>
        <a href="#/" className='text-[16px] font-[500] text-[#6B6B6B]'>Blog</a>
        <a href="#/" className='text-[16px] font-[500] text-[#6B6B6B]'>Careers</a>
        <button className='shadow rounded-xl bg-[#EB5757] text-white font-[500] px-10 py-4 text-[16px]'>Get free Quote</button>
      </div>
    </div>
    </>
  )
}

export default Header