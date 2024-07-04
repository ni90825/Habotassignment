import React, { useRef, useState } from 'react'
import "../App.css";
import checktick from "../Assets/checked.png";
import firstgroup from "../Assets/firstgroup.png";
import secondgroup from "../Assets/secondgroup.png";
import thirdgroup from "../Assets/thirdgroup.png";
import fourthgroup from "../Assets/fourthgroup.png";
import fifthgroup from "../Assets/fifthgroup.png";
import sixthgroup from "../Assets/sixthgroup.png"

const Secondsection=()=>{
    const city=useRef(["Abu Dhabi" , "Dubai" , "Sharjah & Ajman" , "Fujairah" ,"Ras Al Khaimah" , "Umm Al Quwain"])
return (
    <div className='flex items-center flex-col lg:flex-row'>
    <div className='flex-1 font-Poppins flex flex-col gap-11 mb-6 lg:mb-0'>
        <div className='text-3xl font-Poppinsbold text-center lg:text-start	'>Ready to dive into <span className="text-[#223a87]">HABOT?</span></div>
        <div className='font-Poppins w-full lg:w-5/6 text-xs md:text-sm xl:text-base text-center lg:text-start'>Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</div>
        <div className='button gap-2 w-fit px-16 py-3 mx-auto lg:mx-0'>Sign up Today!<span>&rarr;</span></div>
    </div>

<div className='flex-1 flex lg:justify-end justify-center w-[95%] lg:w-[50%] '>
    <div className='grid grid-cols-2 gap-y-6 gap-x-12 w-[97%] lg:w-[100%] xl:w-[80%] h-3/4 items-center justify-end'>
    {
    city.current.map((items)=>{
        return (
            <div className="bg-transparent border border-[#E7760D] flex items-center justify-center w-full h-[60px] py-3 rounded font-inter text-[#3E3E3E] font-medium">{items}</div>
        )
    })  
    }
</div>
</div>

    </div>
)
}

const Thirdsection=()=>{
    const list = useRef(["Post your requirements.","Sit back for multiple suppliers to contact you.","Choose among the suppliers based on the ratings and reviews."])
    const [choice,setChoice]=useState("Buyer");
    return (
        <>
    <div className='bg-[#072F57] rounded-md mt-16 lg:py-20 py-8 px-4 flex gap-3 flex-col lg:flex-row'>
    <div className='video-container flex-1  flex justify-center lg:justify-end lg:px-4 lg:py-2'>
    <iframe className="rounded-md w-[90%] h-[300px] md:w-[78%] md:h-[397px] lg:w-[513px] :lg:h-[309px] xl:w-[640px] xl:h-[345px]" src="https://www.youtube-nocookie.com/embed/i8tgRHXx4oQ?si=Vg7tsoJGDJVTGu6V&autohide=1&showinfo=0" title='habot' frameborder="0"  allowfullscreen></iframe>
    </div>

    <div className='description pt-3 flex-1'>
        <div className='headerselected flex font-Poppinsbold text-sm sm:text-xl xl:text-2xl justify-around'>
            <div className={`desbutton Buyer ${choice==="Buyer" && 'border-b-[3px] border-[#EB7150]'} px-14 lg:px-9 ${choice==="Buyer" ? "text-[#EB7150]":"text-white"} cursor-pointer`} onClick={()=>{
                // EB7150
                setChoice("Buyer")
            }}>Buyer</div>
            <div className={`desbutton Supplier ${choice==="Supplier" && "border-b-[3px] border-[#EB7150]"} px-14 lg:px-9 ${choice==="Supplier" ? "text-[#EB7150]":"text-white"} cursor-pointer`} onClick={()=>{
                setChoice("Supplier")
            }}>Supplier</div>
        </div>

      <div className='flex flex-col items-stretch gap-5 my-10 mx-4 lg:content-center flex-wrap'>
        {
            list.current.map((items)=>{
               return (<>
                <div className='flex flex-row items-center gap-2'>
                    <img src={checktick} width={"18px"} height={"18px"} alt='CHECK'></img>
                    <div className='text-white font-Poppins text-xs sm:text-sm lg:text-base'>{items}</div>
                </div>
                </>
               )
            })
        }
      </div>  
    </div>
    </div>

        </>
    )
}

const Fourthsection = () =>{
    return (
<>
<div className='mt-16'>
    <div className="bg-[#E8FBFF] w-full px-4 py-10 sm:py-16 md:py-16 sm:px-12 md:px-14 lg:px-24 flex justify-between items-center">
        <div className="text-lg sm:text-[24px] md:text-3xl font-Poppinsmedium">Let Suppliers <span className='border-b-[3px] border-[#EB7150]'>Find You </span></div>

        <div className="bg-[#EB7150] font-Poppinsmedium flex justify-center items-center text-white w-[120px] h-10 text-sm md:text-lg sm:w-[150px] md:w-[216px] sm:h-12 rounded-md tracking-wide">Get Verified</div>
    </div>
</div>
</>
    )
}

const Fifthsection = ()=>{
    const carddata=useRef([{
        "icon":firstgroup,
        "des":"Select Your Role and Sign Up"
    },{
        "icon":secondgroup,
        "des":"Buyers Post Your Requirements"
    },{
        "icon":thirdgroup,
        "des":"Review, Select, and Contact the Best Suppliers"
    },{
        "icon":fourthgroup,
        "des":" Suppliers Complete your profile and get notified for opportunities"
    },{
        "icon":fifthgroup,
        "des":"Contact to Buyers and Share your Quote for the service"
    },{
        "icon":sixthgroup,
        "des":"Both the Parties can Connect and Make Business Leave a Feedback"
    }])
    return (
        <>
<div className='mt-16'>
    <div className='lg:w-4/6 md:w-10/12 mx-auto'>
        <div className="text-center font-Poppinsbold text-4xl">How it works?</div>
        <div className="text-center font-Poppins mt-5 mx-2 text-[11px] sm:text-xs lg:text-sm">Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</div>
    </div>

    <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 w-[85%] sm:w-[90%] lg:w-[96%] xl:w-5/6 w- justify-center mx-auto">
        {
            carddata.current.map((items)=>{
                return (
                    <>
                    <div className='descard flex flex-col justify-evenly items-center text-center gap-9 py-14'>
                        <img src={items.icon} alt='icon'></img>
                        <p className="font-Poppinsmedium w-11/12 md:w-4/6 text-[13.5px] md:text-sm">{items.des}</p>
                    </div>
                    </>
                )
            })
        }
    </div>
</div>
        </>
    )
}
export const Secondmainsection = () => {
  return (
    <>
   <section className="mt-16 sm:mx-10 mx-4">
   <Secondsection></Secondsection>
   <Thirdsection></Thirdsection>
   </section>
   <Fourthsection></Fourthsection>
   <Fifthsection></Fifthsection>
   </>
  )
}
