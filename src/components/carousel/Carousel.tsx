import React, { useId, useState } from "react";
import logements from "../../datas/logements.json";
import { CardData } from "../galleryCard/GalleryCard";
import "../carousel/Carousel.scss"

interface CarouselProps {
    id?: string
}

export const Carousel: React.FC<CarouselProps> = ({ id }) => {
    const idImg = useId()
    const imgToDisplay = (logements as CardData[]).find(card => card.id === id)?.pictures || []
    const [currentIndexImage, setCurrentIndexImage] = useState<number>(0);
    const nextImage = () => {
        setCurrentIndexImage((currentIndexImage + 1) % imgToDisplay.length)
    }
    const prevImage = () => {
        setCurrentIndexImage((currentIndexImage - 1 + imgToDisplay.length) % imgToDisplay.length)
    }



    return (
        <div className="Carousel">
            {imgToDisplay.map((imgUrl, index) => (<img src={imgUrl} alt="image alternatif" key={`${index}-${idImg}`}
                className={index === currentIndexImage ? "active" : "disabled"} />))
            }

            {imgToDisplay.length > 1 &&
                <> <div className='left-right-div'>
                    <span className='left' onClick={prevImage}><i className="fa-solid fa-chevron-left"></i></span>
                    <span className='right' onClick={nextImage}><i className="fa-solid fa-chevron-right"></i></span>
                </div>
                    <p>{currentIndexImage + 1}/{imgToDisplay.length}</p> </>

            }
        </div>
    )
}