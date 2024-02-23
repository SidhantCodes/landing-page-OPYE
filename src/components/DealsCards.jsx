import Image from 'next/image';
const DealsCards = ({ imageUrl,dealsName, DealsDescription }) => {
    return (
        <div className="card ">
            <div className="card_img">
            <Image src={imageUrl} alt={dealsName} width={370} height={382} />
            </div>
            <div className="card_caption">
                <h2 className="text-lg font-semibold">{dealsName}</h2>
                <p className="text-sm">{DealsDescription}</p>
            </div>
        </div>
    );
};

export default DealsCards;