function validar() {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById('nombreapellido').value;
    var correo = document.getElementById('correo').value;
    var telefono = document.getElementById('tel').value;
    var mensaje = document.getElementById('mensaje').value
   /*  var  texto = document.getElementById('texto').innerHTML=respuesta */
    var respuesta

    var emailPatron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var nombrePatron = /^[A-Z][a-z]{1,20}\s[A-Z][a-z]{1,20}$/;
var telefonoPatron = /^\+?\d{6,15}$/;
    var mensajePatron = /^[a-zA-Z0-9\s\.,'-]*$/;

    
    
    
    


    // Validar que los campos no estén vacíos

    try {
           
        if (nombre === '' || correo === '' || telefono === '' || mensaje === '') {
            respuesta = 'Por favor, complete los campos.';
            var  texto = document.getElementById('texto').innerHTML=respuesta
            return false;
        }
        
        // Validar el formato del nombre
        if (!nombrePatron.test(nombre)) {
            //console.log("Probando nombre");

            respuesta = 'Por favor, ingrese un nombre correcto.'; 
            var  texto = document.getElementById('texto').innerHTML=respuesta

            return false;
        }
    
        // Validar el formato del correo electrónico
        if (!emailPatron.test(correo)) {
            //console.log("Probando correo");
            respuesta = 'Por favor, ingrese un correo válido (email@dominio.com)'; 
             document.getElementById('texto').innerHTML=respuesta

            return false;
        }
    
        // Validar el formato del telefono
        if (!telefonoPatron.test(telefono)) {
            //console.log("Probando telefono");
            respuesta = 'Por favor, ingrese un telefono valido';
            document.getElementById('texto').innerHTML=respuesta

            return false;
        }

        if (!mensajePatron.test(mensaje)) {
           // console.log("Probando mensaje");
            respuesta = 'Por favor, ingrese un mensaje .';
             document.getElementById('texto').innerHTML=respuesta
    
            return false;
            
        }
    
        alert("se envio correctamente en brevedad nos comunicaremos")
        
        return true;

        
        
        
    } catch (error) {

        alert("ocuurio un error inesperado")
        
        return false;
     

        
    



    }
    }


    