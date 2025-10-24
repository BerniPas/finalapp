


const Boton = (props) => {
    return (
        <button className={props.clase} style={props.estilo}>
            {props.texto}
        </button>
    );
}   

export default Boton;

//desestructuracion
// const Boton = ({texto, estilo, clase}) => {
//     return (
//         <button 
//              className={clase} 
//              style={estilo}
//             >
//             {texto}
//         </button>
//     );
// }

// export default Boton;


