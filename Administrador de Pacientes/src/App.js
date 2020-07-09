import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita.jsx';



function App() {

  //Citas en local storage (estamos leyendo del localStorage)
  //El localStorage solo almacena strings, por eso tenemos que hacer
  //el JSON.parse para que convierta el vector dentro de un string 
  //para que pueda ser fácilmente manipulable
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales) { 
    citasIniciales = [];
  }

  //Vector de citas
  const [citas, guardarCitas] = useState(citasIniciales);

  //Usamos useEffect para realizar ciertas operaciones cuando el state cambia
  //Los useEffects son siempre arrow functions y son algo similar al DOMContentLoaded de JS
  //useEffect se ejecuta cuando el componente está listo y también cuando hay cambios en 
  //el componente
  useEffect( () => {
    if(citasIniciales){
      localStorage.setItem('citas',JSON.stringify(citas));
    }else{
      localStorage.setItem('citas', JSON.stringify([]));
    }
    //console.log('Documento listo o algo paso con las citas');

    //le indicamos al useEffect con el vector citas para que cada vez que haya un cambio
    //en las citas este cambie. Si le pasaramos [], es decir un vector vacío el useEffect
    //solo se ejecutaría una vez
  }, [citas,citasIniciales]); 

  //Función que le agregue la nueva cita a las actuales
  const crearCita = cita => {
    //console.log(cita);
    guardarCitas([...citas,cita]);
  }

  //Función que elimina una cita por su id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  }
    //console.log(id);
 

    //Mensaje condicional
    const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';

  return (
    <Fragment>
            
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita = {crearCita}
            />
          </div>

          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita = {cita}
                eliminarCita = {eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>

    </Fragment>
  );
}
export default App;
