//PERSONA
class Persona {
    constructor(nome, cognome, eta) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
    }

    saluta() {
        return "Ciao, mi chiamo " + this.nome + " " + this.cognome + " ed ho " + this.eta + " anni.";
    }
}

const persona1 = new Persona("Sofia", "Di Blasi", 29);
console.log(persona1.saluta());

//LIBRO
class Libro {
    constructor(titolo, autore, annoPubblicazione) {
        this.titolo = titolo;
        this.autore = autore;
        this.annoPubblicazione = annoPubblicazione;
    }

    descrizione(){
        return "Questo bellissimo libro è " + this.titolo + " scritto da " + this.autore + " ed è stato pubblicato nel " + this.annoPubblicazione;
    }
    static anniDallaPubblicazione(annoPubblicazione) {
        const annoCorrente = new Date().getFullYear();
        return annoCorrente - annoPubblicazione;
    }
}

const libro1 = new Libro ("Il Signore degli anelli","J. R. R. Tolkien",1954);
console.log(libro1.descrizione());
console.log(Libro.anniDallaPubblicazione(libro1.annoPubblicazione));

//STUDENTE
class Studente extends Persona{
    constructor(nome, cognome, eta, corsoDiStudi) {
        super(nome, cognome, eta);
        this.corsoDiStudi = corsoDiStudi;
    }
    descrizione() {
        return "Ciao, mi chiamo " + this.nome + " " + this.cognome + " ed ho " + this.eta + " anni, " + " frequento il corso di " + this.corsoDiStudi;
    }
}

const persona2 = new Studente ("Maria", "Rossi", "23", "Veterinaria");
console.log(persona2.descrizione());