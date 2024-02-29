import React from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

export const RouteText = () => {
  return (
    <div className='flex items-center gap-1 text-sm py-8'>
        <div className='text-[#3E5765]'>Cryptocurrencies</div>
        <MdOutlineKeyboardDoubleArrowRight className='text-xl text-[#3E5765]'/>
        <div className='text-[#0F1629]'>Bitcoin</div>

    </div>
    
  )
}
