
var numero = parseInt(prompt('scrivi un numero'));

while (isNaN(numero)){
    numero = parseInt(prompt('Non hai inserito un numero, scrivi un numero!'));
}

if (numero % 2 == 0){
    alert(numero)
} else {
    numero += 1;
    alert(numero)
}