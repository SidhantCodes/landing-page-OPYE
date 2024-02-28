// "use client"
// import { useCallback } from 'react'
// import TravellerExpCard from './TravellerExpCard'
// import { pfp1, fwdArrow, bkdArrow } from '../../public'
// import useEmblaCarousel from 'embla-carousel-react'
// import Image from 'next/image'
// import style from "../styles/TravellerExpCaraousel.module.css"

// const TravellerExpCaraousel = () => {
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
//   const scrollPrev = useCallback(() => {    if (emblaApi) emblaApi.scrollPrev()  }, [emblaApi])
//   const scrollNext = useCallback(() => {    if (emblaApi) emblaApi.scrollNext()  }, [emblaApi])
//   return (
//     <div className={`${style.travelCar}`}>
//       <div className={`${style.embla}`} ref={emblaRef}>
//       <div className={`${style.embla__container}`}>
//         <div className={`${style.embla__slide}`}>
//           <TravellerExpCard rating={5} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." name="Sidhant M." desg="CEO at Amazon" img={pfp1} />
//         </div>
//         <div className={`${style.embla__slide}`}>
//           <TravellerExpCard rating={5} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." name="Sidhant M." desg="CEO at Amazon" img={pfp1} />
//         </div>
//         <div className={`${style.embla__slide}`}>
//           <TravellerExpCard rating={5} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." name="Sidhant M." desg="CEO at Amazon" img={pfp1} />
//         </div>
//         <div className={`${style.embla__slide}`}>
//           <TravellerExpCard rating={5} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." name="Sidhant M." desg="CEO at Amazon" img={pfp1} />
//         </div>
//         <div className={`${style.embla__slide}`}>
//           <TravellerExpCard rating={5} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." name="Sidhant M." desg="CEO at Amazon" img={pfp1} />
//         </div>
//       </div>
//       <div className={`${style.arrow}`}>
//         <button className={`embla__prev`} onClick={scrollPrev}>
//           <Image src={bkdArrow} height={20} width={20} />
//         </button>
//         <button className={`embla__next`} onClick={scrollNext}>
//         <Image src={fwdArrow} height={20} width={20} />
//         </button>
//       </div>
//       </div>
//     </div>
//   )
// }

// export default TravellerExpCaraousel

"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TravellerExpCard from "./TravellerExpCard";
import { pfp1, fwdArrow, bkdArrow } from '../../public'

const TravellerExpCaraousel = () => {
  const settings = {
    className: "center",
    centerMode: true,
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  };
  return (
    <div className="slider-container overflow-hidden mx-2">
      <Slider {...settings}>
        <div>
          <TravellerExpCard rating={5} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." name="Sidhant M." desg="CEO at Amazon" img={pfp1} />
        </div>
        <div>
          <TravellerExpCard rating={5} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." name="Sidhant M." desg="CEO at Amazon" img={pfp1} />
        </div>
        <div>
          <TravellerExpCard rating={5} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." name="Sidhant M." desg="CEO at Amazon" img={pfp1} />
        </div>
        <div>
          <TravellerExpCard rating={5} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." name="Sidhant M." desg="CEO at Amazon" img={pfp1} />
        </div>
        <div>
          <TravellerExpCard rating={5} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." name="Sidhant M." desg="CEO at Amazon" img={pfp1} />
        </div >
        <div>
          <TravellerExpCard rating={5} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." name="Sidhant M." desg="CEO at Amazon" img={pfp1} />
        </div>
        <div>
          <TravellerExpCard rating={5} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." name="Sidhant M." desg="CEO at Amazon" img={pfp1} />
        </div>
        <div>
          <TravellerExpCard rating={5} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." name="Sidhant M." desg="CEO at Amazon" img={pfp1} />
        </div>
        <div>
          <TravellerExpCard rating={5} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." name="Sidhant M." desg="CEO at Amazon" img={pfp1} />
        </div>
      </Slider>
    </div>
  )
}

export default TravellerExpCaraousel
