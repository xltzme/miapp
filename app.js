const Formulario = document.querySelector(".form-create");
let ide = 0;
Formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  ide++;
  const descripcion = document.querySelector("#descripcion").value;
  const contenedor = document.querySelector(".publicaciones");
  contenedor.innerHTML += `<div id="${ide}" class="publicacion">
            <p>id: ${ide}</p>
            <p>${descripcion}</p>
            <button id= "editar" onclick="editar(this)">Editar</button>
            <button id= "eliminar" onclick="eliminar(this)">Eliminar</button>
        </div> `;
});

function eliminar(e) {
  let aidi = e.parentElement.querySelector("p:nth-child(1)").textContent;
  let proc = aidi.split(": ")[1];
  console.log(proc);
  e.parentElement.remove();
}
function editar(e) {
  if (e.value == "Editar") {
    const parrafo = e.parentElement.querySelector("p:nth-child(2)");
    parrafo.contentEditable = true;
    e.value = "Guardar";
    if (parrafo.contentEditable) {
      parrafo.contentEditable = false;
    }
    if (e.value == "Guardar") {
      e.value = "Editar";
    }
  }
}
