import logo from './logo.svg';
import imagenPerfil from "./asset/img/img_perfil.jpg";
import videoBg from "./asset/video/fondoVideo.mp4";

import './App.css';

import { Nav } from "./components/Nav";
import { Bienvenida } from "./components/Bienvenida";
import { Sobremi } from "./components/Sobremi";
import { Habilidad } from "./components/Habilidad";
import { Proyecto } from "./components/Proyecto";
import { Contactarme } from "./components/Contactarme";
import { Inputs } from "./components/Inputs";

import { FaHtml5, FaCss3Alt, FaSass, FaGitAlt, FaReact, FaBootstrap, FaPhoneAlt } from "react-icons/fa";
import { IoLogoJavascript, IoMdMail, IoIosPin } from "react-icons/io";

function App() {
    
// const nav = document.querySelector("#nav");
// const abrir = document.querySelector("#abrir");
// const cerrar = document.querySelector("#cerrar");

// abrir.addEventListener("click", () => {
// nav.classList.add("visible");
// });

// cerrar.addEventListener("click", () => {
// nav.classList.remove("visible")
// })



    return (
        <div className="App">
            <section className="inicio" id="inicio">
                <video src={videoBg} type="video/mp4" className="video" autoPlay muted loop>
                </video>
                <header>
                    <Nav />
                </header>
                <div className="overlay"></div>
                <Bienvenida />
            </section>
            <section id="sobremi">
                <div className="contenedor-foto" id="comenzar">
                    <img
                        src={imagenPerfil}
                        alt="Foto de Perfil" />
                </div>
                <Sobremi />
            </section>
            <section className="habilidades" id="habilidades">
                <div className="blur">
                    <div className="fila">
                        <Habilidad
                            icono={<FaHtml5 />}
                            lenguaje="HTML5" />
                        <Habilidad
                            icono={<FaCss3Alt />}
                            lenguaje="CSS3" />
                        <Habilidad
                            icono={<IoLogoJavascript />}
                            lenguaje="Javascript" />
                    </div>
                    <div className="fila">
                        <Habilidad
                            icono={<FaSass />}
                            lenguaje="Sass" />
                        <Habilidad
                            icono={<FaGitAlt />}
                            lenguaje="Git" />
                        <Habilidad
                            icono={<FaReact />}
                            lenguaje="React" />
                        <Habilidad
                            icono={<FaBootstrap />}
                            lenguaje="Bootstrap" />
                    </div>
                </div>
            </section>
            <section className="portfolio" id="portfolio">
                <h3 className="titulo-seccion">MIS PROYECTOS</h3>
                <div className="fila">
                    <Proyecto
                        imagen="1"
                        titulo="Tributo"
                        descripcion="Diseño y lectura" />
                    <Proyecto
                        imagen="2"
                        titulo="Tributo"
                        descripcion="Diseño y lectura" />
                    <Proyecto
                        imagen="3"
                        titulo="Tributo"
                        descripcion="Diseño y lectura" />
                </div>
            </section>
            <section className="contacto" id="contacto">
                <form action="name">
                    <div className="columna">
                        <h4 className="titulo-contacto">Contactame</h4>
                        <p>
                            Estoy emocionado por formar parte de proyectos inspiradores
                            y contribuir al éxito de empresas y emprendedores
                            con mis habilidades en desarrollo web frontend.
                            Si estás buscando un profesional dedicado, orientado a los detalles
                            y apasionado por la creación de experiencias digitales excepcionales,
                            ¡no dudes en contactarme!
                        </p>
                        <Contactarme
                            icono={<IoMdMail />}
                            contacto="Alejandrojofre949@gmail.com"
                        />
                        <Contactarme
                            icono={<FaPhoneAlt />}
                            contacto="+54 9 1121931011"
                        />
                        <Contactarme
                            icono={<IoIosPin />}
                            contacto="Buenos Aires, Argentina."
                        />
                    </div>
                    <Inputs />
                </form>
            </section>
        </div>
    );
}

export default App;


