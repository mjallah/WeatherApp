const key = 'fdd1eb0d3ca7914c5d8561fd2844a8c2'

const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q={New Prague}&appid=fdd1eb0d3ca7914c5d8561fd2844a8c'

//fetch(baseURL)
//    .then((data) => { console.log('response', data.json())})
//    .catch((error) => {
//        console.log(error);
//    });

const requestCity = (city) => {
    const baseUrl = 'http://api.openweathermap.org/data/2.5/weather'
    const query = '?q=' + city + '&appid=' + key;

    const response = await fetch(baseURL + query);

    const data = await response.json();
    return data;
}

requestCity('Chicago');