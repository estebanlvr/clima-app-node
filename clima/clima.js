const axios = require('axios');
//const { default: Axios } = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=56967a82f2835ecd5f59a482b674dab6&units=metric`);

    return resp.data.main.temp;

}


module.exports = { getClima };