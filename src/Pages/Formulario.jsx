
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function Formulario() {
    const [validated, _SETVALIDATED] = useState(false);

    /* nuevos estados para la carga de productos */
    const [producto, setProducto] = useState('');
    const [tipo, setTipo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [stock, setStock] = useState('');

    const handleSubmit = (event) => {
        const form = event.currentTarget;


        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        if (form.checkValidity() === true) {
            event.preventDefault();
            alert('Formulario enviado correctamente');
            console.log(producto, tipo, descripcion, precio, stock);
        }

    /* limpiamos los datos */
        setProducto('');
        setTipo('');
        setDescripcion('');
        setPrecio('');
        setStock('');

    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="container mt-5 mb-5">
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Producto</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nombre del producto"
                        value={producto}
                        onChange={(e) => setProducto(e.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Tipo</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Tipo de producto"
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Descripción del producto"
                        value={descripcion} 
                        onChange={(e) => setDescripcion(e.target.value)} 
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a description.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>Stock</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="Stock" 
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid stock.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="Precio" 
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid precio.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Button type="submit">Cargar Productos</Button>
        </Form>
    );
}

export default Formulario;

/* Tarea:
- modificar el formulario para cargar productos, crear estados para cada campo - done
- crear un componente admin
*/