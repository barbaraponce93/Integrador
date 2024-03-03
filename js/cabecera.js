const parrafo = document.querySelector('.parrafo');

function cambiarTexto(nuevoTexto) {
  parrafo.textContent = nuevoTexto;//cambiamos el contenido parrafo
}

setInterval(() => {//esta funcion va a ejecutar a cambiar texto y le dice que lo cambie cada 4s en este caso
  cambiarTexto('Whatsapp 351123456');
}, 4000); // 4s

setInterval(() => {
  cambiarTexto('Hablanos de Lunes a viernes de 09:00 a 18:00hs');
}, 6000); // 6s

////////////////////////////////////////////////////////////////////////