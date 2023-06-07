import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import "../stylesheet/Nav.css"

export function Nav() {
    return (
        <div className="contenido-nav">
            <h1>/AJ/</h1>
            <button className="abrir-menu" id="abrir"><GiHamburgerMenu /></button>
            <nav className="nav" id="nav">
                <div className="btn-cerrar" id="cerrar">
                    <button className="cerrar-menu"><AiFillCloseCircle /></button>
                </div>
                <ul className="links">
                    <li>
                        <a href="#inicio">INICIO</a>
                    </li>
                    <li>
                        <a href="#sobremi">SOBRE MI</a>
                    </li>
                    <li>
                        <a href="#habilidades">HABILIDADES</a>
                    </li>
                    <li>
                        <a href="#portfolio">PROYECTOS</a>
                    </li>
                    <li>
                        <a href="#contacto">CONTACTO</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}