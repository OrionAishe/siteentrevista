const botao1 = document.querySelector(".botao1");
const botao2 = document.querySelector(".botao2");
const numSlides = document.querySelectorAll(".slides");

botao1.onclick = () => {proximoSlide(-1)};
botao2.onclick = () => {proximoSlide(+1)};

let slidernum = 1;
Carrossel(slidernum);

function proximoSlide(i) {
  Carrossel(slidernum += i);
}

function Carrossel(i) {
  if (i > numSlides.length) {slidernum = 1}
  if (i < 1) {slidernum = numSlides.length}
  for (let i = 0; i < numSlides.length; i++) {
    numSlides[i].style.display = "none";  
  }
  numSlides[slidernum-1].style.display = "block";  
}