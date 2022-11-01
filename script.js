const colors = ['#9747FF', '#5500C2', '#2036FF', '#000E8B', '#49FF51', '#00E392','#D0FF12', '#F1F1F1', '#D9D9D9', '#D1FF50'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
  const randomNumber = getRandomNumber();
  
  if (randomNumer <= 9) {
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
  } else {
    document.body.style.backgroundColor = colors[9];
    color.textContent = colors[9];
  };
  
});

function getRandomNumber() {
  return Math.floor(Math.random() * (colors.length));
}
