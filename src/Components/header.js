import React from 'react';
import darklogo from "../Assets/darklogo.svg"

export default function Header() {
  return (
   <header className='flex justify-between mx-10 my-4 pt-1 items-center'>
   <div>
    <img src={darklogo} alt='logo' width={"140px"} height={"100px"}></img>
   </div>
   <div className='flex gap-7 items-center'>
    { window.innerWidth > "1024" && <div className='font-Poppins font-normal text-[#6D6E71]'>Find Suppliers</div>}
   { window.innerWidth > "1024" && <div className='font-Poppins font-normal text-[#6D6E71]'>Find Service Tags</div>}
    <div className='font-inter font-bold text-[#00732F] border-[1.7px] border-[#00732F] w-36 sm:w-48 flex justify-center items-center h-[50px] rounded-md text-sm sm:text-base'>Login / Sign Up</div>
   </div>
   </header>
  )
}
