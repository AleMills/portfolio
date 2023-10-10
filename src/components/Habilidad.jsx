import React from "react";
import "../stylesheet/Habilidad.css"


export function Habilidad( {icono, lenguaje} ) {
    return (
        <div className="habilidad">
            <figure className="icono">
                {icono}
            </figure>
            <p className="nombre-icono">
                {lenguaje}
            </p>
        </div>
    )
}