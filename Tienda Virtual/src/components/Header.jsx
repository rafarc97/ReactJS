import React from 'react';


/* Los props se usan para pasar información del componente
princiapl App a los demás. Descargamos la extensión de 
Google Chrome "react developer tools" */
function Header({titulo}){

    const edad = 18;
    let mensaje;
    if(edad >= 18){
        mensaje = 'Eres mayor de edad';
    }else{
        mensaje = 'Eres menor de edad';
    }
    /* En el return se coloca lo que se verá en la pantalla */
    return (
    /* las clases se usan como className en HTML
    los id se usan igual como id */
    <h1 className="encabezado" id="encabezado"> {titulo}
    </h1>
    )
}

export default Header;