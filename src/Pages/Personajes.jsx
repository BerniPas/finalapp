import { useState, useEffect } from 'react';
import axios from 'axios';
import PersonajeCard from '../Componentes/PersonajeCard.jsx';
import data from '../data/data.json';


const Personajes = () => {

    // estado para guardar los personajes
    const [personajes, setPersonajes] = useState([]);

    //TRAER LA URL DE LA API DESDE EL ENV
    const API_PERSONAJES = import.meta.env.VITE_API_PERSONAJES;

    console.log(import.meta.env);
    console.log(API_PERSONAJES);

    // useEffect para cargar los personajes al montar el componente
    useEffect(() => {
        // llamada a la API de Rick and Morty con axios
        axios.get(`${API_PERSONAJES}`)
            .then(res => {
                console.log(res.data.results);
                setPersonajes(res.data.results); 

            });
    }, [API_PERSONAJES]);

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
                {personajes.map(personajes => (
                    <div key={personajes.id}>
                        <PersonajeCard personajes={personajes} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Personajes
