import { useState, useEffect } from 'react';

// import de axios: para uso de API REST o peticiones HTTP
import axios from 'axios';

// componente hijo al que le pasaremos los datos y nos devolverá la card
import ProductosCard from '../Componentes/ProductosCard.jsx';
import data from '../data/data.json';


const Productos = () => {

    // estado para guardar los productos
    const [productos, setProductos] = useState([]);

    //TRAER LA URL DE LA API DESDE EL ENV
    const API_PRODUCTOS = import.meta.env.VITE_API_PRODUCTOS;


    

    // useEffect para cargar los personajes al montar el componente
    useEffect(() => {
        // llamada a la API de productos con axios
        axios.get(`${API_PRODUCTOS}`)
            .then(res => {
                /* imprimo en consola la variable que contiene los productos */
                console.log(res.data.products);
                setProductos(res.data.products);

            });
    }, [API_PRODUCTOS]);

    const estilos = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        flexWrap: 'wrap',
        gap: '20px'
    }



    return (
        <div>
            <h1 className='text-center mt-5'>{data.titulo}</h1>
            <div style={estilos}>
                {productos.map(producto => (
                    <div key={producto.id}>
                        <ProductosCard productos={producto} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Productos