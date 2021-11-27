const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (tabla, listar, hasta) => {

    try {
        let salida = '';
        let consola = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${tabla} * ${i} = ${(tabla * i)}\n`;
            consola += `${tabla.toString().blue} * ${i.toString().magenta} = ${(tabla * i).toString().black.bgWhite}\n`;
        }
        if (listar) {
            console.log('==============='.green);
            console.log(`   Tabla del ${tabla.toString().red}`);
            console.log('==============='.green);
            console.log(consola);
        }
        fs.writeFileSync('./salida/tabla.txt', salida);
        return 'Archivo creado';
    } catch (err) {
        throw 'Cambie los permisos de escritura';
    }
}

module.exports = {
    crearArchivo
}