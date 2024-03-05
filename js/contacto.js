function validar() {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById('nombreapellido').value;
    var correo = document.getElementById('correo').value;
    var telefono = document.getElementById('tel').value;
    var mensaje = document.getElementById('mensaje').value;
    
    var emailPatron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var nombrePatron = /^[A-Z][a-z]{1,20}\s[A-Z][a-z]{1,20}$/;
    var telefonoPatron = /^\d{10}$/;
    var mensajePatron = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ\.\,\?\¿]+$/;
    var respuesta;

    try {

        if (nombre === '' || correo === '' || telefono === '' || mensaje === '') {
            respuesta = 'Por favor, complete todos los campos';

        }
    
        // Validar el formato del nombre
        if (!nombrePatron.test(nombre)) {
            respuesta = 'Por favor, ingrese un nombre valido.';

        }
    
        // Validar el formato del correo electrónico
        if (!emailPatron.test(correo)) {

            respuesta = 'Por favor, ingrese una dirección de correo electrónico válida.';

        }
    
        // Validar el formato del telefono
        if (!telefonoPatron.test(telefono)) {

            respuesta = 'Por favor, ingrese un telefono válido.';

        }

        if (!mensajePatron.test(mensaje)) {
            respuesta = 'Por favor, ingrese un mensaje válido.';
 
            
        }
        


        document.getElementById("respuesta").innerHTML = respuesta;

        if (respuesta !== 'Tu consulta ha sido enviada con éxito, Gracias por contactarte') {
            return false;
        } else {
            alert ("Tu consulta ha sido enviada con éxito, Gracias por contactarte");
            return true;
        }

        
    } catch (error) {

        
        alert("Hubo un error, intente nuevamente.");
        return false;
    }
    
}


    