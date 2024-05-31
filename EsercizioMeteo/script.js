document.addEventListener('DOMContentLoaded' , async ()=>{
    //recuperiamo i dati dalla funzione
    const meteoInfo = await getMeteoInfo();
    const root = document.getElementById('root');

    //Titolo della pagina
    const titoloPagina = document.createElement('h1');
    titoloPagina.textContent = 'Benvenuto su questa pagina meteo';
    titoloPagina.classList.add('font','text-center','text-white','mt-4');
    root.appendChild(titoloPagina);

    //Card
    const divCard = document.createElement('div');
    divCard.classList.add('text-center','container', 'mt-5');
    divCard.style.width= '18rem';
    root.appendChild(divCard);

    const cardBody = document.createElement('div');
    cardBody.classList.add('glassCard','shadow');
    divCard.appendChild(cardBody);

    const titoloCard = document.createElement('h1');
    titoloCard.classList.add('card-title','font');
    titoloCard.textContent = 'Info meteo';
    cardBody.appendChild(titoloCard);

    const sottotitoloCard = document.createElement('h3');
    sottotitoloCard.classList.add('card-title','mb-2','font');
    sottotitoloCard.textContent = 'Milano';
    cardBody.appendChild(sottotitoloCard);

    //Info meteo all'interno della card
    const oraMeteo = document.createElement('p');
    oraMeteo.classList.add('card-text', 'p-1');
    oraMeteo.textContent = 'In data: ' + meteoInfo.current.time;
    cardBody.appendChild(oraMeteo);

    const temperaturaMeto = document.createElement('p');
    temperaturaMeto.classList.add('card-text', 'p-1');
    temperaturaMeto.textContent = 'La temperatura è di ' + meteoInfo.current.temperature_2m + "°C";
    cardBody.appendChild(temperaturaMeto);

    const pioggiaMeteo = document.createElement('p');
    pioggiaMeteo.classList.add('card-text', 'p-1');
    pioggiaMeteo.textContent = 'Attualmente previsti ' + meteoInfo.current.rain + "mm di pioggia";
    cardBody.appendChild(pioggiaMeteo);

    const nuvole = document.createElement('p');
    nuvole.classList.add('card-text', 'p-1');
    nuvole.textContent = 'Nuvoloso al '+ meteoInfo.current.cloud_cover + '%';
    cardBody.appendChild(nuvole);

    //Bottone
    const bottone = document.createElement('button');
    bottone.classList.add('btn','btnColor', 'mt-5', 'mb-5', 'col-2','offset-5', 'rounded-3');
    bottone.textContent = 'Mostra previsioni';
    root.appendChild(bottone);
    
    //Evento per la geenrazione di info all'interno della tabella
    bottone.addEventListener('click', () => {
        const tempo = meteoInfo.hourly.time;
        const temperatura = meteoInfo.hourly.temperature_2m;
        const precipitazioni = meteoInfo.hourly.rain;

        const tBody = document.getElementById('tBody');

        for (let index = 0; index < tempo.length; index++) {
            const tr = document.createElement('tr');
            tBody.appendChild(tr);

            const tdTempo = document.createElement('td');
            tdTempo.textContent = tempo[index];

            const tdTemperatura = document.createElement('td');
            tdTemperatura.textContent = temperatura[index];

            const tdPrecipitazioni = document.createElement('td');
            tdPrecipitazioni.textContent = precipitazioni[index];

            tr.appendChild(tdTempo);
            tr.appendChild(tdTemperatura);
            tr.appendChild(tdPrecipitazioni);
        }
    });
 
});

//Fetch per recuperare json
async function getMeteoInfo(){
    const risposta = await fetch("https://api.open-meteo.com/v1/forecast?latitude=45.38&longitude=9.14&current=temperature_2m,relative_humidity_2m,rain,cloud_cover,cloud_cover_low,cloud_cover_mid&hourly=temperature_2m,relative_humidity_2m,rain,cloud_cover,cloud_cover_low,cloud_cover_mid&timezone=Europe%2FBerlin", {
        mode: "cors",
        method: "GET",
    });
    return await risposta.json();
}
