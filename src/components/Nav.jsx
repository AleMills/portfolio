import React from "react";
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import "../stylesheet/Nav.css"

export function Nav() {
    const [visible, setVisible] = useState(false);

    const clicked = () => {
        setVisible(!visible);
    }

    return (
        <div className="contenido-nav">
            <h1>/AJ/</h1>
            <button onClick={clicked} className="abrir-menu" id="abrir"><GiHamburgerMenu /></button>
            <nav className={`nav ${visible ? "visible" : ""}`} id="nav">
                <div onClick={clicked} className="btn-cerrar" id="cerrar">
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