import React from 'react';
import whitelogo from "../Assets/whitelogo.svg";
import logo from "../Assets/LOGO.png"

const Footer = () => {
  return (
   <>
   <footer className="bg-[#123557] w-full py-16 px-12">
    <div className='border-y border-[#38628b] flex items-center justify-between'>
    <div className='flex items-center gap-6 '>
    <div className=" px-11 py-8">
        <img src={whitelogo} alt='whitelogo'></img>
        <div className="mt-3 font-Poppinsthin text-white">&#169; R Singhania</div>
    </div>
    <div className='flex gap-11'>
    <div className='flex flex-col gap-1'>
        <div className='text-white font-semibold font-inter mb-3'>Company</div>
        <div className='text-white font-extralight font-inter'>About</div>
        <div className='text-white font-extralight font-inter'>FAQ</div>
    </div>
    <div className='flex flex-col gap-1'>
        <div className='text-white font-semibold font-inter mb-3'>Terms</div>
        <div className='text-white font-extralight font-inter'>Data Privacy</div>
        <div className='text-white font-extralight font-inter'>Terms</div>
        <div className='text-white font-extralight font-inter'>Accessibility</div>
    </div>
    <div className='flex flex-col gap-1'>
        <div className='text-white font-semibold font-inter mb-3'>Related</div>
        <div className='text-white font-extralight  font-inter'>Find Buyer</div>
        <div className='text-white font-extralight font-inter'>Feedback</div>
    </div>
    </div>
    </div>
    <div>
        <img src={logo} alt='logo'></img>
    </div>
    </div>
   </footer>
   </>
  )
}

export default Footer