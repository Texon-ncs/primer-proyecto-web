// 1. Obtenemos los elementos de la página por su id
const boton = document.getElementById("boton");
const mensaje = document.getElementById("mensaje");
 
// 2. Escuchamos el evento "click" sobre el botón
boton.addEventListener("click", function () {
  // 3. Cambiamos el texto del párrafo de mensaje
  mensaje.textContent = "¡Hola! Acabas de ejecutar tu primer JavaScript 🎉";
});
