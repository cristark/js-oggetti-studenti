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
/* for (var k in studente) {
    console.log(`${k}: ${studente[k]}`);
} */

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
/* for (var i = 0; i < studenti.length; i++) {
    console.log(`nome: ${studenti[i].nome}`);
    console.log(`cognome: ${studenti[i].cognome}`);
} */

// Creo variabili con prompt per inserimento dati nuovo studente
var nomeNuovoStudente = emptyCheck(nomeNuovoStudente, 'nome');
var cognomeNuovoStudente = emptyCheck(cognomeNuovoStudente, 'cognome');
var etaNuovoStudente = numberCheck(etaNuovoStudente, 'età');


// Inserisco le variabili del nuovo studente all'interno di un oggetto
var nuovoStudente = {
    nome : nomeNuovoStudente,
    cognome : cognomeNuovoStudente,
    eta : etaNuovoStudente
};

// Pusho l'oggetto appena creato all'interno dell'array studenti
studenti.push(nuovoStudente);

// Stampo in console nome e cognome di tutti gli studenti nell'array
for (var i = 0; i < studenti.length; i++) {
    console.log(`nome: ${studenti[i].nome}`);
    console.log(`cognome: ${studenti[i].cognome}`);
}

// - Funzioni
function emptyCheck(i, nome) {
    var sentinel = true;
    do {
        var i = prompt(`Inserisci il ${nome}`);
        if (i == '' || Math.abs(i) >= 0) {
            alert(`Non hai inserito un ${nome} valido, riprova per favore`);
        } else {
            sentinel = false;
        }
    } while (sentinel);
    return i
}

function numberCheck(i, eta) {

    do {
        var i = parseInt(prompt(`Inserisci l' ${eta}`));
        if (isNaN(i)) {
            alert(`Non hai inserito un' ${eta} valida, riprova per favore`);
        }
    } while (isNaN(i));
    return i
}