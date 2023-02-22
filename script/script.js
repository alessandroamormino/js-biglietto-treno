//CONSEGNA:
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

//PSEUDOCODICE: 

/*

- Chiedere all'utente il numero di chilometri che deve percorrere
- Chiedere all'utente la sua età
- calcolare il prezzo del biglietto moltiplicando i kilometri a 0.21€
- calcolo il prezzo del biglietto scontato al 20% arrotondato alla seconda cifra decimale
- calcolo il prezzo del biglietto scontato al 40% arrotondato alla seconda cifra decimale
?  SE età dell'utente è minore di 18 (se minorenne)
    V1 - Stampo il prezzo del biglietto con sconto al 20% 
:? ALTRIMENTI SE età dell'utente è maggiore o uguale a 65 (compreso)
    V2 - Stampo il prezzo del biglietto con sconto al 40% 
   ALTRIMENTI
    F1 - Stampo il prezzo del biglietto senza sconti, arrotondato alla seconda cifra decimale

*/

