import React from "react";

export function Redes({ icono, clickRedes, redSocial }) {
    // const [clickRedes, setClickRedes] = useState(false);
    // const mostrarRedes = () => {
    //     setVisible(!clickRedes);
    // }

    return(
        <>
            <a className={`link ${clickRedes}`} href={redSocial} target="_blank">
                {icono}
            </a>
        </>
    )
}