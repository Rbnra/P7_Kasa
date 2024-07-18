import React, { ReactNode, useRef, useState } from "react";
import "./Collapse.scss"
export interface CollapseProps {
    title: string;
    content: ReactNode; /*Pour designer le type en react*/
}


export const Collapse: React.FC<CollapseProps> = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false)
    const [collapseHeight, setCollapseHeight] = useState(5.5);
    const pRef = useRef<HTMLParagraphElement | null>(null)


    const toggleCollapse = () => {
        setIsActive(!isActive)
        if (!isActive) {
            setCollapseHeight(((pRef.current?.offsetHeight || 0) / window.innerHeight) * 100 + 5)
        } else {
            setCollapseHeight(5.5)
        }
    }

    return (
        <div className={`serie ${isActive ? "active" : ""}`} style={{ height: `${collapseHeight}vh` }}>
            <h3>{title}
                <i onClick={toggleCollapse} className="fa-solid fa-chevron-up"></i>
            </h3>
            <p ref={pRef}>{content}</p>
        </div>
    )
}
