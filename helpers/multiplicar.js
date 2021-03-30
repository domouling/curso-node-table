const fs = require('fs');

const colors = require('colors');

const crearArchivoTabla = async(base = 5, lista, hasta = 10) => {

    try {

        let salida = '';
        let consola  = '';

        for (let i = 0; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
            consola  += `${base} ${ 'x'.red } ${i} ${ '='.red } ${base*i}\n`;
        }

        if(lista){
            console.log('======================'.green);
            console.log('TABLA DEL '.green, colors.blue(base));
            console.log('======================'.green);
            console.log(consola);
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);

        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
    
}

module.exports = {
    crearArchivoTabla
}