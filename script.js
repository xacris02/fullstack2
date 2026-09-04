
const ciudadesNo = [
    "la cisterna", "renca", "curacavi", "las condes", "san bernardo", "providencia", "maipu", "pudahuel", "quilicura","nunoa", "macul", "florida", "valparaiso", "concepcion"];

const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
const pinNumerico = /^\d{4}$/; 
let usuarioR = []
let contraR= []

function registrarUsuario() {
    let nombre = document.getElementById("Nombre").value.trim();
    let apellido = document.getElementById("Apellido").value.trim();
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;
    let direccion = document.getElementById("direccion").value.trim();
    let region = document.getElementById("region").value.trim();
    let comuna = document.getElementById("comuna").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let regUsuario = document.getElementById("regUsuario").value.trim();
    let contrasena = document.getElementById("regContrasena").value;
    let confirmarContrasena = document.getElementById("confirmarContrasena").value;
    let resultado = document.getElementById("resultado");

    let errores = [];

    if (nombre === "" || !soloLetras.test(nombre)) {
        errores.push("El nombre debe contener solo letras y no estar vacío.");
    } 
    if (ciudadesNo.includes(nombre.toLowerCase())) {
        errores.push("El nombre no puede ser el nombre de una ciudad o comuna restringida.");
    }
    if (apellido === "" || !soloLetras.test(apellido)) {
        errores.push("El apellido debe contener solo letras y no estar vacío.");
    }
    if (ciudadesNo.includes(apellido.toLowerCase())) {
        errores.push("El apellido no puede ser el nombre de una ciudad o comuna restringida.");
    }
    if (fechaNacimiento === "") {
        errores.push("Debe ingresar su fecha de nacimiento.");
    }
    if (direccion === "" || region === "" || comuna === "") {
        errores.push("Todos los campos de domicilio son obligatorios.");
    }
    if (telefono === "" || isNaN(telefono)) {
        errores.push("El teléfono debe ser un formato numérico válido.");
    }

    if (regUsuario === "") {
        errores.push("Debe registrar un nombre de usuario.");
    }

    if (!pinNumerico.test(contrasena)) {
        errores.push("La contraseña debe ser un PIN numérico de exactamente 4 dígitos.");
    }
    if (contrasena !== confirmarContrasena) {
        errores.push("Las contraseñas no coinciden.");
    }

    if (errores.length > 0) {
        let contenidoErrores = '<h5 class="alert-heading fw-bold mb-3">Por favor corrige los siguientes errores:</h5>';
        errores.forEach(function(error) {
            contenidoErrores += '<p class="mb-1">• ' + error + '</p>';
        });

        resultado.innerHTML = '<div class="alert alert-danger">' + contenidoErrores + '</div>';
    } else {
        usuarioR.push(regUsuario)
        contraR.push(contrasena)
        resultado.innerHTML = '<div class="alert alert-success"><h5 class="alert-heading fw-bold mb-0">¡Usuario registrado con éxito!</h5></div>';
    }
}

function btnRegistrar() {
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("Registro-Usuario").classList.remove("d-none");
    document.getElementById("paso-login").classList.add("d-none");
}
function btnRegistrarVolver() {
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("Registro-Usuario").classList.add("d-none");
    document.getElementById("paso-login").classList.remove("d-none");
}



function validarUsuario() {
    let usuario = document.getElementById("usuario").value.trim();
    let contrasena = document.getElementById("contrasena").value;
    let resultado = document.getElementById("resultado");

    if (!usuarioR.includes(usuario)) {
        resultado.innerHTML = '<div class="alert alert-warning">Usuario no Registrado.</div>';
    } else if (!contraR.includes(contrasena)) {
        resultado.innerHTML = '<div class="alert alert-danger">Contraseña Incorrecta.</div>';
    } else {
        resultado.innerHTML = '<div class="alert alert-success">¡Inicio de sesión correcto! Bienvenid@ ' + usuario + '.</div>';
    }
}