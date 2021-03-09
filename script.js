/*
* Recorri ao seguinte site afim de utilizar o borbulhamento de eventos.
* Link: https://gomakethings.com/attaching-multiple-elements-to-a-single-event-listener-in-vanilla-js/
*/
const colorArray = document.querySelectorAll('.color');
const colorPalette = document.getElementById('color-palette');
colorPalette.addEventListener('click', (event) => {
  for (let index = 0; index < colorArray.length; index += 1) {
    if (colorArray[index].className === 'color selected') {
      colorArray[index].className = 'color';
    }
  }

  if (event.target.classList.contains('color')) {
    event.target.className = 'color selected';
  }
}, false);

document.addEventListener('click', (event) => {
  let colorSelected = document.querySelector('.selected').id;
  let target = event.target;
  if (target.classList.contains('pixel')) {
    target.style.backgroundColor = colorSelected;
  }
}, false);
