const $botonAgregarTarea = document.querySelector("#agregarTarea");
const tareas = [];

$botonAgregarTarea.onclick = function () {
  const $nuevaTarea = document.querySelector("#nuevaTarea").value;
  tareas.push($nuevaTarea);

  const lista = document.querySelector("#tareas");
  console.log(lista);

  const $botonBorrarElemento = document.createElement("button");
  $botonBorrarElemento.textContent = "Eliminar elemento";

  const elemento = document.createElement("li");

  elemento.appendChild($botonBorrarElemento);
  lista.appendChild(elemento);
  elemento.textContent = `${$nuevaTarea}`;
  elemento.onclick = function () {
    elemento.style = "text-decoration:line-through";
  };

  for (let index = 0; index < tareas.length; index++) {
    elemento.id = "tarea" + (index + 1);
  }

  elemento.appendChild($botonBorrarElemento);
  $botonBorrarElemento.onclick = function () {
    lista.removeChild(elemento);
  };
};
