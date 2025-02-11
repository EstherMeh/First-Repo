import React from 'react';
import { FaBook, FaCog, FaDesktop,
 FaHeadset, FaInfinity,FaLaptop, FaLayerGroup,
  FaMobileAlt, FaShieldAlt } from 'react-icons/fa';

const Feature = () => {

    const features = [

        { id: 1, icon: <FaLayerGroup
         className='text-red-500'/>,
         text: " great user experience"},

        { id: 2, icon: <FaLaptop className='text-blue-500'/>,
            text: "An all device app"},

        { id: 3, icon: <FaMobileAlt className='text-yellow-500'/>,
            text: "user friendly"},

        { id: 4, icon: <FaDesktop className='text-purple-500'/>,
            text: "personalised videos/movies"},
        { id: 6, icon: <FaCog className='text-teal-500'/>,
            text: "50+ Unique Design Blocks"},
        { id: 7, icon: <FaHeadset className='text-green-500'/>,
            text: "customized music genre"},
        { id: 8, icon: <FaInfinity className='text-pink-500'/>,
            text: "Endless Fun"},
        { id: 9, icon: <FaBook className='text-indigo-500'/>,
            text: "whide range of novels and books"},
        { id: 10, icon: <FaShieldAlt className='text-orange-500'/>,
            text: "50+ Unique Design Blocks"},
        ];

  return (
    <div className='bg-pink-50 pt-20 pb-20'>
        <div className='w-[80%] mx:auto text-center'>
            <h1 className='mt-6 text-2xl md:text-2xl capitalize font-bold text-center'>
                It Has All You Need
            </h1>
            <div className='grid mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {features.map((feature, index) => (
                <div
                key={feature.id}
                data-aos="flip-right"
                 data-aos-anchor-placement="top-center"
                 data-aos-delay={`${index * 100 }`}
                 
                 className='flex items-center justify-center p-4 bg-whit rounded-lg shadow-md space-x-3'>
                    <div className='text-3xl w-14 h-14 bg-grey-800 bg-opacity-10 flex items-center justify-center flex-col rounded-full'>
                        <span>{feature.icon}</span>
                    </div>
                    <span className='font-semibold'>{feature.text}</span>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Feature;