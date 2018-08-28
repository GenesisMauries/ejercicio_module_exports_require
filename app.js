const sumita = require('./suma.js'); // Require recibe lo de module.exports
const multiplica = require('./multiplicacion.js');

const resta = require('./resta.js');

//Aqui ya puede usar la funcion en otro archivo
console.log(sumita.sumarVariables(1,2));
// Uso otra de las funciones en el archivo suma.js
console.log(sumita.sumarVariables(12,12));
// Solicita la funcion en el archivo de multiplicacion
console.log(multiplica.multiplicaVariables(9,9));
// Solicita la funcion en el archivo de resta
console.log(resta.restaVariables(19,9));



