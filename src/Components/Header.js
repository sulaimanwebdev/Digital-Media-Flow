import React, {useState} from 'react'

const Header = () => {
  const [nav, setnav] = useState('-translate-x-full')
  return (
    <>
    <div className="w-full relative z-20">
    <div className="w-full h-[60px] bg-[#210170]"></div>
    <div className="w-full mx-auto max-w-[1300px] px-5 flex items-center justify-between mt-4">
      <div className='max-h-[80px] overflow-hidden'><img src="/images/logo.svg" alt="logo" className='cursor-pointer w-[130px] transform -translate-y-5 -translate-x-3' /></div>
      <div className={`flex transform md:translate-x-0 transition items-center pt-10 md:pt-0 gap-10 lg:gap-20 fixed z-9999999 top-0 left-0 bg-white flex-col h-screen md:h-auto md:flex-row w-full md:w-auto md:relative md:top-auto md:left-auto ${nav}`}>
        <a onClick={()=> {setnav('-translate-x-full')}} href="#home" className='text-[16px] font-[500] text-[#6B6B6B]'>Home</a>
        <a onClick={()=> {setnav('-translate-x-full')}} href="#works" className='text-[16px] font-[500] text-[#6B6B6B]'>Works</a>
        <a onClick={()=> {setnav('-translate-x-full')}} href="#/" className='text-[16px] font-[500] text-[#6B6B6B]'>Blog</a>
        <a onClick={()=> {setnav('-translate-x-full')}} href="#/" className='text-[16px] font-[500] text-[#6B6B6B]'>Careers</a>
        <button className='shadow rounded-xl bg-[#EB5757] text-white font-[500] px-10 py-4 text-[16px]'>Get free Quote</button>
        <button onClick={()=>{setnav('-translate-x-full')}} className='block md:hidden absolute top-6 right-5'><i className="fal fa-times text-[28px]"></i></button>
      </div>
      <button onClick={()=>{setnav('translate-x-0')}} className='block md:hidden'><i className="fal fa-bars text-[28px]"></i></button>
    </div>
    </div>
    </>
  )
}

export default Header