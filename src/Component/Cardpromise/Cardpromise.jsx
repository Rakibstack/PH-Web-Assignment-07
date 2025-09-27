import React, { use, useEffect } from 'react';
import CustomerCard from '../CustomerCard/CustomerCard';


const Cardpromise = ({CustomerData,settaskstatus,taskstatus,setresolved,resolved,setcustomerinfo,customerinfo}) => {

    const Customerinfodata = use (CustomerData);
    useEffect(() => {
         setcustomerinfo(Customerinfodata) 
    },[])
    
    
    return (        
        <div className='bg-gray-200 '>
         
        <CustomerCard customerinfo={customerinfo} setcustomerinfo={setcustomerinfo} setresolved={setresolved} resolved={resolved}  taskstatus={taskstatus} settaskstatus={settaskstatus} ></CustomerCard>
                    
        </div>
    );
};

export default Cardpromise;