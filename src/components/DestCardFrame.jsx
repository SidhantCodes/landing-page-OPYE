"use client"
import { useCallback } from "react"
import DestinationCards from "./DestinationCards"
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react'

const DestCardFrame = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true})
  const scrollPrev = useCallback(() => {    if (emblaApi) emblaApi.scrollPrev()  }, [emblaApi])
  const scrollNext = useCallback(() => {    if (emblaApi) emblaApi.scrollNext()  }, [emblaApi])
  return (
    <>
    <div className="hidden sm:flex gap-x-8 mt-16">
      
      <DestinationCards imageUrl="/pondi.png" destinationName="PONDICHERRY" locDescription="This is title of the travel package that is being featured here." />
      <DestinationCards imageUrl="/blore.png" destinationName="BANGLORE" locDescription="The languages only differ in their grammar, their pronun and their most common words." />
      <DestinationCards imageUrl="/kkl.png" destinationName="KODAIKANAL" locDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."/>
    </div>
    <div className="embla sm:hidden mt-16" ref={emblaRef}>
      
      <div className="embla__container ">
        <div className="embla__slide">
          <DestinationCards imageUrl="/pondi.png" destinationName="PONDICHERRY" locDescription="This is title of the travel package that is being featured here." />
        </div>
        <div className="embla__slide">
          <DestinationCards imageUrl="/blore.png" destinationName="BANGLORE" locDescription="The languages only differ in their grammar, their pronun and their most common words." />
        </div>
        <div className="embla__slide">
          <DestinationCards imageUrl="/kkl.png" destinationName="KODAIKANAL" locDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."/>
        </div>
      </div>
      <div className="flex gap-36 items-center justify-around">
        <button className="embla__prev" onClick={scrollPrev}>
          <Image src="/back.png" height={20} width={20} />
        </button>
        <button className="embla__next" onClick={scrollNext}>
        <Image src="/fwd.png" height={20} width={20} />
        </button>
      </div>

    </div>

    </>
  )
}

export default DestCardFrame
