const listaNomi = [
    "Nabucco",
    "Luca",
    "Giorgio",
    "Francesco",
    "Federico",
    "Marina",
    "Dario",
    "Martina",
    "Antonella",
    "Antonio",
    "Thomas",
    "Lillo"
];

const listaCognomi = [
    "Turbato",
    "Rossi",
    "Bulfon",
    "Jobs",
    "Pettinato",
    "Pirillo",
    "Birillo",
    "Fuga",
    "Girbillo",
    "Ciabatta"
];

var invitati = [];

for (i = 0; i < 3; i++){
    var nomCasuale = parseInt(Math.random() * listaNomi.length);
    var cogCasuale = parseInt(Math.random() * listaCognomi.length);

    invitati.push(listaNomi[nomCasuale] + " " + listaCognomi[cogCasuale])
}

console.log(invitati);

for (i = 0; i < invitati.length; i++){

    var li = document.createElement('li');

    document.getElementById('lista').appendChild(li);
    li.innerHTML=li.innerHTML + invitati[i];

}