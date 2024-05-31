document.addEventListener('DOMContentLoaded' , ()=>{

const root = document.getElementById('root');

const imgHome = document.createElement('div');
imgHome.classList.add('titoloContainer','col');
root.appendChild(imgHome);

//NAVBAR
const navBar = document.createElement('nav');
navBar.innerHTML = `<nav class="navbar navbar-expand-lg navBg shadow sticky-top">
<div class="container-fluid text-center">
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active text-white" aria-current="page" id="home" href="#">Home</a>
      </li>
      <li class="nav-item">
      <a class="nav-link active text-white" aria-current="page" id="login" href="#">Registrazione</a>
    </li>
      <li class="nav-item">
        <a id="scompareTutto" class="nav-link text-white" id="scompareTutto" href="#social">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          About us
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">L'associazione</a></li>
          <li><a class="dropdown-item" href="#">I nostri gattini</a></li>
          <li><a class="dropdown-item" href="#">Requisiti per l'adozione</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="social">FAQ</a></li>
        </ul>
      </li>
    </ul>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Cerca per parola chiave" aria-label="Search">
      <button class="btn btn-warning" type="submit">Cerca</button>
    </form>
  </div>
</div>
</nav>`
root.appendChild(navBar);

const home = document.getElementById('home');
const login = document.getElementById('login');
const reset = document.getElementById('scompareTutto');

home.addEventListener('click', () => {
    sec1.remove(loginForm);
    sec1.appendChild(divBenvenuto);
    divCol.appendChild(divCard);
    divCol1.appendChild(divCard1);
    divCol2.appendChild(divCard2);
    sec2.appendChild(divContenitore2);
    sec4.appendChild(secsx);
    sec5.appendChild(divContenitore);
    document.appendChild(sec3);
    sec3.innerHTML = `<div class="container text-center">
    <div class="row">
    <div id="carouselExampleFade" class="carousel slide carousel-fade">
        <div class="carousel-inner">
        <div class="carousel-item active">
            <img class="imgCar" src="https://img.freepik.com/foto-premium/un-gruppo-di-simpatici-e-adorabili-gattini-sta-guardando-la-telecamera_958928-214.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
            <img class="imgCar" src="https://st.depositphotos.com/27756932/51671/i/950/depositphotos_516710728-stock-photo-couple-kittens-in-love-kiss.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
            <img class="imgCar" src="https://m.media-amazon.com/images/I/71mXhVPwW7L._AC_UF1000,1000_QL80_.jpg" class="d-block w-100" alt="...">
        </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next btn btn-ligh" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
        </button>
    </div>
    </div>
    </div>`
});

login.addEventListener('click', () => {
    sec1.removeChild(divBenvenuto);
    divCol.removeChild(divCard);
    divCol1.removeChild(divCard1);
    divCol2.removeChild(divCard2);
    sec2.removeChild(divContenitore2);
    sec3.innerHTML = ``
    sec4.removeChild(secsx);
    sec5.removeChild(divContenitore);
    sec1.append(loginForm);
    
});

reset.addEventListener('click', () => {
    sec1.remove(loginForm);
    sec1.removeChild(divBenvenuto);
    divCol.removeChild(divCard);
    divCol1.removeChild(divCard1);
    divCol2.removeChild(divCard2);
    sec2.appendChild(divContenitore2);
    sec3.remove(sec3);
    sec4.removeChild(secsx);
    sec5.removeChild(divContenitore);
    
});

//MAIN
//SEZIONE 1 DI BENVENUTO
const sec1 = document.getElementById('sec1');

const divBenvenuto = document.createElement('div');
divBenvenuto.classList.add('col-12', 'text-center', 'boxScritte', 'rounded-3');
sec1.appendChild(divBenvenuto);

const h1 = document.createElement('h1');
h1.textContent = 'Benvenuto !';
h1.classList.add('text-white', 'mt-3');
divBenvenuto.appendChild(h1);

const h2 = document.createElement('h2');
h2.textContent = 'Se sei qui è perchè vuoi adottare un gattino !';
h2.classList.add('text-white');
divBenvenuto.appendChild(h2);

const h3 = document.createElement('h3');
h3.textContent = 'Di seguito nostri gattini in evidenza';
h3.classList.add('text-white','mb-4');
divBenvenuto.appendChild(h3);

const imgGatto = document.createElement('img');
imgGatto.src = './img/gattofelice.jpg';


//Form Login
const loginForm = document.createElement('section');
loginForm.classList.add('text-center');
loginForm.innerHTML = `
<div class="container">
    <div class="row">
        <form class="col-4 offset-4 form text-center">
            <p class="title">Accedi al tuo account</p>
            <p class="message">Fai il login nel sito più gattoso di tutti </p>
            <div class="flex">
            <label>
                <input class="input" type="text" placeholder="" required="">
                <span>Nome</span>
            </label>

            <label>
                <input class="input" type="text" placeholder="" required="">
                <span>Cognome</span>
            </label>
            </div>  
            <label for="email">
                <input id="email" class="input" type="email" placeholder="" required="">
                <span>Email</span>
            </label> 
                
            <label>
                <input class="input" type="password" placeholder="" required="">
                <span>Password</span>
            </label>
            <button class="submit">Invia</button>
        </form>
    </div>
</div>`

function validaEmail(email) {
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    return email.match(emailPattern) !== null;
}
var email1 = "sofia@gmail.com";
var email2 = "ciaoooooo____@";


console.log(validaEmail(email1)); 
console.log(validaEmail(email2)); 

function validaPassword(password) {
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    return password.match(passwordPattern) !== null;
}

var password1 = "GattiniBellissimi94!";
var password2 = "boh";

console.log(validaPassword(password1)); 
console.log(validaPassword(password2)); 



//SEZIONE 1 CON LE CARD

const secCard = document.getElementById('secCard');

//Card 1
const divCol = document.createElement('div');
divCol.classList.add('col-4', 'd-flex', 'justify-content-center');
secCard.appendChild(divCol);

const divCard = document.createElement('div');
divCard.classList.add('card', 'zoom-img', 'cardStyle', 'shadow', 'text-center');
divCol.appendChild(divCard);

//Img della card
const imgCat = document.createElement('img');
imgCat.src = 'https://preview.redd.it/02g1pfot5ds41.jpg?width=640&crop=smart&auto=webp&s=c1f4b571f5630233d45135d5c256fa6cbbeae128';
imgCat.classList.add('card-img-top', 'catHover');
divCard.appendChild(imgCat);

const cardBody = document.createElement('div');
cardBody.classList.add('card-body', 'cardStyle', 'text-center');
divCard.appendChild(cardBody);

//Elementi dentro la card
const cardText1 = document.createElement('h5');
cardText1.textContent = 'Polpetta';
const cardText2 = document.createElement('p');
cardText2.textContent = 'Some quick example text to build on the card title and make up the bulk of the card...';
const cardButton = document.createElement('button');
cardButton.textContent = 'Visita il profilo del gattino';
cardButton.classList.add('buttonRainbow');

cardBody.appendChild(cardText1);
cardBody.appendChild(cardText2);
cardBody.appendChild(cardButton);

//Card 2
const divCol1 = document.createElement('div');
divCol1.classList.add('col-4', 'd-flex', 'justify-content-center');
secCard.appendChild(divCol1);

const divCard1 = document.createElement('div');
divCard1.classList.add('card', 'zoom-img', 'cardStyle', 'shadow', 'text-center');
divCol1.appendChild(divCard1);

//Img della card
const imgCat1 = document.createElement('img');
imgCat1.src = 'https://i.redd.it/3br7jvt89f891.jpg';
imgCat1.classList.add('card-img-top', 'catHover');
divCard1.appendChild(imgCat1);

const cardBody1 = document.createElement('div');
cardBody1.classList.add('card-body', 'cardStyle', 'text-center');
divCard1.appendChild(cardBody1);

//Elementi dentro la card
const cardText3 = document.createElement('h5');
cardText3.textContent = 'Polpetta';
const cardText4 = document.createElement('p');
cardText4.textContent = 'Some quick example text to build on the card title and make up the bulk of the card...';
const cardButton1 = document.createElement('button');
cardButton1.textContent = 'Visita il profilo del gattino';
cardButton1.classList.add('buttonRainbow');

cardBody1.appendChild(cardText3);
cardBody1.appendChild(cardText4);
cardBody1.appendChild(cardButton1);

//Card 3
const divCol2 = document.createElement('div');
divCol2.classList.add('col-4', 'd-flex', 'justify-content-center');
secCard.appendChild(divCol2);

const divCard2 = document.createElement('div');
divCard2.classList.add('card', 'zoom-img', 'cardStyle', 'shadow', 'text-center');
divCol2.appendChild(divCard2);

//Img della card
const imgCat2 = document.createElement('img');
imgCat2.src = 'https://preview.redd.it/swjlpm53dcp61.jpg?auto=webp&s=d50c5025e673641c28f0cb45cf0be387c1cf828f';
imgCat2.classList.add('card-img-top', 'catHover');
divCard2.appendChild(imgCat2);

const cardBody2 = document.createElement('div');
cardBody2.classList.add('card-body', 'cardStyle', 'text-center');
divCard2.appendChild(cardBody2);

//Elementi dentro la card
const cardText5 = document.createElement('h5');
cardText5.textContent = 'Polpetta';
const cardText6 = document.createElement('p');
cardText6.textContent = 'Some quick example text to build on the card title and make up the bulk of the card...';
const cardButton2 = document.createElement('button');
cardButton2.textContent = 'Visita il profilo del gattino';
cardButton2.classList.add('buttonRainbow');

cardBody2.appendChild(cardText5);
cardBody2.appendChild(cardText6);
cardBody2.appendChild(cardButton2);

//SEZIONE 2 DONAZIONI
const sec2 = document.getElementById('sec2');

const divContenitore2 = document.createElement('div');
divContenitore2.classList.add('col-12', 'text-center');
sec2.appendChild(divContenitore2);

const h1Donazioni = document.createElement('h1');
h1Donazioni.textContent = 'Fai fare spin al gatto per fare una donazione alla nostra ODV';
h1Donazioni.classList.add('text-white', 'mt-3', 'donazione', 'rounded-3');
divContenitore2.appendChild(h1Donazioni);

const hr = document.createElement('hr');
sec2.appendChild(hr);

const gattoRotante = document.createElement('img');
gattoRotante.src = 'https://png.pngtree.com/png-clipart/20210308/original/pngtree-british-shorthair-cat-head-front-view-png-image_5790490.jpg';
gattoRotante.classList.add('ruota', 'cat');
divContenitore2.appendChild(gattoRotante);

//SEZIONE 3 CAROSELLO
const sec3 = document.getElementById('sec3');

sec3.innerHTML = `<div class="container text-center">
<div class="row">
  <div id="carouselExampleFade" class="carousel slide carousel-fade">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="imgCar" src="https://img.freepik.com/foto-premium/un-gruppo-di-simpatici-e-adorabili-gattini-sta-guardando-la-telecamera_958928-214.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img class="imgCar" src="https://st.depositphotos.com/27756932/51671/i/950/depositphotos_516710728-stock-photo-couple-kittens-in-love-kiss.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img class="imgCar" src="https://m.media-amazon.com/images/I/71mXhVPwW7L._AC_UF1000,1000_QL80_.jpg" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next btn btn-ligh" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>
</div>`

//SEZIONE 4 FORM E VIDEO

const sec4 = document.getElementById('sec4');

//Div di sinistra - Form
const secsx = document.createElement('div');
sec4.appendChild(secsx);
secsx.classList.add('col-4','offset-4' , 'boxForm', 'p-3', 'rounded-3', 'mt-5');


const labelNome = document.createElement('label');
labelNome.textContent = 'Nome';
labelNome.classList.add('form-label', 'text-white');
const inputNome = document.createElement('input');
inputNome.classList.add('form-control');

const labelCognome = document.createElement('label');
labelCognome.textContent = 'Cognome';
labelCognome.classList.add('form-label', 'text-white');
const inputCognome = document.createElement('input');
inputCognome.classList.add('form-control');

const labelEmail = document.createElement('label');
labelEmail.textContent = 'Email';
labelEmail.classList.add('form-label', 'text-white');
const inputEmail = document.createElement('input');
inputEmail.classList.add('form-control');

const labelCellulare = document.createElement('label');
labelCellulare.textContent = 'Numero di telefono';
labelCellulare.classList.add('form-label', 'text-white');
const inputCellulare = document.createElement('input');
inputCellulare.classList.add('form-control');

const labelTextArea = document.createElement('label');
labelTextArea.textContent = 'Descriviti...';
labelTextArea.classList.add('form-label', 'text-white');
const textArea = document.createElement('textarea');
textArea.placeholder = 'Descrivi le tue abitudini e che tipo di persona sei...';
textArea.classList.add('form-control');

//checkbox del form
const checkForm = document.createElement('input');
checkForm.type = 'checkbox';
checkForm.classList.add('form-check-input');
const checkFormLabel = document.createElement('label');
checkFormLabel.textContent = 'Confermo di volere un gattino';
checkFormLabel.classList.add('form-label', 'text-white');

const br = document.createElement('br');

//bottone del form
const buttonForm = document.createElement('button');
buttonForm.textContent = 'Invia candidatura';
buttonForm.classList.add('btn', 'btn-warning');


secsx.appendChild(labelNome);
secsx.appendChild(inputNome);

secsx.appendChild(labelCognome);
secsx.appendChild(inputCognome);

secsx.appendChild(labelEmail);
secsx.appendChild(inputEmail);

secsx.appendChild(labelCellulare);
secsx.appendChild(inputCellulare);

secsx.appendChild(labelTextArea);
secsx.appendChild(textArea);

secsx.appendChild(br);
secsx.appendChild(checkForm);
secsx.appendChild(checkFormLabel);
secsx.appendChild(br);
secsx.appendChild(buttonForm);

//FOOTER
//SEZIONE 5 LINK AI SOCIAL

const sec5 = document.getElementById('sec5');

//Div row
const divContenitore = document.createElement('div');
sec5.appendChild(divContenitore);
divContenitore.classList.add('row');

//Div con link Facebook
const secdestra = document.createElement('div');
divContenitore.appendChild(secdestra);
secdestra.classList.add('col-6');

//Div con link Instagram
const secsinistra = document.createElement('div');
divContenitore.appendChild(secsinistra);
secsinistra.classList.add('col-6');

//Link
const facebook = document.createElement('p');
facebook.textContent = 'Facebook';
facebook.classList.add('fLink');

const instagram = document.createElement('p');
instagram.textContent = 'Instagram';
instagram.classList.add('fLink');

secsinistra.appendChild(facebook);
secdestra.appendChild(instagram);

});
