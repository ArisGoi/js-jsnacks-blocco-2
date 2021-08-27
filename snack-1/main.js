var numeri = [];

for ( i = 0; i < 5; i++){
    numeri.push(parseInt(prompt('inserisci un numero')))
};

var somma = 0;

for ( i = 0; i < 5; i++){
    somma += numeri[i] 
};
console.log(numeri);
console.log(somma);