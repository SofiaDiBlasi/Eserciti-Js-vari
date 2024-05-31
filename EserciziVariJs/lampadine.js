document.addEventListener('DOMContentLoaded' , ()=>{
    
const root = document.getElementById('root');

const accendi = document.createElement('button');

const spegni = document.createElement('button');

accendi.textContent = 'Gattino Felice';
spegni.textContent = 'Gattino triste';

root.appendChild(accendi);
root.appendChild(spegni);

const gattoFelice = document.createElement('img');
const gattoTriste = document.createElement('img');

gattoFelice.src = './img/gattofelice.jpg';
gattoTriste.src = './img/gattotriste.jpg';

accendi.addEventListener('click', () => {
    sec1.appendChild(h1);
});

spegni.addEventListener('click', () => {
    root.removeChild(gattoFelice);
    root.appendChild(gattoTriste);
});

});



