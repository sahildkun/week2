import React from 'react'
import Image from 'next/image'
import green from '../public/Background Image.png'
import Link from 'next/link'
function Card() {
  return (
<>
<Link href='https://youtu.be/dQw4w9WgXcQ'>
    <button className='  mx-10 md:mx-0  bg-white/10  '>
        <div className="max-w-sm rounded shadow-lg">
  <Image class="w-auto" src={green} alt="Sunset in the mountains" />
  <div class=" px-3 py-2 md:px-6 md:py-4 ">
    <div class="font-bold text-sm md:text-xl mb-2 text-gray-300">The Coldest Sunset</div>
    <p class="text-gray-400 text-xs md:text-base text-center">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    </p>
   
  </div>
  
</div>
    </button>
    </Link>
    </>
  )
}

export default Card