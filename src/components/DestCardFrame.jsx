"use client"
import { useCallback, useEffect } from "react"
import DestinationCards from "./DestinationCards"
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react'
import { fwdArrow, bkdArrow } from "../../public";
import { destination } from "@/assets/constants";
import styles from "../styles/DestCardFrame.module.css"

const DestCardFrame = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true})
  const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev() }, [emblaApi])
  const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext() }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const timer = setInterval(() => emblaApi.scrollNext(), 3000) // Change 3000 to the desired autoplay interval in milliseconds
    return () => clearInterval(timer)
  }, [emblaApi])

  return (
    <>
      <div className={`${styles.destFrame}`}>
        {destination.map((dest, index) => (
          <DestinationCards key={index} imageUrl={dest.destImg} destinationName={dest.destName} locDescription={dest.destDesc} />
        ))}
      </div>
      <div className={`${styles.embla} ${styles.caraousel}`} ref={emblaRef}>
        <div className={styles.embla__container}>
          {destination.map((dest, index) => (
            <div key={index} className={styles.embla__slide}>
              <DestinationCards imageUrl={dest.destImg} destinationName={dest.destName} locDescription={dest.destDesc} />
            </div>
          ))}
        </div>
        {/* <div className={`${styles.arrow}`}>
          <button className={`embla__prev`} onClick={scrollPrev}>
            <Image src={bkdArrow} height={20} width={20} />
          </button>
          <button className={`embla__next`} onClick={scrollNext}>
            <Image src={fwdArrow} height={20} width={20} />
          </button>
        </div> */}
      </div>
    </>
  )
}

export default DestCardFrame;