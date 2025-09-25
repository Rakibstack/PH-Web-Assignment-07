
import { Suspense } from 'react'
import './App.css'
import Bannersection from './Component/Banner-section/Bannersection'
import Cardpromise from './Component/Cardpromise/Cardpromise'
import Navber from './Component/Navbersection/Navber'

 const fetchpromise = async () => {
  const res = await fetch('/Customer.json')
  return res.json()
 }
 
function App() {
  const CustomerData = fetchpromise();

  return (
    <>
    <Navber></Navber>
    <Bannersection></Bannersection>
    <Suspense fallback={<div className='text-center'><span className="loading loading-spinner loading-xl"></span></div>}>
      <Cardpromise CustomerData={CustomerData} ></Cardpromise>
    </Suspense>
   
    </>
  )
}

export default App
