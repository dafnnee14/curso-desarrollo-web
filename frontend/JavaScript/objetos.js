// 
const coche = {
    marca: "Renault",
    modelo: "Megane",
    color: "Gris"
}

// Definición y creación de un objeto
const persona = {
    nombre: "Dafne",
    apellido: "Ribera",
    edad: 21,
    nombreCompleto: function () {
        return this.nombre + ' ' + this.apellido;
    }
}

// Acceso a las propiedades:
document.querySelector("#pNombre").innerHTML = persona.nombre + ' ' + persona.apellido;
document.querySelector("#pEdad").innerHTML = ' Tienes ' + persona.edad + ' años ';

// Métodos
document.querySelector("#pMetodo").innerHTML = persona.nombreCompleto();
