//FUNCIONES DE VALIDAR Y REGISTRO AREA DE CLIENTES parte samu
function validar() {
    //Almacenar los valores de las cajas del formulario
    var mail, password, expresion;

    mail = document.getElementById("mail").value;
    password = document.getElementById("pass").value;

    //Estructura de un correo electronico: texto123@texto.com, es, etc
    expresion = /\w+@\w+\.+[a-z]/;

    if (mail === "" || password === "") {
        alert("Todos los campos deben ser rellenados");
        return false;
    } else if (mail.length > 50) {
        alert("El numero de caracteres introducidos supera el limite permitido.");
        return false;
    } else if (!expresion.test(mail)) {
        alert("Correo no vallido, Introduce un valor correcto.");
        return false;
    } else if (password.length > 8) {
        alert("El numero de caracteres introducidos supera el limite permitido: 8");
        return false;
    }
}

function registro() {
    //Almacenar los valores de las cajas del formulario
    var usuario, mail, password, rpassword, expresion;
    usuario = document.getElementById("usuario").value;
    mail = document.getElementById("mail").value;
    password = document.getElementById("pass").value;
    rpassword = document.getElementById("rpass").value;


    //Estructura de un correo electronico: texto123@texto.com, es, etc
    expresion = /\w+@\w+\.+[a-z]/;

    if (usuario === "" || mail === "" || password === "" || rpassword === "") {
        alert("Todos los campos deben ser rellenados");
        return false;
    } else if (usuario.length > 20) {
        alert("El numero de caracteres introducidos para usuario supera el limite permitido.");
        return false;
    } else if (mail.length > 50) {
        alert("El numero de caracteres introducidos para correo electronico supera el limite permitido.");
        return false;
    } else if (!expresion.test(mail)) {
        alert("Correo no vallido, Introduce un valor correcto.");
        return false;
    } else if (password.length > 8) {
        alert("El numero de caracteres introducidos supera el limite permitido: 8");
        return false;
    }
    if (password != rpassword) {
        alert("Las contrsenas introducidas no coinciden no son igueales. Porfavor vuelva a ingresarlas.")
        return false;
    } else {
        alert("Gracias por registrarse en nuestra pagina web. En breve recibira un correo para confirmar su cuenta.")
        return true;
    }
}
//FINAL FUNCIONES DE VALIDAR Y REGISTRO AREA DE CLIENTES parte samu