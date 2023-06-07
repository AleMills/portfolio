import { react } from "react";
import "../stylesheet/Proyecto.css"

export function Proyecto({ imagen, titulo, descripcion }) {
    return (
            <div className="proyecto">
                <div className="overlay"></div>
                <a href="#">
                    <img src={require(`../asset/img/proyecto${imagen}.jpg`)} alt="proyecto"/>
                </a>
                <div className="info">
                    <h4>{titulo}</h4>
                    <p>{descripcion}</p>
                </div>
            </div>
    )
};