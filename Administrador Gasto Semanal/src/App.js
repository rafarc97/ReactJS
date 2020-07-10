import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';


function App() {


  //Definimos el state
  const [ presupuesto, guardarPresupuesto ] = useState(0);
  const [ restante, guardarRestante ] = useState(0);
  const [ mostrarpregunta, actualizarPregunta] = useState(true);
  const [ gastos, guardarGastos ] = useState([]);
  const [ gasto, guardarGasto ] = useState({});
  const [ creargasto, guardarCrearGasto ] = useState(false);
        

  //Definimos el useEffect que actualiza el restante
  useEffect(() => {
    if(creargasto){

      //Agrega el nuevo presupuesto
      guardarGastos([...gastos,gasto]);

      //Resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);

      //Resetear a false
      guardarCrearGasto(false);
    }
  }, [gasto,creargasto, gastos, restante]);


  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          {/* Aquí aplicamos la carga condicional de un componente.
          En este caso la primera vez que añadimos nuestro presupuesto
          se carga el componente Pregunta, a partir de ahí ya se carga
          el Formulario para poder ir añadiendo los gastos */}
          {mostrarpregunta ?  
          (
            <Pregunta
            guardarPresupuesto = {guardarPresupuesto}
            guardarRestante = {guardarRestante}
            actualizarPregunta = {actualizarPregunta}
          />
          ) :  
          (
          <div className="row">
            <div className="one-half-column">
              <Formulario
                guardarGasto={guardarGasto}
                guardarCrearGasto={guardarCrearGasto}
              />
            </div>
            <div className="one-half-column">
              <Listado
                gastos={gastos}
              />

              <ControlPresupuesto
                presupuesto={presupuesto}
                restante={restante}
              />
            </div>
          </div>
          )}
        </div>  
      </header>
    </div>
  );
}

export default App;