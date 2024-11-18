import Link from 'next/link';
import React from 'react'
import { FaCartShopping ,FaOpencart} from "react-icons/fa6";



const Navbar = () => {
  return (
    <div className='flex justify-around items-center font-sans font-bold  flex-wrap my-5 py-5 sm:'>
      <div className='flex items-center gap-x-3 text-2xl py-5'>
<Link href={"#"}> <FaCartShopping className='text-4xl text-gray-600 ' /></Link>
<h1 className='text-[#044e83]'>Dream Mart</h1>
      </div>
      <ul className='flex justify-around gap-x-5 text-gray-500 '>
        <Link href={"#"}> Home</Link>
        <Link href={"#"}> About</Link>
        <Link href={"#"}> Service</Link>
        <Link href={"#"}> Contact</Link>
      </ul>
      <div>
        <button className='flex justify-center items-center gap-x-3 bg-slate-200 rounded-md text-2xl hover:text-blue-900 my-5  sm:'>
            <span>Shop Now</span>
            <span> <FaOpencart />
            </span>
        </button>
      </div>
    </div>
  )
}

export default Navbar
