const nombre = document.getElementById("myname");
const apellidos = document.getElementById("surname");
const correo = document.getElementById("email");
const mobile = document.getElementById("mobile");
const contraseña = document.getElementById("password");
const contraseña2 = document.getElementById("repeatPassword");
const terminosYcondiciones = document.getElementById("tearmsAndConditions");
const form = document.getElementById("form");
const listInputs = document.getElementById(".form-input");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let condicion = validacionForm();
    if (condicion) {
        enviarFormulario();
    }
});

function validacionForm() {
    form.lastElementChild.innerHTML = "";
    let condicion = true;
    listInputs.forEach(element => {
        element.lastElementChild.innerHTML = "";
    });

    if (nombre.Value.length < 1 || nombre.Value.trim() == "") {
        mostrarMensajeError("myname", "Nombre no valido*");
        condicion = false;
    }
    if (apellidos.value.length < 1 || apellidos.value.trim() == "") {
        mostrarMensajeError("surname", "Apellido no valido");
        condicion = false;
    }
    if (correo.Value.length < 1 || correo.Value.trim() == "") {
        mostrarMensajeError("email", "Correo no valido*");
        condicion = false;
    }
    if (mobile.Value.length !== 9 ||
        mobile.Value.trim() == "" ||
        isNaN(mobile.value)
    ) {
        mostrarMensajeError("mobile", "mobile no valido*");
        condicion = false;
    }
    if (contraseña.Value.length < 1 || contraseña.Value.trim() == "") {
        mostrarMensajeError("password", "contraseña no valida*");
        condicion = false;
    }
    if (contraseña2.value != contraseña.value) {
        mostrarMensajeError("repeatPassword", "Contraseña error*");
        condicion = false;
    }
    if (!terminosYcondiciones.checked) {
        mostrarMensajeError("tearmsAndConditions", "Acepte*");
        condicion = false;
    } else {
        mostrarMensajeError("tearmsAndConditions", "");
        condicion = true;
    }
    return condicion;
}

function mostrarMensajeError(claseInput, mensaje) {
    let elemento = document.querySelector('.${claseInput}');
    elemento.lastElementChild.innerHTML = mensaje;
}

function enviarFormulario() {
    form.reset();
    form.lastElementChild.innerHTML = "Listo!!";
}
