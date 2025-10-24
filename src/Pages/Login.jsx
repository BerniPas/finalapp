
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Boton from '../Componentes/Boton.jsx';
import axios from 'axios';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

function sumar(a, b) {
    let resultado = a + b;
    return resultado;
}


function Login() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [comentarios, setComentarios] = useState('');

    const navigate = useNavigate();

    const API_URL = import.meta.env.VITE_API_LOCAL;


    /* Creamos la función para el envío de los datos */
    const enviarDatos = (e) => {
        e.preventDefault();
        console.log(email, password, comentarios);

        axios.post(API_URL, {
            email: email,
            password: password,
            comentarios: comentarios
        })
            .then(function (response) {
                console.log(response);
                localStorage.setItem('userData', JSON.stringify(email));
                Swal.fire({
                    title: "Datos enviados correctamente",
                    icon: "success",
                    draggable: true
                });

                navigate('/formulario');
            })
            .catch(function (error) {
                alert('Error en el envío');
                Swal.fire({
                    title: "Error en el envío",
                    icon: "error",
                    draggable: true
                });
                console.log(error);
                navigate('/login');
            });

        limpiarDatos();
    };

    /* Creamos la función para limpiar los datos */
    const limpiarDatos = () => {
        setEmail('');
        setPassword('');
        setComentarios('');
    };

    return (
        <Form className='container mt-5 mb-5' onSubmit={enviarDatos} >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    pattern='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Contraseña:</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Minimo 8 caracteres"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    minLength={8}
                    maxLength={16}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Comentarios Personales:</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    value={comentarios}
                    onChange={(e) => setComentarios(e.target.value)}
                />
            </Form.Group>
            <div className='d-flex justify-content-center'>
                <Boton
                    texto="Enviar Datos"
                    type="submit"
                />
                <Boton
                    texto="Limpiar Datos"
                    onClick={limpiarDatos}
                />
            </div>

            <h2 className='mt-5 text-center'>
                Resultado de la suma: {sumar(5, 3)}
            </h2>
        </Form>
    );
}

export default Login;