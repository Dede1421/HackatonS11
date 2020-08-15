function toDoList() {
  const tarea = document.getElementById("tareaInput");
  const button = document.getElementById("buttonAdd");
  const lista = document.getElementById("lista");
  const form1 = document.querySelector("form");

  // funciones
  const agregarTarea = () => {
    lista.appendChild(nuevaTarea(tareaInput.value));
    tareaInput.value = "";
  };

  // Eventos
  form1.addEventListener("submit", agregarTarea);
  // Crear Tarea
  function nuevaTarea(text) {
    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = text;
    nuevaTarea.addEventListener("click", () => {
      nuevaTarea.style.textDecoration = "line-through";
    });
    nuevaTarea.addEventListener("dblclick", () => {
      lista.removeChild(nuevaTarea);
    });
    return nuevaTarea;
  }
}

toDoList();
