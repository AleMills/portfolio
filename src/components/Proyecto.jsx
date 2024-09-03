import "../stylesheet/Proyecto.css"

export function Proyecto({ imagen, titulo, descripcion, vinculo }) {

    const imageSrc = new URL(`../img/proyecto${imagen}.jpg`, import.meta.url).href;

    return (
            <div className="proyecto">
                <div className="overlay"></div>
                <a href={vinculo}>
                    <img src={imageSrc} alt="proyecto"/>
                </a>
                <div className="info">
                    <h4>{titulo}</h4>
                    <p>{descripcion}</p>
                </div>
            </div>
    )
};