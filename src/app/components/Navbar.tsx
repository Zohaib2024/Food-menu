import Link from 'next/link'
import React from 'react'
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
        <div className='grid lg:grid-cols-3  grid-cols-2 md:grid-cols-2 justify-center items-center mt-8'>
            <div className=' text-center text-2xl font-semibold'><Link href="" >Restaurent</Link></div>
           
            <div className='   text-center hidden  lg:block list-none'>
              <div className=' grid grid-flow-col grid-cols-5  sm:grid-cols-5 md:grid-cols-5 '>
                <li className='hover:cursor-pointer hover:text-gray-500'>Menu</li>
                <li className='hover:cursor-pointer  hover:text-gray-500'>Events</li>
                <li className='hover:cursor-pointer  hover:text-gray-500'>Gallery</li>
                <li className='hover:cursor-pointer  hover:text-gray-500'>About</li>
                <li className='hover:cursor-pointer  hover:text-gray-500'>contact</li>
                </div>
             
            </div>
           
            <div className="flex items-center justify-center">
  {/* IoMenu icon - visible on large screens and hidden on smaller screens */}
  <IoMenu size={50} className="block lg:hidden" />

  {/* "Book Table" button - hidden on large screens and visible on smaller screens */}
  <button className="hidden lg:block w-36 h-10 hover:bg-red-300 hover:text-black bg-red-600 shadow-2xl rounded-xl text-white">
    Book Table
  </button>
</div>
    </div>
    </div>
  )
}

export default Navbar