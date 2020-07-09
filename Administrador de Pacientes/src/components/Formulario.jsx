import React, { Fragment, useState} from 'react';
import { v4 as uuidv4 } from 'uuid'; //importamos la version 4
/* Los proptypes es una forma de documentar nuestro Componente */
import PropTypes from 'prop-types'; 


const Formulario = ({crearCita}) => {

    //Crear State de Citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [ error, actualizarError ] = useState(false)

    //Función que se ejecuta cada vez que el usuario 
    //escribe en un input

    const handleChange = e => {
        //imprime el name del input donde se escribió
        console.log(e.target.name);
        //'escribiendo...' se escribe cada vez que se escribe
        //algo en algún input
        console.log('escribiendo...');
        //e.target.value devuelve lo que se está escribiendo
        //en el input
        console.log(e.target.value);

        
        actualizarCita({
            /*copiamos con el spread operator los datos que habían
            almacenados de antes en el formulario y le añadimos
            los nuevos con la 2ª línea
            */
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    //Extraer los valores del formulario
    const { mascota, propietario, fecha, hora, sintomas} = cita;


    //Cuando el usuario presiona agregar cita
    const submitCita = e => {
        /* usamos el prevent porque por defecto se envia al
        query string a través del método get */
        e.preventDefault();

        //Validamos los datos de entrada
        //trim eliminar los espacios en blanco
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true);
            return console.log('Hay un error');
        }

        //Eliminar el mensaje previov (si no hay error)
        actualizarError(false);

        //Asignar un ID
        //Para generar ids descargamos el paquete uuid de npm
        cita.id = uuidv4();

        //Crear la cita (colocarla en el state principal)
        crearCita(cita);

        //Reiniciar el form
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        });

    }
    return ( 
        <Fragment>
            <h2>Crear Cita</h2>

            { error ? <p className="alerta-error">Todos los campos son obligatorios</p> 
            : null}
            {/* El atributo value nos va a permitir resetear
            nuestro formulario */}
            <form
                onSubmit={submitCita}>
                <label>Nombre Mascota</label>
                <input 
                    type="text" 
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={handleChange}
                    value={mascota}
                    required>
                </input>

                <label>Nombre Dueño</label>
                <input 
                    type="text" 
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la mascota"
                    onChange={handleChange}
                    value={propietario}
                    required>
                </input>

                <label>Fecha</label>
                <input 
                    type="date" 
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                    required>
                </input>
            
                <label>Hora</label>
                <input 
                    type="time" 
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                    required>
                    </input>

                <label>Síntomas</label>
                <textarea 
                    name="sintomas"
                    className="u-full-width"
                    onChange={handleChange}
                    value={sintomas}
                    required>
                </textarea>

                <button 
                    type="submit"
                    className="u-full-width button-primary"
                    onChange={handleChange}
                    required>
                    Agregar Cita</button>
            </form>
        </Fragment>
     );
}

/* Uso de los proptypes para documentar el componente Formular */
Formulario.propTypes = {
    //Indicamos que le pasamos la función crearCita desde el App.js al
    //componente Formulario
    crearCita: PropTypes.func.isRequired
}
 
export default Formulario;