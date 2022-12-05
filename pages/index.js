import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CardNature from '../components/Card'
import 'aos/dist/aos.css'
import Aos from 'aos'

import React,{useEffect} from "react";
import Footer from '../components/Footer'

;
export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div id='leaf'>
    <div className=" snap-y snap-mandatory w-auto  h-screen justify-center  overflow-y-scroll ">
     {/* hero */}
     <div className='snap-start flex flex-col md:gap-2 items-center justify-center  h-[100vh] '>
     
      <h1 className='text-white text-7xl md:text-[10rem] font-bold   animate__animated animate__fadeInDown'>NAtURE</h1>
     
     
     <p className='text-gray-300 text-md md:text-2xl  font-light'>is calling me and i must go</p>
     </div>

     {/* latest news */}
     
     <div className='snap-start'>
     <div className=' flex flex-col gap-2 items-center py-10 md:pt-44  '>
     
     <p className='text-white text-4xl font-mono'>Latest News</p>
     
     </div>
     
     <div className='snap-start flex flex-col md:flex-row justify-center gap-y-5 md:gap-x-10 mx-auto md:mx-auto md:h-[100vh]'>
     <CardNature/>
     <CardNature/>
     <CardNature/>
     </div>

     <div className='mt-44 md:mt-0 '>
      <Footer/>
     </div>
     </div>
     
    
  </div>
  </div>
  )
}
