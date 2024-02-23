"use client"
import { useCallback } from 'react'
import TravellerExpCard from './TravellerExpCard'
import { travellerExp } from '@/assets/constants'
import { pfp1, fwdArrow, bkdArrow } from '../../public'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
const TravellerExpCaraousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const scrollPrev = useCallback(() => {    if (emblaApi) emblaApi.scrollPrev()  }, [emblaApi])
  const scrollNext = useCallback(() => {    if (emblaApi) emblaApi.scrollNext()  }, [emblaApi])
  return (
    <div className="travelCar">
      <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <TravellerExpCard rating={5} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." name="Sidhant M." desg="CEO at Amazon" img={pfp1} />
        </div>
        <div className="embla__slide">
          <TravellerExpCard rating={5} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." name="Sidhant M." desg="CEO at Amazon" img={pfp1} />
        </div>
        <div className="embla__slide">
          <TravellerExpCard rating={5} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." name="Sidhant M." desg="CEO at Amazon" img={pfp1} />
        </div>
        <div className="embla__slide">
          <TravellerExpCard rating={5} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." name="Sidhant M." desg="CEO at Amazon" img={pfp1} />
        </div>
        <div className="embla__slide">
          <TravellerExpCard rating={5} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." name="Sidhant M." desg="CEO at Amazon" img={pfp1} />
        </div>
      </div>
      <div className="arrow justify-items-end">
        <button className="embla__prev" onClick={scrollPrev}>
          <Image src={bkdArrow} height={20} width={20} />
        </button>
        <button className="embla__next" onClick={scrollNext}>
        <Image src={fwdArrow} height={20} width={20} />
        </button>
      </div>
      </div>
    </div>
  )
}

export default TravellerExpCaraousel

// "use client"
// import { useCallback } from 'react'
// import TravellerExpCard from './TravellerExpCard'
// import { travellerExp } from '@/assets/constants'
// import { pfp1, fwdArrow, bkdArrow } from '../../public'
// import useEmblaCarousel from 'embla-carousel-react'
// import Image from 'next/image'

// const TravellerExpCaraousel = () => {
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
//   const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev() }, [emblaApi])
//   const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext() }, [emblaApi])

//   return (
//     <div className="travelCar">
//       <div className="embla" ref={emblaRef}>
//         <div className="embla__container">
//           {travellerExp.map((experience, index) => (
//             <div key={index} className="embla__slide">
//               <TravellerExpCard {...experience} />
//             </div>
//           ))}
//         </div>
//         <div className="arrow justify-items-end">
//           <button className="embla__prev" onClick={scrollPrev}>
//             <Image src={bkdArrow} height={20} width={20} />
//           </button>
//           <button className="embla__next" onClick={scrollNext}>
//             <Image src={fwdArrow} height={20} width={20} />
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default TravellerExpCaraousel;