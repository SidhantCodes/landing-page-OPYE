"use client"
import React from 'react';
import { star, pfp1 } from '../../public';
import Image from 'next/image';


const TravellerExpCard = ({ rating, desc, name, desg, img }) => {
  return (
    <section className="expcard">
      <div className="travelRate">
        {Array.from({ length: rating }).map((_, index) => (
          <Image src={star} width={15} height={15} className="rating" />
        ))}
      </div>
      <div className="travelDesc">
        <p>{desc}</p>
      </div>
      <div className="traveller">
        <div className="travellerProf">
          <Image src={pfp1} height={40} width={40} />
        </div>
        <div className="travellerDes">
          <h1>{name}</h1>
          <h2>{desg}</h2>
        </div>
      </div>
    </section>
    
  );
}

export default TravellerExpCard;
