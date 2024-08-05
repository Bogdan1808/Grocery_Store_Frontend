import React from 'react'
import Image from 'next/image'
import GlobalApi from '../_utils/GlobalApi';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

function Slider({sliderList = []}) {
  return (
    <Carousel>
    <CarouselContent>
        {sliderList.map((slider, index)=>(
            <CarouselItem key={index}>
                <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL+slider.attributes?.image?.data?.attrbutes?.url} 
                    width = {1000}
                    height = {400}
                    alt = 'slider'
                    className = 'w-full'
                />
            </CarouselItem>
        ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
    </Carousel>
  )
}

export default Slider