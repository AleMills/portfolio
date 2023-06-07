import React from "react";
import "../stylesheet/Inputs.css"

export function Inputs() {
    return (
        <div className="columna">
            <input type="text" id="name" placeholder="Tu nombre"/>
            <input type="email" id="correo" placeholder="Tu correo"/>
            <textarea name="name" id="mensaje" cols="30" rows="10" placeholder="Tu mensaje"></textarea>
            <button type="submit" className="btn-formulario">Enviar</button>
        </div>
    )
}