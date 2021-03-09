const colorArray = document.querySelectorAll('.color');
document.addEventListener('click', (event) => {
  for (let index = 0; index < colorArray.length; index += 1) {
    if (colorArray[index].className === 'color selected') {
      colorArray[index].className = 'color';
    }
  }

  if (event.target.classList.contains('color')) {
    event.target.className = 'color selected';
  }
}, false);
