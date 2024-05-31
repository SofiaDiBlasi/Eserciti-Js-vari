const numeri = [1, 2, 3, 5];

//SOMMA
let valoreIniziale = 0;
const somma = numeri.reduce(
    (accumulator, currentValue) => accumulator + currentValue, valoreIniziale
)
console.log(somma);

//VALORE MASSIMO
const valoreMassimo = Math.max(...numeri);
console.log(valoreMassimo);

//NUMERI PARI
const sonoPari = numeri.filter((element) => element  %2 === 0);
console.log(sonoPari);

//UNIRE DUE ARRAY

const array1 = [1, 2, 3, 4];
const array2 = [5,6, 7, 8];

const arrayUniti = [...array1, ...array2];
console.log(arrayUniti);

//NUMERI IN ORDINE CRESCENTE

const numeri2 = [12, 15, 7, 42, 1];
numeri2.sort((a, b) => a - b);
console.log(numeri2);