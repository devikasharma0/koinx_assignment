import React from 'react'
import Image from 'next/image'
import { IoMdMenu } from "react-icons/io";

const Nav = () => {
  return (
    <div className="flex justify-between items-center py-4 px-10 bg-white">
        <div className='px-[16px]'>
            <Image src="/Logo.png" alt="logo" width={100} height={100} />
        </div>
        <div className="block lg:hidden text-2xl">

        <IoMdMenu />
        </div>
        <div className="hidden lg:flex justify-center items-center gap-10 ">
            <div className="font-bold">Crypto Taxes</div>
            <div className="font-bold">Free Tools</div>
            <div className="font-bold">Resource Center</div>
            <div className="py-1 px-2 bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] text-white rounded ">Get Started</div>
        </div>
    </div>
  )
}

export default Nav; 