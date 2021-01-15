/* .Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.

Stampare a schermo attraverso il for in tutte le proprietà.

.Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome.

.Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */

// Creo oggetto studente
var studente = {
    nome : 'Antonio',
    cognome : 'Spaziani',
    eta : 34
};

// Stampo in console le proprietà dello studente
for (var k in studente) {
    console.log(`${k}: ${studente[k]}`);
}

// Creo array di oggetti formato dalle informazioni di più studenti
var studenti = [
    {
        nome : 'Antonio',
        cognome : 'Spaziani',
        eta : 34
    },
    {
        nome : 'Alessia',
        cognome : 'Tesi',
        eta : 28
    },
    {
        nome : 'Valeria',
        cognome : 'Rossi',
        eta : 25
    },
];

// Stampo in console nome e cognome di tutti gli studenti nell'array precedente
for (var i = 0; i < studenti.length; i++) {
    console.log(`nome: ${studenti[i].nome}`);
    console.log(`cognome: ${studenti[i].cognome}`);
}