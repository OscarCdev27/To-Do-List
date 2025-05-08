// Función para cargar las tareas guardadas
function cargarTareas() {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
    const listaTareas = document.getElementById("listaTareas");
    
    tareasGuardadas.forEach(tareaTexto => {
        let nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = tareaTexto + " ";

        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.onclick = function() {
            nuevaTarea.remove();
            guardarTareas();
        }

        nuevaTarea.appendChild(botonEliminar);
        listaTareas.appendChild(nuevaTarea);
    });
}

// Función para guardar las tareas en el almacenamiento local
function guardarTareas() {
    const listaTareas = document.getElementById("listaTareas");
    const tareas = Array.from(listaTareas.getElementsByTagName("li")).map(li => 
        li.textContent.replace(" Eliminar", "")
    );
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

function agregarTarea() {
    //Obtenemos el valor del campo de la tarea
    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;

    //Validamos que el valor no sea vacío
    if (nuevaTareaTexto === "") {
        alert("Por favor, Ingrese una tarea");
        return;
    }

    //Crear elemento en la lista
    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto + " ";

    //Crear botón de Eliminar
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function() {
        nuevaTarea.remove();
        guardarTareas();
    }

    //Agregar botón de eliminar al elemento de la lista
    nuevaTarea.appendChild(botonEliminar);

    //Agregar el elemento/la tarea a la lista
    document.getElementById("listaTareas").appendChild(nuevaTarea);

    //Guardar las tareas en el almacenamiento local
    guardarTareas();

    //Limpiar el cuadro de texto del nombre de la tarea
    document.getElementById("nuevaTarea").value = "";
}

// Cargar las tareas cuando se carga la página
document.addEventListener('DOMContentLoaded', cargarTareas);