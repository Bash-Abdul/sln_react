import React from 'react'
import whatsapp from '../assets/whatsapp.png'
import { FaArrowUpLong } from "react-icons/fa6";

const FixedButtons = () => {
  return (
    <div className='flex flex-col gap-4 fixed bottom-[2%] right-[1.5%]'>
        <img src={whatsapp} alt="whatsapp image" className='w-[3rem]' />
        <div className='h-[3rem] w-[3rem] bg-black text-white flex items-center justify-center rounded-full'>
        <FaArrowUpLong />
        </div>
    </div>
  )
}

export default FixedButtons