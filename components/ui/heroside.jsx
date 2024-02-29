import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa6";

const SideHero = () => {
    return (
      
        <div className="w-[426px]  bg-transparent flex flex-col justify-center items-center gap-5 ">

            <div className="h-[515px] w-full bg-[#0052FE] rounded-lg py-8  px-5 md:px-12 flex flex-col justify-start items-center gap-10">
                <div className="text-white">
                    <h3 className=" font-bold text-xl text-center">Get Started with KoinX for FREE</h3>
                    <p className="font-medium text-sm text-center pt-5">With our range of features that you can equip for free,
                        KoinX allows you to be more educated and aware of your tax reports.
                    </p>
                </div>
                <Image src="/Frame.png" alt="logo" width={150} height={150} />
                <button className="bg-white rounded py-2 px-5 flex justify-center items-center gap-3 text-sm">Get Started for FREE <FaArrowRight /></button>
            </div>
            <div className="w-full h-fit bg-white rounded py-3 px-4">
                <p className="text-[#0F1629] text-lg font-semibold">Trending Coins (24h)</p>
                <ul className="space-y-2 py-5">
                    <li className="flex justify-between items-center ">
                        <div className="flex justify-start gap-2 items-center" >
                            <Image src="/bitcoin.png" alt="logo" width={30} height={30} />	Bitcoin
                        </div>
                        <button className="bg-[#14B079]/20 text-[#14B079] rounded py-1 px-2">8.21%</button>
                    </li>
                    <li className="flex justify-between items-center ">
                        <div className="flex justify-start gap-2 items-center" >
                            <Image src="/bitcoin.png" alt="logo" width={30} height={30} />	Bitcoin
                        </div>
                        <button className="bg-[#14B079]/20 text-[#14B079] rounded py-1 px-2">8.21%</button>
                    </li>
                    <li className="flex justify-between items-center ">
                        <div className="flex justify-start gap-2 items-center" >
                            <Image src="/bitcoin.png" alt="logo" width={30} height={30} />	Bitcoin
                        </div>
                        <button className="bg-[#14B079]/20 text-[#14B079] rounded py-1 px-2">8.21%</button>
                    </li>


                </ul>
            </div>
    
        </div>
    )
}

export default SideHero