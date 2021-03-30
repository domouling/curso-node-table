const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la Base de la Tabla de Multiplicar'
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            demandOption: false,
            default: false,
            describe: 'Muestra la Tabla en Consola'
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            demandOption: false,
            default: 10,
            describe: 'Limite superior de multiplicaciones de la tabla'
        }
    })
    .check((argv, options) => {
        if(isNaN(argv.b)){
            throw 'La Base tiene que ser un numero';
        }
        if(isNaN(argv.h)){
            throw 'Hasta (Limite) tiene que ser un numero';
        }
        return true;
    })
    .argv;

module.exports = argv;