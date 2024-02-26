"use client"
import { useCallback } from 'react'
import TravellerExpCard from './TravellerExpCard'
import { pfp1, fwdArrow, bkdArrow } from '../../public'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import style from "../styles/TravellerExpCaraousel.module.css"

const TravellerExpCaraousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const scrollPrev = useCallback(() => {    if (emblaApi) emblaApi.scrollPrev()  }, [emblaApi])
  const scrollNext = useCallback(() => {    if (emblaApi) emblaApi.scrollNext()  }, [emblaApi])
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
      <div className={`${style.arrow} justify-items-end`}>
        <button className="style.embla__prev" onClick={scrollPrev}>
          <Image src={bkdArrow} height={20} width={20} />
        </button>
        <button className={`${style.embla__next}`} onClick={scrollNext}>
        <Image src={fwdArrow} height={20} width={20} />
        </button>
      </div>
      </div>
    </div>
  )
}

export default TravellerExpCaraousel
