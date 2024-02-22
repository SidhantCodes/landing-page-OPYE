import Image from 'next/image';

const DestinationCards = ({ imageUrl, destinationName, locDescription }) => {
  return (
    <div className="card">
      <div className="card_img">
        <Image src={imageUrl} alt={destinationName} width={300} height={200} />
        <h1>{destinationName}</h1>
      </div>
      <div className="card_caption">
        <h2>{destinationName}</h2>
        <p>{locDescription}</p>
      </div>
    </div>
  );
};

export default DestinationCards;
