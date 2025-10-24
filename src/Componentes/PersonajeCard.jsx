


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PersonajeCard({personajes}) {
    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={personajes.image} />
            <Card.Body>
                <Card.Title>{personajes.name}</Card.Title>
                <Card.Text className='text-center'>
                    {personajes.gender} - {personajes.species}
                </Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
        </Card>
    );
}

export default PersonajeCard;