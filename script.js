/*
* Recorri ao seguinte site afim de utilizar o borbulhamento de eventos.
* Link: https://gomakethings.com/attaching-multiple-elements-to-a-single-event-listener-in-vanilla-js/
*/

const colorArray = document.querySelectorAll('.color');
const colorPalette = document.getElementById('color-palette');
const clearButton = document.querySelector('button');
const pixelBoard = document.getElementById('pixel-board');
const vqvButton = document.getElementById('generate-board');
const inputBoardSize = document.getElementById('board-size');

pixelBoard.innerHTML = '';

/* window.onload = () => {

}; */

colorPalette.addEventListener('click', (event) => {
  for (let index = 0; index < colorArray.length; index += 1) {
    if (colorArray[index].className === 'color selected') {
      colorArray[index].className = 'color';
    }
  }

  if (event.target.classList.contains('color')) {
    event.target.className = 'color selected';
  }
  /*
  function selectedPalette() {
const color = document.querySelector('#color-palette');
color.addEventListener('click', (event) => {
const element = event;
document.querySelector('.selected').className = 'color';
element.target.className = 'color selected';
});
} 
  */
}, false);

document.addEventListener('click', (event) => {
  const colorSelected = document.querySelector('.selected').id;
  const target = event.target;
  if (target.classList.contains('pixel')) {
    target.style.backgroundColor = colorSelected;
  }
}, false);

clearButton.addEventListener('click', () => {
  const pixelArray = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelArray.length; index += 1) {
    let bgColorPixelArrayItem = pixelArray[index].style.backgroundColor;
    if (bgColorPixelArrayItem !== '') {
      pixelArray[index].style.backgroundColor = '';
    }
  }
}, false);

vqvButton.addEventListener('click', () => {
  if (inputBoardSize.value === '') alert('Board inválido');
  pixelBoard.innerHTML = '';
  const sizeValue = parseInt(inputBoardSize.value, 10);
  for (let index = 0; index < sizeValue; index += 1) {
    let trClass = document.createElement('div');
    trClass.className = 'tr';
    pixelBoard.appendChild(trClass);
    for (let index2 = 0; index2 < sizeValue; index2 += 1) {
      let tdClass = document.createElement('div');
      tdClass.className = 'td pixel';
      trClass.appendChild(tdClass);
    }
  }
}, false);
