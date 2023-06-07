import React from "react";
import "../stylesheet/Contactarme.css"

export function Contactarme( {icono, contacto}) {
    return (
        <div>
                <figure className="iconos-contacto">
                    {icono} <span>{contacto}</span>
                </figure>
        </div>
    )
}