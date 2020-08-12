const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);
    //console.log(encodedUrl);


    const instance = axios.create({
        baseURL: `http://geocode.xyz/?locate=${ encodedUrl }&json=1`
            //baseURL: `http://geocode.xyz/?locate=Madrid&json=1`
            //,headers:

    });


    const resp = await instance.get();

    if (resp.data.alt.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.alt.loc;
    const direccion = resp.data.alt.loc.city;

    const lat = resp.data.alt.loc.latt;
    const lng = resp.data.alt.loc.longt;



    /*  .then(resp => {
          // handle success
          console.log(resp.data.alt.loc);
      })
      .catch(err => {
          // handle error
          console.log(err);
      });*/

    return {
        direccion,
        lat,
        lng

    }
}

module.exports = { getLugarLatLng }



// Make a request for a user with a given ID
/*axios.get('http://geocode.xyz/?locate=Heredia&json=1')
    .then(function(response) {
        // handle success
        console.log(response);
    })
    .catch(function(error) {
        // handle error
        console.log(error);
    })
    .finally(function() {
        // always executed
    });*/


/*
const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });*/