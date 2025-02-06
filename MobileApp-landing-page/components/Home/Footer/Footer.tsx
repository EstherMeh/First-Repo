import React from 'react'
import { FaClock, FaEnvelope, FaFacebook, FaInstagram, FaMapMarkedAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-white py-10'>
        <div className='w-[90%] mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid gird-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {/*Logo and desription*/}
                <div>
                    {/* Logo*/ }
                    <h1 className="text-xl md:text-2xl font-bold">
                    <span className="text-3xl md:text-4xl text-pink-700">T</span>ravel{" "}
                    <span className="text-3xl md:text-4xl text-pink-700">B</span>uddy
                    </h1>
                    {/*Description */}
                    <p className='mt-4 text-sm font-medium leading-[2rem] w-[80%] text-gray-600'>
                        Lorem ipsum dolor sit amet consectetur ad it amet consectetur.  harum maiores qui consectetur aliquam.
                    </p>
                </div>
                {/*About us Links*/}
                <div>
                <h3 className='text-lg font-semibold text-grey-800'>About Us</h3>
                <ul className='mt-4 space-y-4  text-sm font-semibold text-gray-500'>
                    <li>Support Center</li>
                    <li>Customer Support</li>
                    <li>About Us</li>
                    <li>Copyright</li>

                </ul>
            </div>
            {/*Our Information Links*/}
            <div>
                <h3 className='text-lg font-semibold text-grey-800'>Our Information</h3>
                <ul className='mt-4 space-y-4  text-sm font-semibold text-gray-500'>
                    <li>Return Policy</li>
                    <li>Privacy Pokicy</li>
                    <li>Terms and Condition</li>
                    <li>Site Map</li>

                </ul>
            </div>
            {/*Contact Info*/}
            <div>
            <h3 className='text-lg font-semibold text-grey-800'>Contact Info</h3>
            <ul className='mt-4 space-y-4 text-sm font-semibold text-gray-500'>
                <li className='flex items-center'>
                    <FaMapMarkedAlt className='mr-2'/>
                    Lusaka,Zambia
                </li>
                <li className='flex items-center'>
                    <FaPhoneAlt className='mr-2'/>
                    +260-974587045
                </li>
                <li className='flex items-center'>
                    <FaClock className='mr-2'/>
                    7days -8am-6pm
                </li>
                <li className='flex items-center'>
                    <FaEnvelope className='mr-2'/>
                    info@examplegmail.com
                </li>
            </ul>
            </div>
            </div>
            {/*Bottom Section*/}
            <div className='mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center 
            text-grey-600 text:sm'>
                <p className='text-center md:text-left'>
                    Copyright © 2025.All rights reserved
                </p>
                <div className='flex items center space-x-4 mt-4 md:mt-0'>
                    <span>Social :</span>
                    <a href='#' className='text-gray-500 hover:text-gray-800'>
                        <FaFacebook/>
                    </a>
                    <a href='#' className='text-gray-500 hover:text-gray-800'>
                        <FaTwitter/>
                    </a>
                    <a href='#' className='text-gray-500 hover:text-gray-800'>
                        <FaInstagram/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;