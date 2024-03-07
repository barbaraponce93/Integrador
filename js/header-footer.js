
////////////////////////////////////////////////////////////////////////
// Función para cargar el encabezado y el pie de página dinámicamente
document.addEventListener('DOMContentLoaded', function () {//el evento DOMContentLoaded se asegura  de que el DOM esté completamente cargado antes de ejecutar otra funcion. 

    cargarHeaderFooter();
});

function cargarHeaderFooter() {
    const headerDinamico = document.getElementById('header-dinamico');
    //le pasamos el contenido HTML del encabezado 


    let contenidoHeader = '';
    if (document.title.startsWith('Inicio') || document.title.startsWith('Contacto')) {
        console.log(document.title.length)

        contenidoHeader = `          
        <div class="header-contenedor">
                <div class="header-atencionPublico">
                     <p class="parrafo">Hablanos de Lunes a viernes de 09:00 a 18:00hs</p>
                </div>
    
                <div class="header-logo">
                    <img src="img/logo-transparente.png" alt="" id="logo-img">
                </div>
    
    
                 <div class="header-carrito">
                    <a href="carrito.html">  <img src="img/carrito.png" alt="">
                    <p>Mi carrito</p>
                     <p class="num-carrito" id="numCarrito">0</p></a>
                </div>
        
    
        </div>
    
    <nav class="header-menubar">
        <!-- <input type="text">-->
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="productos.html">Productos</a></li>
            <li><a href="contactos.html">Contactos</a></li>
        </ul>
    </nav>
        `;

    }
    else {
        const headerDinamico = document.getElementById('header-dinamico');
        //le pasamos el contenido HTML del encabezado 
         contenidoHeader =
            `          
        <div class="header-contenedor">
        <div class="header-atencionPublico">
            <p class="parrafo">Hablanos de Lunes a viernes de 09:00 a 18:00hs</p>
        </div>
    
        <div class="header-logo">
            <img src="img/logo-transparente.png" alt="" id="logo-img">
        </div>
    
    
        <div class="header-carrito">
        <a href="carrito.html">  <img src="img/carrito.png" alt="">
        <p>Mi carrito</p>
        <p class="num-carrito" id="numCarrito">0</p></a>
        
          
         </div>
            <div class="header-buscador">
            <input type="text" id="lupa">
             <span><img src="img/lupa.png" alt="" class="lupa-icono"></span>
            <div id="resultado"></div>
        </div>
    
    </div>
    
    <nav class="header-menubar">
        <!-- <input type="text">-->
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="productos.html">Productos</a></li>
            <li><a href="contactos.html">Contactos</a></li>
        </ul>
    </nav>
        `;





    }
   
    headerDinamico.innerHTML = contenidoHeader; //insertamos dentro de nuestro elemento dom ('header-dinamico') la cadena de texto que contiene el html

    // Cargar el pie de página
    const footerDinamico = document.getElementById('footer-dinamico');
    const contenidofooter = `
    <div class="contenedor-footer">

    <div class="navegacion">
        <span>Navegacion</span>
        <ul class="nav-footer">
            <li><a href="index.html">Home</a></li>
            <li><a href="productos.html">Productos</a></li>
            <li><a href="contactos.html">Contactos</a></li>

        </ul>

    </div>

    <div class="contacto">
        <span>Contáctanos</span>
        <ul>
            <li><img src="img/whatsapp.png" alt="" class="contacto-img"> &nbsp; 351123456</li>
            <li><img src="img/mail.png" alt="" class="contacto-img">&nbsp; blancosdachary@gmail.com</li>
            <li><img src="img/ubicacion.png" alt="" class="contacto-img"> &nbsp;La paz 175</li>
        </ul>
    </div>

    <div class="tarjetas">
        <span>Medios de pago</span>
        <ul>
            <li><img src="img/americanexpress.png" alt="" class="img-tarjetas"></li>
            <li><img src="img/cabal.png" alt="" class="img-tarjetas"></li>
            <li><img src="img/cencosud.png" alt="" class="img-tarjetas"></li>
            <li><img src="img/dinersclubtarjeta.png" alt="" class="img-tarjetas"></li>
            <br>
            <li><img src="img/mastercard.png" alt="" class="img-tarjetas"></li>
            
            <li><img src="img/pagofacil.png" alt="" class="img-tarjetas"></li>
            <li><img src="img/rapipago.png" alt="" class="img-tarjetas"></li>
            <li><img src="img/tarjeta-naranja.png" alt="" class="img-tarjetas"></li>
            <br>
            <li><img src="img/visa.png" alt="" class="img-tarjetas"></li>
            <li><img src="img/americanexpress.png" alt="" class="img-tarjetas"> </li>
        </ul>
    </div>

</div>
<div class="copy-footer">
    <p> &copy Copyright Grupo 4 - 2024</p>
</div>
    `;
    footerDinamico.innerHTML = contenidofooter;
}

///////////////////////////////////////////////
const parrafo = document.querySelector('.parrafo');

function cambiarTexto(nuevoTexto) {
    const parrafo = document.querySelector('.parrafo');
    if (parrafo) {
        parrafo.textContent = nuevoTexto;
    }
}

setInterval(() => {
    cambiarTexto('Whatsapp 351123456');
}, 4000);

setInterval(() => {
    cambiarTexto('Hablanos de Lunes a viernes de 09:00 a 18:00hs');
}, 6000);


