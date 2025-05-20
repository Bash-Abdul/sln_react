
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_color.png'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


export default function Footer() {

  return (
    <section className='w-full bg-gray-200'>
      {/* <nav className="max-w-full mx-auto flex items-center justify-between px-[10%] py-10"> */}
      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-[5%] lg:px-[10%] py-8 pt-10 flex items-center justify-between">
        <div className='flex items-center gap-5'>
          <img src={logo} className='w-[5rem]' alt="footer_logo" />
          <div className='flex items-start gap-5 flex-col'>
            <h1 className='font-semibold'>Quick Links</h1>
            <div className='flex items-center gap-5 text-sm'>
              <p>About</p>
              <p>Our services</p>
            </div>
          </div>
        </div>


        <div className='flex flex-col gap-5'>
          <h1 className='font-semibold'>Connect with Us</h1>
          <div className='flex items-center gap-3'>
          <FaXTwitter /><FaInstagram /><FaLinkedinIn /><FaFacebookF /><IoIosMail />
          </div>
        </div>
      </div>

      <div className='text-center text-sm text-gray-600 border-t border-gray-300 py-5'>
        <p>c 2025 slneng.com. All Rights Reserved</p>
      </div>
    </section>
  );
}
