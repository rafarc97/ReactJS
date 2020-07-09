import React from 'react';

/* Los componentes pueden llamarse como funciones declaradas
como aquí o funciones expresadas como la del Footer.
En algunos componentes no vamos a necesitar código extra de JS
antes del return, para estos casos usamos las funciones
expresadas funciones flecha para poder eliminar la palabra
return y tener menos líneas de código */

const Footer = ({fecha}) => (  
        <footer>
            <p>Todos los derechos reservados &copy; {fecha}</p>
        </footer>
     );
 
export default Footer;