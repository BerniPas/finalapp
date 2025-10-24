


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductosCard({productos}) {
    const placeholder = 'https://via.placeholder.com/300x200?text=Sin+imagen';

    const handleImgError = (e) => {
        e.target.src = placeholder;
    };

    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={productos.thumbnail} onError={handleImgError} alt={productos.title} />
            <Card.Body>
                <Card.Title>{productos.title}</Card.Title>
                <Card.Text className='text-center'>
                    {productos.description}
                </Card.Text>
                <Card.Text className='text-center'>
                    ${productos.price}
                </Card.Text>
                <Button variant="primary" disabled={productos.stock === 0}>{productos.stock === 0 ? 'Agotado' : 'Comprar'}</Button>
            </Card.Body>
        </Card>
    );
}

export default ProductosCard;