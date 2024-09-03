
import "../stylesheet/Inputs.css"
import { useState } from "react";

export function Inputs() {
    const [enviado, setEnviado] = useState(false)
    const texto = enviado ? "Enviado" : "Enviar"
    const enviar = () => {
        setEnviado(true)
    }

    return (
        <div className="columna">
            <input type="text" name="name" id="name" placeholder="Tu nombre"/>
            <input type="email" name="email" id="email" placeholder="Tu correo"/>
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Tu mensaje"></textarea>
            <button onClick={enviar} type="submit" className={`btn-formulario ${texto}`}>{texto}</button>
        </div>
    )
}