import React from 'react'
import { Link, NavLink } from "react-router-dom";

const Ready = () => {
    return (
        <div className='ready__title py-15'>
            <div>
                <h3 className='sm:text-lg md:text-3xl text-center mb-7'>Ready to work with <span>u</span><span>s</span><span>?</span></h3>

                <div className='flex justify-center'>
                    <Link to={'/contact'}>
                        <div className='bg-[#005eb1] text-sm text-white py-4 px-5 cursor-pointer text-center flex rounded-md'>
                            Contact Us
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Ready