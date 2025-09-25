import React from 'react';
import vector1 from '../../assets/vector1.png'
import vector2 from '../../assets/Group 1.png'

const Bannersection = () => {
    return (
        <div className='bg-gray-200'>
            <div className='container mx-auto px-4 py-12 '>
                <div className='flex gap-4'>
                <div className='flex bg-gradient-to-r from-[#632EE3] to-[#9F62F2] justify-center items-center rounded-md w-full'>
                    <img  className='w-[250px] h-auto' src={vector1} alt="" />
                   <div className='text-center'>
                     <h2 className='text-white text-[1.4rem]'>In-Progress<br /> <span className='text-[2rem]'>0</span></h2>
                   </div>
                    <img  className='w-[250px] h-auto'src={vector2} alt="" />
                    
                </div>
                 <div className='flex bg-gradient-to-r from-[#54CF68] to-[#00827A] justify-center items-center rounded-md w-full'>
                    <img  className='w-[250px] h-auto' src={vector1} alt="" />
                   <div className='text-center'>
                     <h2 className='text-white text-[1.4rem]'>Resolved <br /> <span className='text-[2rem]'>0</span></h2>
                   </div>
                    <img  className='w-[250px] h-auto'src={vector2} alt="" />
                    
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Bannersection;