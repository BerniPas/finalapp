import imagenUno from '../assets/AndresGarcia.png';
import imagenDos from '../assets/VeraRodriguez.png';
import imagenTres from '../assets/MariaSanchez.png';



const Testimonios = () => {
    return (
        <section>

            <h4>Testimonios</h4>
            <h2>Nuestros clientes hablan</h2>
            <div> <img src={imagenUno} alt="Andres García" />
                <h3>Andrés García</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>

            </div>
            <div> <img src={imagenDos} alt="Vera Rodriguez" />
                <h3>Vera Rodriguez</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>

            </div>
            <div> <img src={imagenTres} alt="María Sanchez" />
                <h3>María Sanchez</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>

            </div>
        </section>
    );
}


export default Testimonios;