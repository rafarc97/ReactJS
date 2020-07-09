import React, { Fragment, useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Producto from './components/Producto.jsx';
import Carrito from './components/Carrito.jsx';

/* Este curso lo vamos a hacer con React Hooks, que están
disponibles desde la versión 16.8 y seguirán en la versión
17 siendo la principal forma de escribir código en React.

Nos permitirán actualizar el State sin necesidad de crear
un Class Component, es decir haciendolo simplemente con
funciones.

La cantidad de código de los Hooks es menor.

Existe un Hook que es el que más usaremos y se llama Usestate
y vienen con una función llamada useState y se importa así:
import React, { useState } from 'react';

Existen otros muchos Hooks aunque los que usaremos serán
unos 3 o 4 principalmente.

Los Hooks se dividen en 2 grupos:
-Básicos (los que usaremos en este curso como useState y useEffect)
-Avanzados (solo usaremosa algunos como useContext, useRef, useReducer,
useCallback y useMemo)

Los beneficios de los Hooks son:
-Menor cantidad de código
-Mayor facilidad para implementar reducers, administrar el state
y context.

*/

/* El State es una de las partes más importantes en React.
En el State vamos a colocar todo lo que vaya a reaccionar a 
varias acciones de nuestros usuarios, por ejemplo los datos
de un formulario, cuando un usuario esté rellenándolo, vamos
a crear un State. Otro ejemplo sería un carrito de compra,
cada vez que un usuario añada algún producto nosotros iremos
leyéndolo. */





/* EL STATE NO SE PUEDE MODIFICAR DIRECTAMENTE EN EL APP, PARA
ESTO SE USAN LA FUNCIÓN (EN ESTE CASO guardarProductos y 
agregarProducto) */





/* Importamos el Fragment para poder devolver un Fragment
en lugar de un div como teníamos, porque tenemos que
intentar devolver el mínimo código HTML posible */

/* Existen diferentes formas de como fluyen los datos en
React entre los componentes. Usualmente en React fluyen
desde el componente principal (App) a los internos. */

/* En este espacio antes de los componentes podemos escribir
código JS seguro para luego usarlo en nuestro componente
(paso de variables, etc...) */
function App() {

  //Crear listado de productos
  //Cada productos va a ser un objeto
  /* productos será el nombre de con lo que vayamos a tratar
  y guardarProductos el nombre de la función que indica la acción
  que realizará. Luego los productos (datos) se pasarán como
  un array de objetos */
  /* Este es nuestro primer STATE */
  const [ productos, guardarProductos ] = useState([
    { id: 1, nombre: 'Camisa ReactJS', precio: 50 },
    { id: 2, nombre: 'Camisa VueJS', precio: 40 },
    { id: 3, nombre: 'Camisa NodeJS', precio: 30 },
    { id: 4, nombre: 'Camisa AngularJS', precio: 20 }
  ]);

  /* Este es nuestro 2º STATE para carrito de compras */
  /* Le asignamos a carrito un vector vacío */
  const [ carrito, agregarProducto ] = useState([]);

  //Obtener la fecha
  const fecha = new Date().getFullYear();




  return (
    <Fragment>





      {/* HEADER */}
      <Header 
      /* Estos datos se pasan al componente Header
      a través de la variable props */
        titulo = 'Tienda Virtual'
      />





      <h1>Lista de productos</h1>

      {/* Las llaves las usamos cuando queremos añadir dentro
      de los componentes código JS */}






      {/* PRODUCTO */}
      {productos.map(producto => (
        <Producto 

          /* Cada producto tiene que tener un key (id único), 
          por eso le añadimos la variable id al objeto */
          key = {producto.id}
          /* Le pasamos el array de objetos de los productos
          al Producto.jsx */
          productos = {productos}
          producto = {producto}
          carrito = {carrito}
          agregarProducto = {agregarProducto}
        />
      ) )}





      {/* CARRITO */}
      <Carrito 
        carrito = {carrito}
        agregarProducto = {agregarProducto}
      />





        {/* FOOTER */}
      <Footer 
        fecha = {fecha}
      />




    </Fragment>
  );
}

export default App;