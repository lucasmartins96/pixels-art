/*
* Recorri ao seguinte site afim de utilizar o borbulhamento de eventos.
* Link: https://gomakethings.com/attaching-multiple-elements-to-a-single-event-listener-in-vanilla-js/
*/
const colorArray = document.querySelectorAll('.color');
const colorPalette = document.getElementById('color-palette');
const clearButton = document.querySelector('button');
const pixelArray = document.querySelectorAll('.pixel');
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
  const colorSelected = document.querySelector('.selected').id;
  const target = event.target;
  if (target.classList.contains('pixel')) {
    target.style.backgroundColor = colorSelected;
  }
}, false);

clearButton.addEventListener('click', () => {
  for (let index = 0; index < pixelArray.length; index += 1) {
    let bgColorPixelArrayItem = pixelArray[index].style.backgroundColor;
    if (bgColorPixelArrayItem !== '') {
      pixelArray[index].style.backgroundColor = '';
    }
  }
}, false);
