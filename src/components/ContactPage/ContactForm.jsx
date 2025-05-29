// import React from 'react'

// const ContactForm = () => {
//   return (
//     <div>
//         <h1 className='text-xl mb-10 font-semibold'>Contact Us</h1>

//         <form action="" className='flex flex-col gap-4'>
//             <div className='w-full flex flex-col gap-2 '>
//                 <label htmlFor="">Name:</label>
//                 <input type="text" className="text-black px-5 py-2 outline-none border border-gray-300"  />
//             </div>

//             <div className='w-full flex flex-col gap-2'>
//                 <label htmlFor="">Email:</label>
//                 <input type="text" className="text-black px-5 py-2 outline-none border border-gray-300" />
//             </div>

//             <div className='w-full flex flex-col gap-2'>
//                 <label htmlFor="">Subject:</label>
//                 <input type="text" className="text-black px-5 py-2 outline-none border border-gray-300" />
//             </div>

//             <div className='w-full flex flex-col gap-2'>
//                 <label htmlFor="">Message:</label>
//                 <textarea name="" id="" cols="30" rows="5" className="resize-none text-black px-5 py-3 outline-none border border-gray-300"></textarea>
//             </div>

//             <div>
//             <button type='submit' className='bg-blue-800 py-4 px-6 text-white cursor-pointer'>Send Message</button>
//             </div>
//         </form>
//     </div>
//   )
// }

// export default ContactForm

import React from 'react';

const ContactForm = () => {
  return (
    <div className="relative">
      {/* <div className="relative mb-10">
        <h1 className='text-xl font-semibold relative z-10 inline-block bg-white'>Contact Us</h1>
      </div> */}
      <div className="mb-10 inline-flex gap-2 items-center">
        <h1 className='text-xl font-semibold inline-block bg-white'>Contact Us</h1>
        <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
      </div>

      <form action="" className='flex flex-col gap-4'>
        <div className='w-full flex flex-col gap-2'>
          <label htmlFor="">Name:</label>
          <input type="text" className="text-black px-5 py-2 outline-none border border-gray-300" />
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
          <textarea cols="30" rows="5" className="resize-none text-black px-5 py-3 outline-none border border-gray-300"></textarea>
        </div>

        <div>
          <button type='submit' className='bg-blue-800 py-4 px-6 text-white cursor-pointer hover:bg-blue-700 transition-all duration-300 ease-in-out'>
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
