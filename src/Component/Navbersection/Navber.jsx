import React from 'react';

const Navber = () => {
    return (
        <div className='container mx-auto px-4 '>
           <div className='flex justify-between items-center p-4'>
            <h1 className='text-[#130B2D] font-bold text-[1.7rem]'>CS — Ticket System</h1>
            <div className='flex items-center list-none gap-4.5 text-[#000000] '>
                <li><a href="#"></a>Home</li>
                <li><a href="#"></a>FAQ</li>
                <li><a href="#"></a>Changelog</li>
                <li><a href="#"></a>Blog</li>
                <li><a href="#"></a>Download</li>
                <li><a href="#"></a>Contact</li>
                <button className='text-[#FFFFFF] rounded-md px-3 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>+ NewTicket</button>
            </div>
           </div>
        </div>
    );
};

export default Navber;