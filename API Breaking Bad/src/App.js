import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';


const Contenedor = styled.div`
  display:flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;


function App() {

  //state de frases
  const [frase,setFrase] = useState({});

  const consultarAPI = async () => {
    //console.log('consultado...');
    /* Fetch funciona con el tipo d dato Promises */
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json();
    setFrase(frase[0]);
    //console.log(frase[0]);
  }

  //cargar una frase
  useEffect(() => {
    consultarAPI();
  },[]);


  /* 
  La llamada a la función del onCLick se podría hacer también así: onClick={consultarAPI}
  De esta forma NO pq no esperaría al click, sino que se ejecutaría directamente: onClick={ consultarAPI()}
  */


  /* 
  API:

  -Funciones, métodos que ofrece una librería para ser utilizada por otro software

  -Web Service es cuando podemos conectarnos a un servicio via web

  -Para acceder al servicio hay que enviar una petición estructurada y otras veces
  solo basta con abrir una URL.

  -Usualmente se usa JSON. (a veces también XML)

  -Ejemplo: Google Maps API


  REST API'S: 

  -Es una forma de transladar datos de un dominio dentro de otro.

  -Puede ser diseñada y consumidas en cualquier lenguaje.

  -Podemos tener un proyecto en Python y que los consuma otro en Java.

  -REST describe como deben ponerse a disposición los recursos.

  -La API debe responder a los request de HTTP: GET POST PUT PATCH y DELETE.

  -Cada API tiene sus propias reglas, métodos y estucturas.

  -Una REST API cuenta con Endpoints (o Urls) para hacer operaciones CRUD.
  Por ej para listar todos los clientes hacemos un GET a /clientes
  Por ej para obtener un solo cliente hacemos un GET a /clientes/10
  Para crear un nuevo cliente hacemos un POST a /clientes
  Para editar un cliente hacemos un PUT a /clientes/3
  Para borrar un cliente hacemos un DELETE a /clientes/8
  
  CONSULTAR API'S CON REACT:

  Las 3 formas más comunes son:
  
  -Usando Fetch API y Ajax (nativo de JS).

  -Axios.

  -JQuery Ajax. (esta no la vamos a ver).
  */


  return (
    <Contenedor>
      <Frase
        frase={frase}
      />
        
      
      <Boton
        onClick={consultarAPI}
      >
      Obtener Frase
      </Boton>
    </Contenedor>
  );
}

export default App;