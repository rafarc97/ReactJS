import React, { Fragment, useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';


const Pregunta = ({guardarPresupuesto, guardarRestante,actualizarPregunta}) => {

    //Definimos el state
    const [cantidad, guardarCantidad] = useState(0);
    //Definimos otro state
    const [ error, guardarError ] = useState(false);


    //Función que lee el presupuesto
    const definirPresupuesto = e => {
        //parseInt para pasarlos de string a enteros ya que lo que se
        //lee de un input viene como un string
        //console.log(parseInt(e.target.value));
        guardarCantidad(parseInt(e.target.value, 10)); //le indicamos base 10
    }

    //Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault(); //para que no se pase al query stirng con el método get

        //Validar
        if(cantidad < 1 ||  isNaN(cantidad)){
            return guardarError(true);
        }

        //Si se pasa la validación
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }

    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error mensaje="El Presupuesto es incorrecto"/> : null}
            <form
                onSubmit={agregarPresupuesto}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                    required>
                </input>
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value = "Definir presupuesto">
                </input>
            </form>
        </Fragment>
     );
}

Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired

}
 
export default Pregunta;