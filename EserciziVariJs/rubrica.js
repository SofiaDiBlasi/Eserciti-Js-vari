//funzione per la creazione di un nuovo contatto nella mia rubrica
function creaContatto(nome, telefono, email) {
    return {
        nome: nome,
        telefono: telefono,
        email: email
    };
}

class Rubrica {
    constructor() {
        this.rubrica = [];
    }

    aggiungiContatto(contatto) {
        this.rubrica.push(contatto);
    }

    visualizzaContatti() {
        console.log("Rubrica:");
        this.rubrica.forEach(contatto => {
            console.log("Nome: " + contatto.nome + " Telefono: " + contatto.telefono + " Email: " + contatto.email);
        });
    }

    cercaContatto(nome) {
        return this.rubrica.find(contatto => contatto.nome === nome);
    }

    modificaContatto(contatto, nomeMod, telefonoMod, emailMod) {
        contatto.nome = nomeMod;
        contatto.telefono = telefonoMod;
        contatto.email = emailMod;
    }

    eliminaContatto(contatto) {
        const indice = this.rubrica.indexOf(contatto);
        if (indice !== -1) {
            this.rubrica.splice(indice, 1);
        }
    }
}

//inizializzo la mia rubrica come vuota
const rubrica = new Rubrica();

//creo quindi tutti i contatti che voglio
const contatto1 = creaContatto("Sofia", "123456789", "sofia@gmail.com");
const contatto2 = creaContatto("Mattia", "234567891", "mattia@gmail.com");
const contatto3 = creaContatto("Walter", "123434789", "walter@gmail.com");
const contatto4 = creaContatto("Pio", "234567991", "pio@gmail.com");
const contatto5 = creaContatto("Alessandro", "234517891", "alessandro@gmail.com");

//li aggiungo
rubrica.aggiungiContatto(contatto1);
rubrica.aggiungiContatto(contatto2);
rubrica.aggiungiContatto(contatto3);
rubrica.aggiungiContatto(contatto4);
rubrica.aggiungiContatto(contatto5);

//visualizzo tutti i contatti che ho aggiunto
rubrica.visualizzaContatti();

//cerco un contatto
const contattoCercato = rubrica.cercaContatto("Sofia");
console.log("Contatto trovato:", contattoCercato);

//modifico un contatto
rubrica.modificaContatto(contattoCercato, "Sonia", "123456789", "sonia@gmail.com");

//visualizzo i miei contatti per vedere che il contatto sia effettivamente stato modificato
rubrica.visualizzaContatti();

//elimino un contatto
rubrica.eliminaContatto(contattoCercato);

//ri-visualizzo i miei contatti per vedere che il contatto sia effettivamente stato eliminato
rubrica.visualizzaContatti();
