import React, {useState} from 'react';
import styled from '@emotion/styled';
import {obtenerDiferenciaYear,calcularMarca,obtenerPlan} from '../helper';
import PropTypes from 'prop-types';

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none; /* Le quita la apariencia natural del select
    para poder aplicarle otras propiedades como border etc... */
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Boton = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #FFFFFF;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease; 
    margin-top: 2rem;

    /* Estilo de SASS */
    &:hover{
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;

const Formulario = ({setResumen,setCargando}) => {

    //State para guardar los datos del fomulario
    const [datos,setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    });

    //State para manejar los errores
    const [error,setError] = useState(false);



    //Extraer los valores del state
    const {marca,year,plan} = datos;

    //Leer los datos del formulario y colocarlos en el state
    const obtenerInformacion = (e) => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    //Cuando el usuario presiona submit
    const handleSubmit = (e) => {
        e.preventDefault();

        if(marca.trim() === '' || year.trim() === '' || plan.trim() === ''){
            return setError(true);
        }

        setError(false);

        //Una base de 2000
        //Cuantos más años tenga el coche menor será el precio del seguro
        let resultado  = 2000;

        // Obtener la diferencia de años: por cada año restamos el 3%
        const diferencia = obtenerDiferenciaYear(year);
        //console.log(diferencia);
        resultado -= ((diferencia * 3) * resultado) / 100;

        // Americano 15% 
        // Asiático 5% 
        // Europeo 30%
        resultado = calcularMarca(marca) * resultado;
        //console.log(resultado);

        // Básico aumenta 20%
        // Completo aumenta 50%
        const incrementoPlan = obtenerPlan(plan);
        //console.log(incrementoPlan);
        resultado = parseFloat(incrementoPlan * resultado).toFixed(2);
        //console.log(resultado);
        
        setCargando(true);

        setTimeout(() => {
            //Elimina el spinner
            setCargando(false);

            //pasa la información al componente principal
            setResumen({
                cotizacion: Number(resultado),
                datos
            });
        },3000);

        
    }


    return ( 
        <form
            onSubmit={handleSubmit}>

            {error ? <Error>Todos los campos son obligatorios</Error> : null}
            <Campo>
                <Label>Marca</Label>
                <Select
                    name="marca"
                    value={marca}
                    onChange={obtenerInformacion}>
                    <option value="">--Seleccione --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiático</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={obtenerInformacion}>
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Plan</Label>
                    <InputRadio
                        type="radio"
                        name="plan"
                        value="basico"
                        cheked={plan === 'basico'}
                        onChange={obtenerInformacion}
                    />Básico

                    <InputRadio
                    type="radio"
                    name="plan"
                    value="completo"
                    cheked={plan === 'completo'}
                    onChange={obtenerInformacion}
                    />Completo
            </Campo>

            <Boton type="submit">Cotizar</Boton>
        </form>
     );
}

Formulario.propTypes = {
    setResumen: PropTypes.func.isRequired,
    setCargando: PropTypes.func.isRequired
}
 
export default Formulario;