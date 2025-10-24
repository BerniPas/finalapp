import imagenUno from '../assets/img1.png'
import imagenDos from '../assets/img2.png'
import imagenTres from '../assets/img3.png'
import data from '../data/data.json'

import { Link } from 'react-router-dom'



const Home = () => {

    return (
        <>
            <header>
                <div className="cuarenta">
                    <h1>Creando Experencia y Marca</h1>

                    <p>
                        Agencia Digital al servicio del cliente y de su marca. Completa este <Link to="/formulario">Formulario</Link> para contactarnos.

                        {/* 
                        Utilizar el componente Boton con sus props para mostrar el formulario
                        */}
                    </p>
                </div>
                <div>
                    <img src={imagenUno} alt="imagen de la empresa" />
                </div>
            </header>
            <section>
                <div>
                    <img src={imagenDos} alt="Diseño de Marca e Imagen" />
                </div>
                <div className="cuarenta">
                    <h2>Diseño de Marca e Imagen</h2>
                    <p>{data.nosotros.mision}</p>
                    <p>{data.nosotros.vision}</p>
                </div>
            </section>
            <section>
                <div className="cuarenta">
                    <h2>Desarrollo de Marca</h2>

                    <p>Comúnmente utilizado en la industria gráfica, de impresión y publicación.</p></div>
                <div>     <img src={imagenTres} alt="Desarrollo de Marca" /> </div>

            </section>
        </>

    )
}

export default Home