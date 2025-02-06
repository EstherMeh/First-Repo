import React from 'react';

interface WhyChooseCardProps{
  image:string;
  title:string;
  linkText:string;
}

const WhyChooseCard:
React.FC<WhyChooseCardProps>= 
({image,title,linkText}) => {
  return (
  
    <div>
      <img src={image} alt={title} width={70} height={70} className='object-contain mx-auto'/>
      <h2 className='text-center text-lg mt-5 mb-5 font-semibold text-grey-800'>
        {title}
        </h2>
        <p className='text-grey-600 text-center font-mediun text-sm mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio minima do</p>
      <a href="#" className='text-center font-semibold text-blue-900 hover:text-blue-950 transition-all duration-200 cursor-pointer'>
        {linkText} &#8594;
        </a>
    </div>
  );
};

export default WhyChooseCard  