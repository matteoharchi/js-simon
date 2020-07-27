var numeriRandom = [];
var numeriScelti = [];
var numeriGiusti = [];
var i = 0;

while (numeriRandom.length < 5) {
    var insertNumber = randomNumber(0, 100);
    if (!numeriRandom.includes(insertNumber) && numeriRandom.length < 5) {
        numeriRandom.push(insertNumber);
    }
    i++;
};

console.log(numeriRandom);


while (numeriScelti.length < 5) {
    var numeroUtente = parseInt(prompt("Inserisci un numero da 0 a 100"));
    if (!numeriScelti.includes(numeroUtente) && numeroUtente >= 0 && numeroUtente <= 100) {
        numeriScelti.push(numeroUtente);
    } else if (numeroUtente < 0 || numeroUtente > 100) {
            alert("Numero non valido!")
        } else if (numeroUtente == numeriScelti[i]) {
            alert ("Numero già scelto!")
        } else if (isNaN(numeroUtente)) {
            alert ("Inserisci un numero!");
        }
    if (numeriRandom.includes(numeroUtente)) {
        numeriGiusti.push(numeroUtente);
    }
    i++;
}

console.log(numeriScelti);
console.log(numeriGiusti);

// FUNZIONI

//funzione che crea un numero Random

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min - 1)+1);
}
