import React from 'react';
import suitcase from "../Assets/suitcase.svg";
import location from "../Assets/location.svg"

const Homemainsection = () => {
  return (
   <>
   <div className='w-full h-[90%]'>
    <div className="w-full h-full mainimg bg-top bg-cover relative">
<div className="absolute top-0 left-0 w-full h-full  bg-[#050841a1]"></div>
<div className='w-full h-full absolute flex flex-col gap-16 justify-center items-center'>
  <div className="font-Poppins text-6xl leading-[75px] w-4/6">
    <div className="font-black text-white tracking-wide text-center">Are You a Supplier?</div>
    <div className="font-medium text-white tracking-wide text-center">Explore Matching Opportunities</div>
  </div>

<div className="flex gap-3 justify-between w-[70%]">
  <div className='flex py-3.5 pl-2  bg-white gap-3 rounded w-[45%]'>
    <img src={suitcase} alt='suitcase'></img>
    <input className="border-0 flex-1 outline-0 font-inter w-5/6" placeholder='Search your required service here'></input>
  </div>

  <div className='flex py-3.5 pl-2 bg-white gap-3 rounded w-[45%]'>
    <img src={location} alt='location'></img>
    <input className='border-0 flex-1 outline-0 font-inter w-5/6 '  placeholder='Search your desired location here'></input>
  </div>

  <div className='button w-28'>Search</div>
</div>

<div className="text-lg flex gap-2">
    <div className="text-white tracking-wide font-Poppinsbold">Are you a buyer?</div>
    <div className="text-white underline font-Poppinsthin">Click here if you are looking to post a requirements</div>
  </div>
</div>
    </div>
   </div>
   </>
  )
}

export default Homemainsection