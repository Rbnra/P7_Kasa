import React from "react";
import "./CardInfo.scss";
import { useParams } from "react-router-dom";
import logements from "../../datas/logements.json";
import { CardData } from "../../components/galleryCard/GalleryCard";
import { Carousel } from "../../components/carousel/Carousel";
import { Collapse } from "../../components/collapse/Collapse";


export const CardInfo: React.FC = () => {
    const { id } = useParams()
    const cardDataGroup = logements.find((cardDataGroup: CardData) => cardDataGroup.id === id)
    return (
        <div className="CardInfo">
            <Carousel id={id} />
            <div className="info">
                <div className="section12">
                    <div className="info-section info-section1">
                        <div className="title-and-loc">
                            <h2>{cardDataGroup?.title} </h2>
                            <p>{cardDataGroup?.location} </p>
                        </div>
                        <div className="tags">
                            {cardDataGroup?.tags.map((tag, index) => (
                                <p key={index}>
                                    {tag}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="info-section info-section2">
                        <div className="account-info">
                            <p>{cardDataGroup?.host.name} </p>
                            <img src={cardDataGroup?.host.picture} alt="Image" />
                        </div>
                        <div className="stars-rating">
                            {
                                Array.from({ length: 5 }, (_, index) => (
                                    <i key={index} className={`fa-solid fa-star ${
                                        cardDataGroup && index < +cardDataGroup.rating ? 'active-star' : 'disabled-star'
                                    }`}
                                ></i>
                                ))
                            }
                        </div>
                    </div>
                    <div className="info-section info-section3">
                        <Collapse title="Description" content={cardDataGroup?.description} />
                        <Collapse title="Equipements" content={cardDataGroup?.equipments.map((equipment,index)=>(<span key={index}>{equipment} </span>))} />
                    </div>
                </div>
            </div>
        </div>
    )
}