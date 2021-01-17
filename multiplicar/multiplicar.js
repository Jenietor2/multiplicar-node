const fs = require('fs');
const colors = require('colors');

const crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un número');
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        fs.writeFile(`tabla/tabla-${base}-al${limite}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve('El archivo se creo existosamente'.green);
            }
        });
    });
}

const listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject('Tanto la base como el limite deben ser números');
            return;
        }
        console.log('===================================='.green);
        console.log(`Tabla de ${base}`.blue);
        console.log('===================================='.green);
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base*i}`.red);
        }
    });
}
module.exports = {
    crearArchivo,
    listarTabla
}