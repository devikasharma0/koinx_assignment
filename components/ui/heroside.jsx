import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa6";
import { BiSolidUpArrow } from "react-icons/bi";
import { fetchingPrice } from '@/lib/utils';
const SideHero = async () => {
    const ethereumPriceChange = await fetchingPrice('ethereum')
    const bitcoinPriceChange = await fetchingPrice('bitcoin')
    const dogecoinPriceChange = await fetchingPrice('dogecoin')

    let bgColor = "bg-[#14B079]/20"
    let textcolor = "text-[#14B079]"
    if (bitcoinPriceChange[0].price_change_percentage_24h < 0) {
        bgColor = "bg-[#FF0000]/20"
        textcolor = "text-[#FF0000]"

    }
    if (ethereumPriceChange[0].price_change_percentage_24h < 0) {
        bgColor = "bg-[#FF0000]/20"
        textcolor = "text-[#FF0000]"
    }
    if (dogecoinPriceChange[0].price_change_percentage_24h < 0) {
        bgColor = "bg-[#FF0000]/20"
        textcolor = "text-[#FF0000]"
    }
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
                            <Image src="/Ethereum.png" alt="logo" width={30} height={30} />	Ethereum (ETH)
                        </div>
                        <div className='flex relative'>
                                <BiSolidUpArrow className="absolute left-1 top-1 mt-1 text-[#14B079] text-sm" />
                                <button className={`${bgColor} ${textcolor}  rounded py-1 px-2 pl-6`}>{ethereumPriceChange[0].price_change_percentage_24h.toFixed(2)}%</button>
                        </div>
                    </li>
                    <li className="flex justify-between items-center ">
                        <div className="flex justify-start gap-2 items-center" >
                            <Image src="/bitcoin.png" alt="logo" width={30} height={30} />	Bitcoin (BTC)
                        </div>
                        <div className='flex relative'>
                                <BiSolidUpArrow className="absolute left-1 top-1 mt-1 text-[#14B079] text-sm" />
                                <button className={`${bgColor} ${textcolor}  rounded py-1 px-2 pl-6`}>{bitcoinPriceChange[0].price_change_percentage_24h.toFixed(2)}%</button>
                        </div>
                    </li>
                    <li className="flex justify-between items-center ">
                        <div className="flex justify-start gap-2 items-center" >
                            <Image src={dogecoinPriceChange[0].image} alt="logo" width={30} height={30} />	Dogecoin (DOGE)
                        </div>
                        <div className='flex relative'>
                                <BiSolidUpArrow className="absolute left-1 top-1 mt-1 text-[#14B079] text-sm" />
                                <button className={`${bgColor} ${textcolor}  rounded py-1 px-2 pl-6`}>{dogecoinPriceChange[0].price_change_percentage_24h.toFixed(1)}%</button>
                        </div>
                    </li>


                </ul>
            </div>
    
        </div>
    )
}

export default SideHero