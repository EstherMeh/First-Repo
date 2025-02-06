import React from 'react'
import WhyChooseCard from './WhyChooseCard';

const WhyChoose = () => {
  return (
    <div className='pt-16 pb-16'>
         <h1 className='mt-6 text-2xl md:text-3xl capitalise font bold text-center '>
            Why You Would Choose This Application
        </h1>
        <div className='mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            <div>
                <WhyChooseCard
                      image="/images/i1.png" 
                      title={'Its a Lightweight'}
                      linkText={'learn more'}
                      />
            </div>
            <div>
                <WhyChooseCard
                      image="/images/i2.png" 
                      title={'Ita a Low Power App'}
                      linkText={'Learn more'}
                      />
            </div>
            <div>
                <WhyChooseCard
                      image="/images/i3.png" 
                      title={'Its a Data-Efficient App'} 
                      linkText={'Learn more'}
                      />
            </div>
            
            
        </div>
    </div>
  );
};

export default WhyChoose;