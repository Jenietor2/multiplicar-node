const colors = require('colors');
const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');



let comando = argv._[0];
//console.log(argv);

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite).then(resp => {
            console.log(resp);
        }).catch(e => {
            console.log(e);
        });
        break;
    case 'crear':
        console.log(argv);
        crearArchivo(argv.base, argv.limite).then(resp => {
            console.log(resp);
        }).catch(e => {
            console.log(e);
        });
        break;
    default:
        console.log('Comando no identificado');
        break;
}