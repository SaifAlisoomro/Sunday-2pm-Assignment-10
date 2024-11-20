import React from 'react'
import { FaCartArrowDown } from "react-icons/fa6"

const Footer = () => {
  return (
    <div className="lg:flex sm:flex-col items-center justify-center space-y-4 lg:space-y-0 lg:space-x-6 p-4 bg-zinc-800 text-white shadow-md">
    <div className="flex items-center m-5">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">DREAM MART SHOPPING CENTER</h1>
      <FaCartArrowDown className="text-3xl sm:text-4xl lg:text-5xl" />
    </div>
    <div>
      <p className="text-xs sm:text-sm lg:text-base">&copy; 2024 DREAM MART | All Rights Reserved</p>
    </div>
  </div>
  
  
  )
}

export default Footer
