import "../stylesheet/Proyecto.css"

export function Proyecto({ imagen, titulo, descripcion, vinculo }) {
    return (
            <div className="proyecto">
                <div className="overlay"></div>
                <a href={vinculo}>
                    <img src={`../src/img/proyecto${imagen}.jpg`} alt="proyecto"/>
                </a>
                <div className="info">
                    <h4>{titulo}</h4>
                    <p>{descripcion}</p>
                </div>
            </div>
    )
};