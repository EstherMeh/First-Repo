"use client"
import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {

  const[ showNav,setShowNav]=useState(false)
  const handleNavshow = ()=>{
        setShowNav(true)
  }
  const handleNavhide = ()=>{
        setShowNav(
          false
        );
  };

  return (
    <div>
      <Nav openNav={handleNavshow} />
      <MobileNav showNav={showNav} closeNav={handleNavhide}/> 
    </div>
  );
};


export default ResponsiveNav