//CONSEGNA:
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

//PSEUDOCODICE: 

/*

x Chiedere all'utente il numero di chilometri che deve percorrere
x Chiedere all'utente la sua età
x calcolare il prezzo del biglietto moltiplicando i kilometri a 0.21€
x calcolo il prezzo del biglietto scontato al 20% arrotondato alla seconda cifra decimale (uso la funzione toFixed(n) che arrotonda la cifra 
  alla n cifra decimale e converte in stringa il numero)
x calcolo il prezzo del biglietto scontato al 40% arrotondato alla seconda cifra decimale (uso la funzione toFixed(n) che arrotonda la cifra 
  alla n cifra decimale e converte in stringa il numero)
?  SE età dell'utente è minore di 18 (se minorenne)
    x V1 - Stampo il prezzo del biglietto con sconto al 20% 
:? ALTRIMENTI SE età dell'utente è maggiore o uguale a 65 (compreso)
    x V2 - Stampo il prezzo del biglietto con sconto al 40% 
   ALTRIMENTI
    x F1 - Stampo il prezzo del biglietto senza sconti, arrotondato alla seconda cifra decimale

*/

// Controllo se è stato inserito effettivamente qualcosa e nel caso chiedo nuovamente di inserirlo. 
// Il programma fallisce se l'utente non inserisce niente per la seconda volta. Per farlo funzionare serve un ciclo while.

let numKm = prompt('Quanti chilometri devi percorrere?');

if (numKm == null){
    alert('Devi inserire un numero di Km');
    numKm = prompt('Quanti chilometri devi percorrere?');
} else {
    numKm = parseInt(numKm);
}

let userAge = prompt('Quanti anni hai?');

if (userAge == null){
    alert('Devi inserire la tua età');
    userAge = prompt('Quanti anni hai?');
} else {
    userAge = parseInt(userAge);
}


// Calcolo prezzo senza sconti
let tktPrice = numKm * 0.21;
tktPrice = tktPrice.toFixed(2);

// Calcolo prezzo con 20% di sconto
let tktPrice20 = tktPrice - (tktPrice / 100 * 20);
tktPrice20 = tktPrice20.toFixed(2);

// Calcolo prezzo con 40% di sconto
let tktPrice40 = tktPrice - (tktPrice / 100 * 40);
tktPrice40 = tktPrice40.toFixed(2);

if (userAge < 18) {
    document.writeln(`Il prezzo del biglietto è di ${tktPrice}€ ma siccome sei un minore, il prezzo scontato è di ${tktPrice20}€`);
} else if (userAge >= 65) {
    document.writeln(`Il prezzo del biglietto è di ${tktPrice}€ ma siccome sei un over 65, il prezzo scontato è di ${tktPrice40}€`);
} else {
    document.writeln(`Il prezzo del biglietto è di ${tktPrice}€`);
}