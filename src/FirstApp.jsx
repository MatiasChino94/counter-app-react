//import { Fragment } from 'react';
import PropTypes from 'prop-types';


//const newMesaage = 'Matias';

// const saludoPersona = (nombre) => {
//     return `hola ${nombre} `;
// }

// const persona = {
//     nombre: 'Matias',
//     apellido: 'Martinez',
// };

export const FirstApp = ({ title = 'No hay titulo', subtitle = 'soy un subtitulo', name = 'Programador' }) => {

    return (
        <>
            <h1 data-testid="test-title" >{title}</h1>
            <p>{ subtitle }</p>
            <p>{ subtitle }</p>
            <p>{ name }</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
}

