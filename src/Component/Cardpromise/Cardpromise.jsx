import React, { use } from 'react';
import CustomerCard from '../CustomerCard/CustomerCard';


const Cardpromise = ({CustomerData,settaskstatus,taskstatus,settasks,tasks,setresolved,resolved}) => {

    const Customerinfo = use (CustomerData);
    
    
    return (        
        <div className='bg-gray-200 '>
         
        <CustomerCard setresolved={setresolved} resolved={resolved} tasks={tasks} settasks={settasks} taskstatus={taskstatus} settaskstatus={settaskstatus} Customerinfo={Customerinfo}></CustomerCard>
                    
        </div>
    );
};

export default Cardpromise;