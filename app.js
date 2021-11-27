const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('./config/yargs');


const tabla = argv.b;
console.clear();


//console.log(process.argv) // acceder a los parametros enviados por la terminal

crearArchivo(tabla, argv.l, argv.h)
    .then(salida => console.log(salida))
    .catch(err => console.log(err, '!!!!'));
