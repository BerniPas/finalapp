import data from '../data/data.json';



const Footer = () => {
    return (
        <>
            <footer>
                <ul>
                    <li>Redes</li>
                    <li>
                        <a href={data.redes_sociales.linkedin} target='_blank' rel="noopener noreferrer">LinkedIn</a>
                    </li>
                    <li>Facebook</li>
                    <li>Instragram</li>
                    <li>Twitter</li>
                </ul>

                <ul>
                    <li>Agencia Digital</li>
                    <li>creando experiencias  </li>
                </ul>
                <p>@Todos los derechos reservados</p>

            </footer>
        </>
    );
}


export default Footer;