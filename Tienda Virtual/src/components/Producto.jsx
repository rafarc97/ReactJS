import React from 'react'
const Producto = ({productos, producto, carrito, agregarProducto}) => {
    
    const { nombre, precio, id } = producto;

    //Agregar producto al carrito
    const seleccionarProducto = id => {
        /* Le ponemos [0] para acceder al objeto */
        const producto = productos.filter(producto => producto.id === id)[0];
        console.log(producto);
        agregarProducto([
            /* Con esto (spread Operator) hacemos una copia del estado 
            actual del carrito. CUando se compra el primer producto se hace
            una copia del array vacío y se le añade el nuevo producto */
            ...carrito,
            producto
        ]);
        /* Una forma incorrecta de hacer esto mismo sería modificando
        el STATE directamente así (y no está permitido):
        carrito.push(producto)*/
    }

    //Elimina un producto del carrito
    const eliminarProducto = id => {
        const productos = carrito.filter(producto => producto.id !== id);
        
        //Colocar los productos en el State
        agregarProducto(productos)
    }

    return ( 
    <div>
        <h2>{nombre}</h2>
        <p>{precio}€</p>
        {/* Esto lo hacemos para que cuando compremos un producto en
        la lista de la compra podamos eliminar el botón de comprar */}
        {productos
        /* Si existe producto */
        ?
            (<button 
                type="button"
                onClick={ () => seleccionarProducto(id)}
            >Comprar</button>)
        /* Si no existe producto */
        :
            (<button 
                type="button"
                onClick={ () => eliminarProducto(id)}
            >Eliminar</button>)
        }
    </div> );
}
 
export default Producto;