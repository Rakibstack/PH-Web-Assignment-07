
import { Suspense, useState } from 'react'
import './App.css'
 import { ToastContainer } from 'react-toastify';
import Bannersection from './Component/Banner-section/Bannersection'
import Cardpromise from './Component/Cardpromise/Cardpromise'
import Navber from './Component/Navbersection/Navber'

 const fetchpromise = async () => {
  const res = await fetch('/Customer.json')
  return res.json()
 }
 
  const CustomerData = fetchpromise();
function App() {
 
   const [taskstatus,settaskstatus] = useState([]);
   const [tasks,settasks] = useState([]);
   const [resolved,setresolved] =useState([]);
  
   
   

  return (
    <>
    <Navber></Navber>
    <Bannersection taskstatus={taskstatus} resolved={resolved} ></Bannersection>
    <Suspense fallback={<div className='text-center'><span className="loading loading-spinner loading-xl"></span></div>}>
      <Cardpromise resolved={resolved} setresolved={setresolved} tasks={tasks} settasks={settasks} taskstatus={taskstatus} settaskstatus={settaskstatus} CustomerData={CustomerData} ></Cardpromise>
    </Suspense>

   <ToastContainer />
    </>
  )
}

export default App
