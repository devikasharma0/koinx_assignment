import React from 'react'
import Minichart from './ui/minichart'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



const MiniChartsCollection = () => {
  
  const symbols = ["FX:EURUSD", "CRYPTO:BTCUSD", "CRYPTOCAP:SOL", "CRYPTOCAP:XRP", "CRYPTOCAP:ADA", "CRYPTOCAP:DOGE", "CRYPTOCAP:DOT", "CRYPTOCAP:UNI", "CRYPTOCAP:LINK", "CRYPTOCAP:AVAX"]
  return (
    <div className="bg-white  p-20 w-full space-y-5 " >
      <p className="font-bold text-2xl ">You May Also Like</p>
      <Carousel
        opts={{
          align: "start",
          loop: true,
          
        }}
        className="w-full "
      >
        <CarouselPrevious />
        <CarouselContent>
          {symbols.map((symbol, index) => (
            <CarouselItem key={index} className=" md:basis-1/3  lg:basis-1/4 xl:basis-1/5 ">
              <div className="p-1 w-fit ">

                <Minichart symbol={symbol} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
      <p className="font-bold text-2xl ">Trending Coins</p>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full "
      >
        <CarouselPrevious />
        <CarouselContent>
          {symbols.map((symbol, index) => (
            <CarouselItem key={index} className=" md:basis-1/3  lg:basis-1/4 xl:basis-1/5">
              <div className="p-1 w-fit">

                <Minichart symbol={symbol} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default MiniChartsCollection