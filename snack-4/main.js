
var numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var somma = 0;

for (i = 0; i < numeri.length; i++){

    if ( i % 2 !== 0){
        somma += numeri[i]
    };

}

console.log(somma);