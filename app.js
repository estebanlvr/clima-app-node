const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({

    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


console.log(argv.direccion);

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        console.log(coords);

        const temp = await clima.getClima(coords.lat, coords.lng);
        console.log(temp);
        return `El clima de ${coords.direccion} es de ${ temp}`;

    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);



/*
const getInfo = async(descripcion) => {
    let cordenadas = await lugar.getLugarLatLng(argv.direccion);
    let clima = await clima.getClima(cordenadas.lat, cordenadas.lng);


    const dir = cordenadas.direccion;
    const temperatura = clima.temp

    return {
        dir,
        temperatura
    }
};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);
*/


//lugar.getLugarLatLng(argv.direccion)
//    .then(console.log);
//'9.99810', lng: '-84.11700'

//clima.getClima(9.99810, -84.11700)
//    .then(console.log)
//.catch(console.log);