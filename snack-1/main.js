// var numeri = [];

// for ( i = 0; i < 5; i++){
//     numeri.push(parseInt(prompt('inserisci un numero')))
// };

// var somma = 0;

// for ( i = 0; i < 5; i++){
//     somma += numeri[i] 
// };
// console.log(numeri);
// console.log(somma);


var numeri = [];
var i = 0;
while ( i < 5 ){
    numeri.push(parseInt(prompt('inserisci un numero')))

    i++
};

var somma = 0;

var i = 0;
while ( i < 5){
    somma += numeri[i] 
    i++
};
console.log(numeri);
console.log(somma);