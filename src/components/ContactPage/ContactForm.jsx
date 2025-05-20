import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <h1 className='text-xl mb-10 font-semibold'>Contact Us</h1>

        <form action="" className='flex flex-col gap-4'>
            <div className='w-full flex flex-col gap-2 '>
                <label htmlFor="">Name:</label>
                <input type="text" className="text-black px-5 py-2 outline-none border border-gray-300"  />
            </div>

            <div className='w-full flex flex-col gap-2'>
                <label htmlFor="">Email:</label>
                <input type="text" className="text-black px-5 py-2 outline-none border border-gray-300" />
            </div>

            <div className='w-full flex flex-col gap-2'>
                <label htmlFor="">Subject:</label>
                <input type="text" className="text-black px-5 py-2 outline-none border border-gray-300" />
            </div>

            <div className='w-full flex flex-col gap-2'>
                <label htmlFor="">Message:</label>
                <textarea name="" id="" cols="30" rows="5" className="resize-none text-black px-5 py-3 outline-none border border-gray-300"></textarea>
            </div>

            <div>
            <button type='submit' className='bg-blue-500 py-4 px-6 text-white cursor-pointer'>Send Message</button>
            </div>
        </form>
    </div>
  )
}

export default ContactForm