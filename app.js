const bandCard = document.querySelectorAll('.band');
const mcrFact = document.querySelector('#mcr');
const aeroFact = document.querySelector('#aero');
const lzFact = document.querySelector('#ledzep');
const trainFact = document.querySelector('#train');
const okFact = document.querySelector('#outkast');
const msFact = document.querySelector('#mazstar');
const gdFact = document.querySelector('#gdead');
const kurtFact = document.querySelector('#nirvana');
const creedFact = document.querySelector('#creed');



//Event Listeners
for (var i = 0; i < bandCard.length; i++){
bandCard[i].addEventListener("click", bandCheck);
}
mcrFact.addEventListener('click', mcrDisplay);
aeroFact.addEventListener('click', aeroDisplay);
lzFact.addEventListener('click', lzDisplay);
trainFact.addEventListener('click', trainDisplay);
okFact.addEventListener('click', okDisplay);
msFact.addEventListener('click', msDisplay);
gdFact.addEventListener('click', gdDisplay);
kurtFact.addEventListener('click', kurtDisplay);
creedFact.addEventListener('click', creedDisplay);

//Functions
function bandCheck(e) {
    event.preventDefault();
    chosenBand = e.target;
    if (chosenBand.classList.contains('lame')){
        chosenBand.classList.add('red');
    }
 }

 function mcrDisplay() {
     event.preventDefault();
     const showFact = document.querySelector('#mychem.facts');
     const greyness = document.querySelector('#grey');
     if(showFact.style.display = 'none'){
         showFact.style.display = 'block';
         greyness.style.display = 'block';
     }
     greyness.addEventListener('click', () => {
        if(showFact.style.display = 'block'){
            showFact.style.display = 'none';
            greyness.style.display = 'none';
        }
     })
} 
     
 function aeroDisplay() {
     event.preventDefault();
     const showFact = document.querySelector('#asmith.facts');
     const greyness = document.querySelector('#grey');
     if(showFact.style.display = 'none'){
         showFact.style.display = 'block';
         greyness.style.display = 'block';
     }
     greyness.addEventListener('click', () => {
        if(showFact.style.display = 'block'){
            showFact.style.display = 'none';
            greyness.style.display = 'none';
        }
     })
} 
 
 function lzDisplay() {
     event.preventDefault();
     const showFact = document.querySelector('#lzep.facts');
     const greyness = document.querySelector('#grey');
     if(showFact.style.display = 'none'){
         showFact.style.display = 'block';
         greyness.style.display = 'block';
     }
     greyness.addEventListener('click', () => {
        if(showFact.style.display = 'block'){
            showFact.style.display = 'none';
            greyness.style.display = 'none';
        }
     })
} 
  function trainDisplay() {
     event.preventDefault();
     const showFact = document.querySelector('#tr8n.facts');
     const greyness = document.querySelector('#grey');
     if(showFact.style.display = 'none'){
         showFact.style.display = 'block';
         greyness.style.display = 'block';
     }
     greyness.addEventListener('click', () => {
        if(showFact.style.display = 'block'){
            showFact.style.display = 'none';
            greyness.style.display = 'none';
        }
     })
} 
  function okDisplay() {
     event.preventDefault();
     const showFact = document.querySelector('#okast.facts');
     const greyness = document.querySelector('#grey');
     if(showFact.style.display = 'none'){
         showFact.style.display = 'block';
         greyness.style.display = 'block';
     }
     greyness.addEventListener('click', () => {
        if(showFact.style.display = 'block'){
            showFact.style.display = 'none';
            greyness.style.display = 'none';
        }
     })
} 
  function msDisplay() {
     event.preventDefault();
     const showFact = document.querySelector('#mstar.facts');
     const greyness = document.querySelector('#grey');
     if(showFact.style.display = 'none'){
         showFact.style.display = 'block';
         greyness.style.display = 'block';
     }
     greyness.addEventListener('click', () => {
        if(showFact.style.display = 'block'){
            showFact.style.display = 'none';
            greyness.style.display = 'none';
        }
     })
} 
  function gdDisplay() {
     event.preventDefault();
     const showFact = document.querySelector('#grate.facts');
     const greyness = document.querySelector('#grey');
     if(showFact.style.display = 'none'){
         showFact.style.display = 'block';
         greyness.style.display = 'block';
     }
     greyness.addEventListener('click', () => {
        if(showFact.style.display = 'block'){
            showFact.style.display = 'none';
            greyness.style.display = 'none';
        }
     })
} 
  function kurtDisplay() {
     event.preventDefault();
     const showFact = document.querySelector('#kurt.facts');
     const greyness = document.querySelector('#grey');
     if(showFact.style.display = 'none'){
         showFact.style.display = 'block';
         greyness.style.display = 'block';
     }
     greyness.addEventListener('click', () => {
        if(showFact.style.display = 'block'){
            showFact.style.display = 'none';
            greyness.style.display = 'none';
        }
     })
} 
  function creedDisplay() {
     event.preventDefault();
     const showFact = document.querySelector('#suck.facts');
     const greyness = document.querySelector('#grey');
     if(showFact.style.display = 'none'){
         showFact.style.display = 'block';
         greyness.style.display = 'block';
     }
     greyness.addEventListener('click', () => {
        if(showFact.style.display = 'block'){
            showFact.style.display = 'none';
            greyness.style.display = 'none';
        }
     })
} 
 