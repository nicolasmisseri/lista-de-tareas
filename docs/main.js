const $botonAgregarTarea = document.querySelector("#agregarTarea");
const tareas = [];

$botonAgregarTarea.onclick = function () {
  const $nuevaTarea = document.querySelector("#nuevaTarea").value;
  tareas.push($nuevaTarea);

  const lista = document.querySelector("#tareas");

  const $botonBorrarElemento = document.createElement("button");
  $botonBorrarElemento.textContent = "Eliminar tarea";
  $botonBorrarElemento.className = "btn btn-danger btn-sm ml-auto";

  const elemento = document.createElement("li");

  lista.appendChild(elemento);
  lista.appendChild($botonBorrarElemento);

  elemento.textContent = `${$nuevaTarea}   `;
  elemento.className = "list-group-item list-group-item-info d-flex";
  elemento.onclick = function () {
    elemento.style = "text-decoration:line-through";
  };

  for (let index = 0; index < tareas.length; index++) {
    elemento.id = "tarea" + (index + 1);
  }

  // elemento.appendChild($botonBorrarElemento);
  $botonBorrarElemento.onclick = function () {
    lista.removeChild(elemento);
    lista.removeChild($botonBorrarElemento);
  };
};
