/*Calcolo del prezzo del biglietto del treno

1. Chiedere all'utente il numero di chilometri da percorrere;
2. chiedere all'utente l'età;
3. calcolare il costo del biglietto in base ai km; Moltiplicando il costo di 1km (0.21 Euro) per il n° di km che deve percorrere;
4. calcolare se l'utente è minorenne; ovvero se la sua età è <= a 17 e se è minorenne applicare lo sconto del 20% altrimenti no; Mostrare il costo;
5. calcolare se l'utente è over 65: ovvero se la sua età è >= 65 e se è over 65 applicare lo sconto del 40% altrimenti no; Mostrare il costo;
6. se l'utente non è ne minorenne ne maggiorenne il costo del biglietto resta invariato; Mostrare il costo;
0 ----- 18 ------ 65 ------
7. mostrare il costo finale con 2 decimali per indicare i centesimi sul prezzo.*/

let numeroKilometri;
let etaUtente;
let costoBiglietto;

// 1. Chiedere all'utente il numero di chilometri da percorrere;
numeroKilometri = prompt("Quanti kilometri devi percorrere?");
console.log(numeroKilometri);

// 2. chiedere all'utente l'età;
etaUtente = prompt("Quanti anni hai?");
console.log(etaUtente);

// 3. calcolare il costo del biglietto in base ai km; Moltiplicando il costo di 1km (0.21 Euro) per il n° di km che deve percorrere;
costoBiglietto = numeroKilometri * 0.21;
console.log(costoBiglietto);

// 4. calcolare se l'utente è minorenne; ovvero se la sua età è <= a 17 e se è minorenne applicare lo sconto del 20% altrimenti no; Mostrare il costo;
if (etaUtente <= 17) {
  costoBiglietto = (costoBiglietto * 20) / 100;
  costoBiglietto = prompt(
    "Sei minorenne, hai uno sconto del 20%, il costo del tuo biglietto è: ",
    costoBiglietto + " €"
  );
  console.log(costoBiglietto);
}

// 5. calcolare se l'utente è over 65: ovvero se la sua età è >= 65 e se è over 65 applicare lo sconto del 40% altrimenti no; Mostrare il costo;
else if (etaUtente >= 65) {
  costoBiglietto = (costoBiglietto * 40) / 100;
  costoBiglietto = prompt(
    "Sei over 65, hai uno sconto del 40%, il costo del tuo biglietto è: ",
    costoBiglietto + " €"
  );
  console.log(costoBiglietto);
}

// 6. se l'utente non è ne minorenne ne maggiorenne il costo del biglietto resta invariato; Mostrare il costo;
else {
  costoBiglietto = prompt(
    "Il costo del tuo biglietto è: ",
    costoBiglietto + " €"
  );
  console.log(costoBiglietto);
}

// 7. mostrare il costo finale con 2 decimali per indicare i centesimi sul prezzo.*/
