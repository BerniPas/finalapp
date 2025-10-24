import { Link } from "react-router-dom";
import Boton from "../Componentes/Boton.jsx";

function Error() {

    let estiloTitulo = {
        textAlign: "center",
        marginTop: "50px",
        color: "rgb(244, 6, 6)"
    };

    let estiloImagen = {
        textAlign: "center",
        marginTop: "30px"
    };

    let estiloBoton = {
        marginTop: "20px",
        padding: "10px 20px",
        backgroundColor: "red",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
    };

    return (
        <>
            <h1 style={estiloTitulo}>
                Página no encontrada
            </h1>

            <div style={estiloImagen}>
                <img src="https://ligadebolsa.com/wp-content/uploads/2020/01/error.jpg" alt="error en el acceso" />

                    <h2>
                        <Link to="/">
                            <Boton 
                                texto="Volver a Inicio" estilo={estiloBoton} 
                            />
                        </Link>
                    </h2>

            </div>
        </>
    )
}

export default Error;
