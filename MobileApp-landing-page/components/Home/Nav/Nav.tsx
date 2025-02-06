"use client";
import { navLinks } from "@/constant/Constant";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

type props ={
   openNav:()=> void;
};  

const Nav = ({openNav}:props) => {

  const[navBg,setNavBg]=useState(false,)
  
  useEffect(()=>{
    const handler = ()=>{
      if (window.scrollY >=90) setNavBg(true

      )
      if (window.scrollY < 90)setNavBg(false);

    };
        window.addEventListener('scroll' ,handler);
  
        return ()=>{
          window.removeEventListener('scroll' ,handler);
        }
      },[]);

  return (
    <div
      className={`fixed top-0 w-full transition-all duration-300 ${
        navBg ? "bg-white shadow-md" : "bg-transparent"
      } h-[12vh] z-[1000]`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <h1 className="text-xl md:text-2xl font-bold">
          <span className="text-3xl md:text-4xl text-pink-700">T</span>ravel{" "}
          <span className="text-3xl md:text-4xl text-pink-700">B</span>uddy
        </h1>

        {/* NavLinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a href={link.url} key={link.id} className="nav__link">
              {link.label}
            </a>
          ))}
        </div>
          

          <div>
          {/* Burger Menu */}
          <HiBars3BottomRight onClick={openNav}
           className="w-8 h-8 cursor-pointer text-black lg:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
