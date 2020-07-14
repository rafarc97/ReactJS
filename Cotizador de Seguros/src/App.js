import React,{useState} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';
import styled from '@emotion/styled';

/* La librería emotion añade muchos componentes a nuestra app */

/* En este proyecto se va a poner en práctica los Styles Components, librería que se utiliza para
no tener una hoja de estilos css de 800 líneas */

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;


function App() {

  const [resumen,setResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  const [cargando,setCargando] = useState(false);


  //Extraer datos
  const {cotizacion, datos} = resumen;
  

  return (
    <Contenedor>

      <Header
      titulo='Cotizador de Seguros'
      />

      {/* Los styled components tendrán dos etiquetas de apertura y cierre o una sola de apertura/cierre en 
      función del tipo de etiqueta al que haga referencia. Si por ejemplo fuera un styled componetns de un img, tendría
      solo una etqueta de apertura/cierre */}

      <ContenedorFormulario>
        <Formulario
          setResumen={setResumen}
          setCargando={setCargando}/>

          {cargando ? <Spinner/> : null}

          <Resumen
            datos={datos}
          />

          {!cargando 
          ? 
            <Resultado
              cotizacion={cotizacion}
              />
          : null
          }
      
      </ContenedorFormulario> 

    </Contenedor>
  );
}

export default App;