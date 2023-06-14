import React from "react";

export function Redes({ icono, clickRedes }) {
    // const [clickRedes, setClickRedes] = useState(false);
    // const mostrarRedes = () => {
    //     setVisible(!clickRedes);
    // }

    return(
        <>
            <a className={`link ${clickRedes}`} href="#" target="_blank">
                {icono}
            </a>
        </>
    )
}