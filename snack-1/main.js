// 1) metodo con for
// var somma = 0;

// for ( i = 0; i < 5; i++){
//     var numero = parseInt(prompt('inserisci un numero'));

//     while (isNaN(numero)){
//         numero = parseInt(prompt('Non hai inserito un numero, inserisci un numero!'));
//     }
//     somma += numero;
// }

// console.log(somma)


// 2) metodo con while
var somma = 0;

var i = 0;
while (i < 5){
    var numero = parseInt(prompt('inserisci un numero'));

    while (isNaN(numero)){
        numero = parseInt(prompt('Non hai inserito un numero, inserisci un numero!'));
    }
    somma += numero;

    i++
}
console.log(somma);