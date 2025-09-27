import React from 'react';
import vector1 from '../../assets/vector1.png'
import vector2 from '../../assets/Group 1.png'

const Bannersection = ({taskstatus,resolved}) => {
    return (
        <div className='bg-gray-200 '>
            <div className='container mx-auto px-4 py-12 '>
                <div className='flex md:flex-row flex-col gap-4'>
                <div className='flex relative bg-gradient-to-r from-[#632EE3] to-[#9F62F2] justify-center items-center rounded-md w-full h-[200px]'>
                    <img  className='absolute top-0 left-0 bottom-0 ' src={vector1} alt="" />
                   <div className='text-center'>
                     <h2 className='text-white text-[1.4rem]'>In-Progress<br /> <span className='text-[2rem]'>{taskstatus.length}</span></h2>
                   </div>
                    <img  className='absolute top-0 right-0 bottom-0 'src={vector2} alt="" />
                    
                </div>
                 <div className='flex relative bg-gradient-to-r from-[#54CF68] to-[#00827A] justify-center items-center rounded-md w-full h-[200px]'>
                    <img  className='absolute top-0 left-0 bottom-0 ' src={vector1} alt="" />
                   <div className='text-center'>
                     <h2 className='text-white text-[1.4rem]'>Resolved <br /> <span className='text-[2rem]'>{resolved.length}</span></h2>
                   </div>
                    <img  className='absolute top-0 right-0 bottom-0 'src={vector2} alt="" />
                    
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Bannersection;