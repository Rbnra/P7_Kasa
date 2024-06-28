import React from "react";
import imageAbout from "../../assets/ImageAbout.png";
import "./About.scss";

export const About: React.FC = () => {
    return (
        <div className="About">
            <div className="AboutCover">
                <img src={imageAbout} alt="photo de couverture" />
            </div>
        </div>
    )
}