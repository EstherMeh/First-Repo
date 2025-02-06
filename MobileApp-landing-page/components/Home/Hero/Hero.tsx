import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#f7f6fb]'>
            <div className='flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
                    {/*Text Content*/}
                    <div>
                
                        {/*Heading*/}
                        <h1 className='text-2xl sm:text 4xl md:text-5xl mt-6 mb-6 font-bold md:leading-[3rem] lg:leading-[3.5rem]'>
                            Your Ultimate Travel Companion <br/><span className='text-pink-500 text-3xl'>
                                A Safe Haven on the Road</span>
                        </h1>
                        {/*description*/}
                        <p className='text-gray-700'>
                            Trave Buddy is your own customized Virtaual companion for seamless trip planning and endless fun.,plan your itinerary,
                            manage your budget and create your packing list-all in one place! plus personalized entertainment say goodbye to those boring long trips.
                        </p>
                        {/*playstore and app store image*/}
                        <div className='flex mt-8 mb-8 items-center space-x-4'>
                            <Image 
                            src='/images/gp.png'
                            alt='Play store'
                            width={150}
                            height={150}
                            className='object-contain'
                            />
                            <Image 
                            src='/images/as.png'
                            alt='Appstore'
                            width={150}
                            height={150}
                            className='object-contain'/>

                        </div>
                    </div>
                    {/*Image Content*/}
                    <div className='hidden lg:block'>
                        <Image src="/images/hero.png"
                        alt="hero"
                        width={700}
                        height={700}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;