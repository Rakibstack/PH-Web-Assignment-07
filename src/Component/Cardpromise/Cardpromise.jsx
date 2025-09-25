import React, { use } from 'react';
import CustomerCard from '../CustomerCard/CustomerCard';


const Cardpromise = ({CustomerData}) => {

    const Customerinfo = use (CustomerData);
    
    
    return (        
        <div className='bg-gray-200  '>
         
        <CustomerCard Customerinfo={Customerinfo}></CustomerCard>
                    
        </div>
    );
};

export default Cardpromise;