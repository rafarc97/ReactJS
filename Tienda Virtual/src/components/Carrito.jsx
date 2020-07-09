import React from 'react';
import Producto from './Producto.jsx';
import './carrito.css';

const Carrito = ({carrito, agregarProducto}) => (
    <div className="carrito">
        <h2>Tu carrito de compras</h2>
        {carrito.length === 0
            ? <p>No hay elementos en el carrito</p>
            : carrito.map(producto => (

                /* En React se suelen pasar los datos de los
                componentes padres a hijos (App a Carrito por ejemplo),
                pero también se pueden pasar de componentes hijos a
                otros hijos como en este caso, le estamos pasando estos
                datos del componente Carrito al componente Producto */
                <Producto 
                    key = {producto.id}
                    producto = {producto}
                    carrito = {carrito}
                    agregarProducto = {agregarProducto}
                />
            ))}
    </div>
);

export default Carrito;