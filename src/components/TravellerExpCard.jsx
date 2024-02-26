"use client"
import React from 'react';
import { star, pfp1 } from '../../public';
import Image from 'next/image';
import styles from "../styles/TravellerExpCard.module.css";


const TravellerExpCard = ({ rating, desc, name, desg, img }) => {
  return (
    <section className={`${styles.expcard}`}>
      <div className={`${styles.travelRate}`}>
        {Array.from({ length: rating }).map((_, index) => (
          <Image src={star} width={15} height={15} className="rating" />
        ))}
      </div>
      <div className={`${styles.travelDesc}`}>
        <p>{desc}</p>
      </div>
      <div className={`${styles.traveller}`}>
        <div className={`${styles.travellerProf}`}>
          <Image src={pfp1} height={40} width={40} />
        </div>
        <div className={`${styles.travellerDes}`}>
          <h1>{name}</h1>
          <h2>{desg}</h2>
        </div>
      </div>
    </section>
    
  );
}

export default TravellerExpCard;
