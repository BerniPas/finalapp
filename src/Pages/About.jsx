import imagenCuatro from '../assets/img4.png';
import Boton from '../Componentes/Boton';

import '../css/estilosComponentes.css';


const About = () => {

    let textoBoton = "Visitá LinkedIn";

    let estiloBoton = {
        marginTop: "20px",
        padding: "10px 20px",
        backgroundColor: "blue",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
}


return (
    <section>
        <div>
            <img src={imagenCuatro} alt="Imagen 4" />
        </div>
        <div className="cuarenta">

            <h2>Formá parte de nuestro equipo</h2>
            <p>visitá nuestro perfil de LinkedIn</p>

            <Boton 
                texto={textoBoton}
                estilo={estiloBoton}
            />
        </div>
    </section>
);
}


export default About;