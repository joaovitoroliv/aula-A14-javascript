let originX = null;
let originY = null;
let offsetX = 0;
let offsetY = 0;
let dragStarted = false;
function onDragStart(event) {
  originX = event.clientX;
  originY = event.clientY;
  dragStarted = true;
  // Mouse continua sendo rastreado mesmo que o mouse saia
  event.currentTarget.setPointerCapture(event.pointerId);
}

function onDragMove(event) {
  if (!dragStarted) {
    return;
  }
  //Prevenir o browser de se comportar ao arrastar img
  event.preventDefault();
  const deltaX = event.clientX - originX;
  const deltaY = event.clientY - originY;
  // Para o dragao pegar a posicao anterior + deslocamento
  const translateX = offsetX + deltaX;
  const translateY = offsetY + deltaY;
  event.currentTarget.style.transform = 'translate(' + 
    translateX + 'px, ' + translateY + 'px)';
}

function onDragEnd(event) {
  dragStarted = false;
  offsetX += event.clientX - originX;
  offsetY += event.clientY - originY;
}

const dragon = document.querySelector('img');
dragon.addEventListener('pointerdown', onDragStart);
dragon.addEventListener('pointerup', onDragEnd);
dragon.addEventListener('pointermove', onDragMove);

// Eventos de Animação no CSS //
// Exemplo: 
const image2 = document.querySelector('img');
image2.addEventListener('animationstart', onStart);
image2.addEventListener('animationend', onEnd);
image2.classList.add('fade-grow');

function onStart () {
  console.log('Animação começou!');
}
function onEnd (){
  console.log('Animação terminou!');
}

