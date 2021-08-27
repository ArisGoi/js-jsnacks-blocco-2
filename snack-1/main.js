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
    var userInput = parseInt(prompt('inserisci un numero'));
    numeri.push(userInput);

    if (isNaN(userInput)){
        alert('hai inserito un valore che non è un numero!! RICARICA LA PAGINA')
        break
    }

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