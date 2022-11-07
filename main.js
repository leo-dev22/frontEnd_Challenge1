const hamburger = document.getElementById('hamburger');
const closeHamburger= document.getElementById('close-hamburger');
console.log(hamburger);

hamburger.addEventListener('click',()=>{
  hamburger.style.display='hidden';
  closeHamburger.style.display='block';
})