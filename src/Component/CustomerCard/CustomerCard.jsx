import React from 'react';
import { toast } from 'react-toastify';

const CustomerCard = ({Customerinfo,settaskstatus,taskstatus,settasks,tasks,resolved,setresolved}) => {
     
      const HandleTask = (Customerdata) => {
        toast.success("In Progress!")
        settaskstatus([...taskstatus,Customerdata])
       
      }
      const HandleComplete = (task) => {
            
         toast.success(`${task.title} moved to Resolved!`)
  
        settaskstatus(taskstatus.filter(t => t.id !== task.id))
        
        
        setresolved([...resolved,task])
        

      }

    return (
       <div className='container mx-auto  px-4 py-6'>

       
        <div className='grid grid-cols-3 '> 
         <h2 className='col-span-2 py-4 text-2xl font-semibold text-[#34485A]'>Customer Tickets</h2>
           <h2 className='col-span-1 hidden lg:block py-4 ml-5 text-2xl font-semibold text-[#34485A]'>Task Status</h2> 
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            
            <div className=' col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4'>   
               {
                Customerinfo.map(Customer  =>     <div  onClick={() => {HandleTask(Customer)}} key={Customer.id} className='w-full  bg-white p-3 rounded-xl'>
              <div className='flex justify-between py-3 '>
                <h2 className='text-[#001931] font-medium text-[1.1rem]'>{Customer.title}</h2>
                <button className={`flex items-center justify-between gap-1 px-5 py-1 rounded-3xl ${Customer.status === 'In Progress'? 'bg-[#FEBB0C60]' : 'bg-[#B9F8CF]' }`}><div className={`w-3 h-3 rounded-3xl ${Customer.status === 'In Progress'? 'bg-[#FEBB0C]' : 'bg-[#02A53B]'}`}></div> {Customer.status}</button>
              </div>
              <p className='text-[#627382] pb-3'>{Customer.description}</p>
              <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <span className='text-[#627382]'>{Customer.code}</span>
                <h3 className={`font-semibold ${Customer.priority === 'High'? 'text-red-500' :Customer.priority ==='Medium'? 'text-[#FEBB0C]' : 'text-[#02A53B]' }`}>{Customer.priority}</h3>
                </div>
                <div className='flex gap-2 text-[#627382] pb-1'>
                    <p>{Customer.customer}</p>
                   <img src={'https://i.ibb.co.com/d0kVMcMt/ri-calendar-line.png'} alt="" />
                   <p>{Customer.createdAt}</p>
                </div>
              </div>
             </div>
             )
               }
            </div>
              
                <div  className='col-span-1 p-2'>  
                    <h2 className='col-span-1 block lg:hidden py-4 ml-5 text-2xl font-semibold text-[#34485A]'>Task Status</h2>

                    {
                      taskstatus.length > 0 ? ( <div>
                     {
                    taskstatus.map(task =>  <div key={task.id}>  
                    <div className='bg-white w-full mb-4 p-5 rounded-md'>

                      <h2 className='text-[#001931] font-semibold pb-3 text-[1.2rem]'>{task.title}</h2>
                      <div className='text-center text-white bg-[#02A53B] w-full p-2 rounded-md'>
                          <button onClick={() => {HandleComplete(task)}} className='font-semibold'>Complete</button>
                        </div>
                    </div> 
                  </div> )
                  }
                    </div>) : ( <p >Select a ticket to add to Task Status</p>)
                    }
  
                 
                 <div className='py-6'>
                    <h2 className='font-semibold text-[1.5rem]'>Resolved Task</h2>
                    {
                      resolved.length > 0 ? resolved.map(task =>  <div className='bg-[#E0E7FF] w-full p-5 mb-4 rounded-xl'>
                      <h2 className='text-[#001931] font-semibold '>{task.title}</h2>
                    </div> ) : <h2>No resolved tasks yet.</h2>
                    }
                   

                      
                </div>
                </div>

          

        </div>

       </div>
    );
};

export default CustomerCard;