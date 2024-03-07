    // generamos un arreglo de imagenes
    const arregloDeImagnes = [
        'img/imgCarrusel/carrusel1.jpg',
        'img/imgCarrusel/carrusel2.jpg',
        'img/imgCarrusel/carrusel3.jpg'
    ];

    // apuntemos a el elemento imagen
    const img = document.getElementById('img');
    // apuntemos a el elemento botom anterior y siguiente
    const ant = document.getElementById('ant');
    const sig = document.getElementById('sig');
    // Creamos los lostener de ambos botones
    // ant.addEventListener('click', anterior);
    // sig.addEventListener('click', siguiente);

    //creamos un contador
    var contador = 0;

    // realizamos un setInterval para que las imagenes pasen automaticamente
    const inter = setInterval(auto, 2000)


    //creamos la funacion auto

    function auto() {
        contador++; 
        try { // debemos colocar un try por si no se encuentra la foto
            //if para que se repita el ciclo y vuelva al inicio
            if (contador >= arregloDeImagnes.length) {
                contador = 0;
            }
            //utilizamos el contador para solicitar una determianda foto del arreglo
            img.src = arregloDeImagnes[contador];
        } catch (err){
            alert('Error en la funcion auto'+ err.massage)
        }

}


    function anterior() {
        contador--; 
        try { // debemos colocar un try por si no se encuentra la foto
            //if para que se repita el ciclo y vuelva al inicio
            if (contador >= arregloDeImagnes.length) {
                contador = 0;
            }
            //utilizamos el contador para solicitar una determianda foto del arreglo
            img.src = arregloDeImagnes[contador];
        } catch (err){
            alert('Error en la funcion anterior'+ err.massage)
        }

}


function siguiente() {
        contador++; 
        try { // debemos colocar un try por si no se encuentra la foto
            //if para que se repita el ciclo y vuelva al inicio
            if (contador >= arregloDeImagnes.length) {
                contador = 0;
            }
            //utilizamos el contador para solicitar una determianda foto del arreglo
            img.src = arregloDeImagnes[contador];
        } catch (err){
            alert('Error en la funcion siguiente'+ err.massage)
        }

}