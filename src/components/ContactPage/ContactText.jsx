import React from 'react'
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { FaRegClock } from "react-icons/fa6";

const ContactText = () => {
  return (
    <div>
        <h1 className='text-xl mb-10 font-semibold'>Contact Text</h1>

        <div className='w-full grid grid-cols-2 gap-10'>
            <div className='hover:text-white hover:bg-blue-500 flex items-center justify-center flex-col gap-3 text-center py-7 px-3 border border-gray-300'>
            <GrLocation size={50}/>
            <p className='text-xl font-semibold'>Our Location</p>
            <p className='text-sm'>Suite 5, Amethyst Block, All Seasons Plaza, 24 Lateef Jakande Road, Agidingbi, Ikeja, Lagos</p>
            </div>

            <div className='hover:text-white hover:bg-blue-500 flex items-center justify-center flex-col gap-3 text-center py-7 px-3 border border-gray-300'>
            <MdOutlineLocalPhone size={50}/>
            <p className='text-xl font-semibold'>Call Us</p>
            <p>09153864376</p>
            </div>

            <div className='hover:text-white hover:bg-blue-500 flex items-center justify-center flex-col gap-3 text-center py-7 px-3 border border-gray-300'>
            <IoMailOutline size={50} />
            <p className='text-xl font-semibold'>Email Us</p>
            <p>customercare@slneng.com</p>
            </div>

            <div className='hover:text-white hover:bg-blue-500 flex items-center justify-center flex-col gap-3 text-center py-7 px-3 border border-gray-300'>
            <FaRegClock size={50}/>
            <p className='text-xl font-semibold'>Business Hours</p>
            <p>Mon-Fri: 09.00am to 5.00pm</p>
            </div>
        </div>
    </div>
  )
}

export default ContactText