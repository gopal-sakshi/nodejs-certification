import axios from 'axios';
(async function makeAxiosCall() {

    // APPROACH I  
    var joke23 = await axios.get('https://official-joke-api.appspot.com/jokes/programming/random', {
        headers: {            // default values of axios is gzip... so, use this header... otherwise, you get garbage values
            'Accept-Encoding': 'application/json'
        }
    });
    console.log(joke23.data);


    // // APPROACH II
    var joke24 = await axios({
      method: 'get',
      url: 'https://official-joke-api.appspot.com/random_joke',
      headers: { 'Accept-Encoding': 'application/json'}    
    });
    console.log(joke24.data);

})();

