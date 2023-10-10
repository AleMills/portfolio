import React from "react";
import "../stylesheet/Bienvenida.css"

export function Bienvenida() {
    return (
        <div className="bienvenida">
            <p className="saludo">bienvenidos</p>
            <h2 className="quien-soy">Soy <span>Alejandro</span>, Desarrollador Frontend</h2>
            <p className="descripcion">A continuación veras los proyectos que he realizado hasta el momento, que lo disfrutes!</p>
            <button className="btn-inicio">
                <a href="#comenzar">comenzar</a> 
            </button>
        </div>
    )
}