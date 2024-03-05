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

    let correoValido = true;
    let nombreValido = true;
    let telefonoValido = true;
    let mensajeValido = true;
    // Validar que los campos no estén vacíos

    try {

        if (nombre === '' || correo === '' || telefono === '' || mensaje === '') {
            alert('Por favor, complete todos los campos.');
            return false;
        }
    
        // Validar el formato del nombre
        if (!nombrePatron.test(nombre)) {
            console.log("Probando nombre");
            alert('Por favor, ingrese un nombre valido.');
            nombreValido = false;
            //return false;
        }
    
        // Validar el formato del correo electrónico
        if (!emailPatron.test(correo)) {
            console.log("Probando correo");
            alert('Por favor, ingrese una dirección de correo electrónico válida.');
            correoValido = false;
            //return false;
        }
    
        // Validar el formato del telefono
        if (!telefonoPatron.test(telefono)) {
            console.log("Probando telefono");
            alert('Por favor, ingrese un telefono válido.');
            telefonoValido = false;
            //return false;
        }

        if (!mensajePatron.test(mensaje)) {
            console.log("Probando mensaje");
            alert('Por favor, ingrese un mensaje válido.');
            mensajeValido = false;
            return false;
            
        }
    
        if (!correoValido || !nombreValido || !telefonoValido || !mensajeValido) {
            return false;
        }
        
        return true;
        
    } catch (error) {

        
        alert("Hubo un error, intente nuevamente.");
        return false;
    }
    
}
    