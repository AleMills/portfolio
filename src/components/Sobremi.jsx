import React from "react";
import "../stylesheet/Sobremi.css"

export function Sobremi() {
    return (
        <div className="sobremi">
            <p className="titulo-seccion">SOBRE MÍ</p>
            <h2>Hola, soy <span>Alejandro Jofre</span></h2>
            <h3>Desarrolador Web</h3>
            <p>
                Me considero una persona creativa,
                entusiasta y comprometida con la excelencia en cada proyecto en el que me involucro.
                Desde muy temprana edad, descubrí mi fascinación por la tecnología
                y su capacidad para mejorar la forma en que interactuamos con el mundo.
                Esta pasión me llevó a sumergirme en el vasto y emocionante mundo del desarrollo web, donde encontré mi vocación.
                disfruto creando interfaces atractivas, intuitivas y responsivas que brinden una experiencia fluida y agradable a los usuarios.
                Soy un autodidacta apasionado y siempre estoy ansioso por aprender nuevas tecnologías y ampliar mi conjunto de habilidades.
                Me encanta enfrentar desafíos y buscar soluciones creativas para superarlos.
                Además, valoro la colaboración y el trabajo en equipo, ya que creo que es fundamental para el éxito de cualquier proyecto.
            </p>
            <p>Puedes descargar mi CV desde el siguiente Link</p>
            <button type="button" className="btn-cv">
                <a href="#">Descargar CV</a>
            </button>
        </div>
    )
}