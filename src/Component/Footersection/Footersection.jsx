import React from 'react';
import Vectorpng from '../../assets/Vector.png'


const Footersection = () => {
    return (
        <div className='bg-black'>
            <div className='container mx-auto px-4 py-10'>
                <div className='lg:flex text-[#A1A1AA] p-4'>
                    <div className='flex-1'>
                        <h2 className='font-bold text-[1.6rem] text-[#FFFFFF] pb-2'>CS — Ticket System</h2>
                        <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className='flex-1 lg:text-center space-y-4'>
                        <h2 className='font-medium text-[1.3rem]  text-[#FFFFFF]'>Company</h2>
                        <p className='mr-6'>About Us</p>
                        <p className='mr-2'>Our Mission</p>
                        <p>Contact Saled</p>
                    </div>
                    <div className='flex-1 space-y-4'>
                        <h2 className='font-medium text-[1.3rem]  text-[#FFFFFF]'>Services</h2>
                        <p>Products & Services</p>
                        <p>Customer Stories</p>
                        <p>Download Apps</p>
                    </div>
                    <div className='flex-1 space-y-4'>
                        <h2 className='font-medium text-[1.3rem]  text-[#FFFFFF]'>Information</h2>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                        <p>Join Us</p>
                    </div>
                    <div className='flex-1 space-y-4'>
                        <h2 className='font-medium text-[1.3rem]  text-[#FFFFFF]'>Social Links</h2>
                        <div>
                            <img className='text-white' src={Vectorpng} alt="" />
                            <p>@CS — Ticket System</p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p>@CS — Ticket System</p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p>@CS — Ticket System</p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p>@CS — Ticket System</p>
                        </div>
                    </div>
                </div>

            </div>
             <div className='text-white container mx-auto px-4 p-4 text-center border-t-1 border-gray-500'>
                    <h2>© 2025 CS — Ticket System. All rights reserved by MD: Rakibul Hassan Rakib </h2>
                </div>
            
        </div>
        
    );
};

export default Footersection;