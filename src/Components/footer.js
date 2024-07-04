import React from 'react';
import whitelogo from "../Assets/whitelogo.svg";
import logo from "../Assets/LOGO.png"

const Footer = () => {
  return (
   <>
   <footer className="bg-[#123557] w-full py-16 px-12 mt-16">
    <div className='border-y border-[#38628b] flex flex-col lg:flex-row items-center justify-between'>
    <div className='flex flex-col lg:flex-row items-center gap-6 '>
    <div className=" px-11 py-8 flex flex-col lg:items-start items-center">
        <img src={whitelogo} alt='whitelogo'></img>
        <div className="mt-3 font-Poppinsthin text-white">&#169; R Singhania</div>
    </div>
    <div className='flex flex-col lg:flex-row gap-11'>
    <div className='flex flex-col gap-1 items-center lg:items-start'>
        <div className='text-white font-semibold font-inter mb-3'>Company</div>
        <div className='text-white font-extralight font-inter'>About</div>
        <div className='text-white font-extralight font-inter'>FAQ</div>
    </div>
    <div className='flex flex-col gap-1 items-center lg:items-start'>
        <div className='text-white font-semibold font-inter mb-3'>Terms</div>
        <div className='text-white font-extralight font-inter'>Data Privacy</div>
        <div className='text-white font-extralight font-inter'>Terms</div>
        <div className='text-white font-extralight font-inter'>Accessibility</div>
    </div>
    <div className='flex flex-col gap-1 items-center lg:items-start'>
        <div className='text-white font-semibold font-inter mb-3'>Related</div>
        <div className='text-white font-extralight  font-inter'>Find Buyer</div>
        <div className='text-white font-extralight font-inter'>Feedback</div>
    </div>
    </div>
    </div>
    <div className='my-10 lg:my-0'>
        <img src={logo} alt='logo'></img>
    </div>
    </div>
   </footer>
   </>
  )
}

export default Footer