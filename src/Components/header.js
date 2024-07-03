import React from 'react';
import darklogo from "../Assets/darklogo.svg"

export default function Header() {
  return (
   <header className='flex justify-between mx-10 my-4'>
   <div>
    <img src={darklogo} alt='logo'></img>
   </div>
   <div className='flex gap-7 items-center'>
    <div className='font-Poppins font-normal text-[#6D6E71]'>Find Suppliers</div>
    <div className='font-Poppins font-normal text-[#6D6E71]'>Find Service Tags <span className='rotate-180'>{"<"}</span></div>
    <div className='font-inter font-bold text-[#00732F] border-[1.7px] border-[#00732F] w-48 flex justify-center items-center h-[50px] rounded-md'>Login / Sign Up</div>
   </div>
   </header>
  )
}
