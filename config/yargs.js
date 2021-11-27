
const argv = require('yargs')
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'La base de la tabla'
})
.option('l',{
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Listar la tabla'
})
.option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Hasta donde llega la tabla'
})
.check((argv, options) => {
    if(isNaN(argv.b)){
        throw new Error('La base debe de ser un numero')
    }else if(isNaN(argv.h)){
        throw new Error('Hasta debe ser tipo numero')
    }else{
        return true;
    }
})
.argv;

module.exports = argv;
