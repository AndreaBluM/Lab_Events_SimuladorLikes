const likeBoton = document.getElementById('likeBoton');
const likeContador = document.getElementsByName('likeContador');
 
let count = 0;
 
likeBoton.addEventListener('click', () => {
  count++;
  likeContador.textContent = count;
 
  // Cambiar texto del botón solo en el primer clic
  if (count === 1) {
    likeBoton.textContent = '¡Gracias por tu like!';
  }
});