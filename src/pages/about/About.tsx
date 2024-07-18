import React from "react";
import imageAbout from "../../assets/images/ImageAbout.png";
import "./About.scss";
import collapseContent from "../../datas/string.json";
import { Collapse } from "../../components/collapse/Collapse";

export const About: React.FC = () => {
    return (
        <div className="About">
            <div className="aboutCover">
                <img src={imageAbout} alt="photo de couverture" />
            </div>
            <div className="collapse">
                {
                    Object.entries(collapseContent).map(([title, content]) => (
                        <Collapse title={title} content={content} />
                    ))
                }
            </div>
        </div>
    )
}