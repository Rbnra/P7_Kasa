import React from "react";
import "./Gallery.scss";
import mainBanner from "../../assets/images/ImageHome.png";
import logements from "../../datas/logements.json";
import { CardData, GalleryCard } from "../../components/galleryCard/GalleryCard";


export const Gallery: React.FC = () => {
    return (
        <div className="Gallery">
            <div className="mainBanner">
                <img src={mainBanner} alt="Banner" />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className="cards-container">
                {logements.map((cardData: CardData) => <GalleryCard key={cardData.id} cardData={cardData} />
                )
                }
            </div>
        </div>
    )
}
