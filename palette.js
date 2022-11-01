const btn = document.getElementById('btn');
const colorBlock = document.querySelectorAll('.scolor');
const hex = document.querySelectorAll('.hex');

function RandomHexCode () {
  let chars = "123456789abcdef";
  let colorLength = 6;
  let color = '';

  for (i=0; i<colorLength; i++) {
    randomColor = Math.floor(Math.random() * chars.length);
    color += chars.substring(randomColor, randomColor+1);
  }
  return '#'+color;
};

function AddColor () {
  colorBlock.forEach(e =>{
    let newColor = RandomHexCode();
    console.log(newColor);
    e.style.backgroundColor = newColor;
    e.innerHTML = newColor;
  })
};
