import { Link } from "react-router-dom";

export interface CardData {
    id: string,
    title: string,
    cover: string,
    pictures: string[],
    description: string,
    host: {
        name: string,
        picture: string,
    }
    rating: string,
    location: string,
    equipments: string[],
    tags: string[],
}

interface GalleryCardProps {
    cardData:CardData
}

export const GalleryCard:React.FC<GalleryCardProps> = ({ cardData }: { cardData: CardData }) => (
    <Link to={`/card/${cardData.id}`}>
        <div className="card">
            <img src={cardData.cover} alt="Cover" />
            <h2>{cardData.title}</h2>
        </div>
    </Link>
);