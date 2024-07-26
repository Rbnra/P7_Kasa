import { Link } from "react-router-dom";
import error404 from "../../assets/images/404.png";
import React from "react";
import "./Error404.scss"


export const Error404: React.FC = () => {
    return (
        <div className="error">
            <img src={error404} alt="Error" className="errorNumber" />
            <p className="error_">Oups! La page que vous demandez n'existe pas.</p>
            <Link to={{ pathname: "/" }} className="accueil">Retourner sur la page d’accueil</Link>
        </div>
    )
}