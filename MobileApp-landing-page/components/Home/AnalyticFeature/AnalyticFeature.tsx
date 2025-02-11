import React from 'react'

const AnalyticFeature = () => {
  return (
    <div className='pt-24 pb-16'>
      {/*Define grid*/}
      <div className='w-[95%] sm:w-[80%] mx:auo items-center grid grid-col-1 lg:grid-cols-2 gap-10'>
        {/*Image Content*/}
        <div
        data-aos="zoom-in"
                 data-aos-anchor-placement="top-center">
          <img src='/images/analytic.png'
          alt='image'
          width={500}
          height={500}
          className='object-contain'/>
        </div>
        {/*Text Content*/}
        <div className='p-6'>
            <h1 className='text-base font-semibold text-orange-500'>Smart ApIs with Real-time data</h1>
            <h1 className='mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-grey-900s '> 
               Travel Buddy brings you the best travel experience by integrating powerful ApIs to keep you a step ahead,with weather updates, smart navigations,easy ticket booking,on the go food ordering,your
            </h1>
        </div>
      </div>
    </div>
  )
}

export default AnalyticFeature;