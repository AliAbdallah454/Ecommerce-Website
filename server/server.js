const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://moviesdatabase.p.rapidapi.com/titles/series/%7BseriesId%7D',
  headers: {
    'X-RapidAPI-Key': '78e4916049msh6f13687fa0fe033p1452a8jsne1a76e2ed711',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
};

const g = async () => {

    try{
        const response = await axios.request(options);
        console.log(response.data);
    }
    catch (error) {
        console.error(error);
    }

}

g()