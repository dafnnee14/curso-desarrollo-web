// Cogemos los elementos
var inputTarea = document.getElementById("tarea");
var btn = document.getElementById("agregar");
var lista = document.getElementById("lista");
var cantidad = document.getElementById("cantidad");

// Variable ue lleva la cantidad de tareas
var total = 0;

// Función que agrega la tarea a la lista
btn.onclick = function () {
    // Controlamos si el campo esta vacio
    if (inputTarea == "") {
        return;
    }
    // Cogemos el valor del campo
    var elemento = inputTarea.value;
    // Creamos un elemento li
    var li = document.createElement("li");
    li.textContent = elemento;
    // Agregamos el li a la lista
    lista.appendChild(li);

    // Ponemos la cantidad de tareas
    total++;
    cantidad.innerHTML = total;

    // Agregamos el botón de eliminar a cada elemento li
    var btnEliminar = document.createElement("span");
    btnEliminar.textContent = "\u00d7";
    li.appendChild(btnEliminar);

    // Agregamos la funcionalidad que elimina la tarea de la lista 
    btnEliminar.onclick = function () {
        li.remove();
        total--;
        cantidad.innerHTML = total;
    }

    // Limpiamos el campo input
    inputTarea.value = "";
} 