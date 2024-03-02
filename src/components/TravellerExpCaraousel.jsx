"use client"
import { useCallback, useEffect } from 'react'
import TravellerExpCard from './TravellerExpCard'
import { pfp1, fwdArrow, bkdArrow } from '../../public'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import style from "../styles/TravellerExpCaraousel.module.css"

const TravellerExpCaraousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev() }, [emblaApi])
  const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext() }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const timer = setInterval(() => emblaApi.scrollNext(), 2000) // Change 3000 to the desired autoplay interval in milliseconds
    return () => clearInterval(timer)
  }, [emblaApi])

  return (
    <div className={`${style.travelCar}`}>
      <div className={`${style.embla}`} ref={emblaRef}>
        <div className={`${style.embla__container}`}>
          <div className={`${style.embla__slide}`}>
            <TravellerExpCard rating={5} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." name="Sidhant M." desg="CEO at Amazon" img={pfp1} />
          </div>
          <div className={`${style.embla__slide}`}>
            <TravellerExpCard rating={5} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." name="Sidhant M." desg="CEO at Amazon" img={pfp1} />
          </div>
          <div className={`${style.embla__slide}`}>
            <TravellerExpCard rating={5} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." name="Sidhant M." desg="CEO at Amazon" img={pfp1} />
          </div>
          <div className={`${style.embla__slide}`}>
            <TravellerExpCard rating={5} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." name="Sidhant M." desg="CEO at Amazon" img={pfp1} />
          </div>
          <div className={`${style.embla__slide}`}>
            <TravellerExpCard rating={5} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." name="Sidhant M." desg="CEO at Amazon" img={pfp1} />
          </div>
        </div>
        <div className={`${style.arrow}`}>
          <button className={`embla__prev`} onClick={scrollPrev}>
            <Image src={bkdArrow} height={20} width={20} />
          </button>
          <button className={`embla__next`} onClick={scrollNext}>
            <Image src={fwdArrow} height={20} width={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TravellerExpCaraousel