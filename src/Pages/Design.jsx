import React from 'react';
import Designn from "../assets/Design.png"
import Mobile1 from "../assets/Mobile-design-1.png";
import Mobile2 from "../assets/Mobile-design-2.png";

export const Design = () => {
  return (
    <div id='design' className='bg-[#00010b] w-full pt-20'>
       <img src={Designn} className='w-full px-16  hidden sm:block'/>
       <div className='block sm:hidden px-7'>
        <img src={Mobile1}/>
        <img src={Mobile2}/>
       </div>
    </div>
  )
}
