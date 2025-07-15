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

function eliminar (e){
    e.parentElement.remove();
}
function editar (e){

}