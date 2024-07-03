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
    <div className='flex items-center'>
    <div className='flex-1 font-Poppins flex flex-col gap-11'>
        <div className='text-3xl font-Poppinsbold'>Ready to dive into <span className="text-[#223a87]">HABOT?</span></div>
        <div className='font-Poppins w-5/6'>Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</div>
        <div className='button gap-2 w-fit px-16 py-3'>Sign up Today!<span>&rarr;</span></div>
    </div>

<div className='flex-1 flex justify-end'>
    <div className='grid grid-cols-2 gap-y-6 gap-x-12 w-[80%] h-3/4 items-center justify-end'>
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
    <div className='bg-[#072F57] rounded-md mt-16 py-20 px-4 flex gap-3'>
    <div className='video-container flex-1  flex justify-end'>
    <iframe className="rounded-md w-[640px] h-[345px]" src="https://www.youtube-nocookie.com/embed/i8tgRHXx4oQ?si=Vg7tsoJGDJVTGu6V&autohide=1&showinfo=0" title='habot' frameborder="0"  allowfullscreen></iframe>
    </div>

    <div className='description pt-3 flex-1'>
        <div className='headerselected flex font-Poppinsbold text-2xl justify-around'>
            <div className={`desbutton Buyer ${choice==="Buyer" && 'border-b-[3px] border-[#EB7150]'} px-9 ${choice==="Buyer" ? "text-[#EB7150]":"text-white"} cursor-pointer`} onClick={()=>{
                // EB7150
                setChoice("Buyer")
            }}>Buyer</div>
            <div className={`desbutton Supplier ${choice==="Supplier" && "border-b-[3px] border-[#EB7150]"} px-9 ${choice==="Supplier" ? "text-[#EB7150]":"text-white"} cursor-pointer`} onClick={()=>{
                setChoice("Supplier")
            }}>Supplier</div>
        </div>

      <div className='flex flex-col items-stretch gap-5 my-10 mx-4 content-center flex-wrap'>
        {
            list.current.map((items)=>{
               return (<>
                <div className='flex flex-row items-center gap-2'>
                    <img src={checktick} width={"18px"} height={"18px"} alt='CHECK'></img>
                    <div className='text-white font-Poppins text-base'>{items}</div>
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
    <div className="bg-[#E8FBFF] w-full py-20 px-20 flex justify-between items-center">
        <div className="text-3xl font-Poppinsmedium">Let Suppliers <span className='border-b-[3px] border-[#EB7150]'>Find You </span></div>

        <div className="bg-[#EB7150] font-Poppinsmedium flex justify-center items-center text-white w-[216px] h-12 rounded-md tracking-wide">Get Verified</div>
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
    <div className='w-4/6 mx-auto'>
        <div className="text-center font-Poppinsbold text-4xl">How it works?</div>
        <div className="text-center font-Poppins mt-5">Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</div>
    </div>

    <div className="mt-14 grid grid-cols-3 w-5/6 justify-center mx-auto">
        {
            carddata.current.map((items)=>{
                return (
                    <>
                    <div className='descard flex flex-col justify-evenly items-center text-center gap-9 py-14'>
                        <img src={items.icon} alt='icon'></img>
                        <p className="font-Poppinsmedium w-4/6">{items.des}</p>
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
   <section className="mt-16 mx-10">
   <Secondsection></Secondsection>
   <Thirdsection></Thirdsection>
   </section>
   <Fourthsection></Fourthsection>
   <Fifthsection></Fifthsection>
   </>
  )
}
