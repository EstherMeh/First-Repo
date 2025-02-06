import React from 'react'
import { CgClose } from 'react-icons/cg';
import { navLinks } from "@/constant/Constant";
import Link from "next/link";

type props ={
  showNav:boolean;
  closeNav:()=>void;
};

const MobileNav = ({closeNav,showNav}:props) => {
    const navOpen = showNav?"translate-x-0":"translate-x-[-100%]";

  return (
    <div>
      {/*overlay */}
      <div className={`fixed ${navOpen} inset-0 transform transiton-all duration-500 z-[10000] bg-black opacity-70 w-full
       h-screen`}></div>
       {/*NavLinks*/}
       <div className={`text-white  fixed ${navOpen} justify-center flex flex-col h-full transform transition-all
        duration-500 delay-300 w-80% sm:w-[60%] bg-indigo-900 space-y-6 z-[10006]`} >

          {navLinks.map((link) => (
                      <a href={link.url} key={link.id} className="nav__link text-white text-[20px] ml-12 
                      border-b-[1.5px pd-1 border-white sm:text-[30px] ">
                        {link.label}
                      </a>
                    ))}
                     {/*close icon*/}
        <CgClose onClick={closeNav}
         className='absolute top-[0.7rem] right-[1.5rem] sm:w-8 sm:h-8 w-6 h-6'/>
    </div>
        </div>
  )
}

export default MobileNav