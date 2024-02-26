import Image from 'next/image';
import styles from "../styles/DestinationCards.module.css"

const DestinationCards = ({ imageUrl, destinationName, locDescription }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_img}>
        <Image src={imageUrl} alt={destinationName} width={300} height={200} />
        <h1>{destinationName}</h1>
      </div>
      <div className={styles.card_caption}>
        <h2>{destinationName}</h2>
        <p>{locDescription}</p>
      </div>
    </div>
  );
};

export default DestinationCards;