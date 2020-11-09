const searchForm = document.querySelector('.search-location');
const cityValue = document.querySelector('.search-location input');
const cityName = document.querySelector('.city-name p');
const cardBody = document.querySelecto('.card-body');

constspitOutCelcius = (kelvin) => {
    celcius = Math.round(kelvin - 273.15);
    return celcius;
}
const isDayTime = () => {
    if (icon.includes('d')) {
        return true;
    } else {
        return false;
    }
}
updateWeatherApp = (city) => {
    console.log(city);
    cityName.textContent = city.name;
    cardBody.innerHTML = '
        < div class="card-mid row" >
                    <div class="col-8 text-center temp">
                        <span>${spitOutCelcius(city.main.temp)}&deg;C</span>
                    </div>
                    <div class="col-4 condition-temp">
                        <p class="condition">${city.weather[0].description}</p>
                        <p class="high">${spitOutCelcius(city.main.temp_max)}&deg;C</p>
                        <p class="low">${spitOutCelcius(city.main.temp_min)}&deg;C</p>
                    </div>
                </div >

                <div class="icon-container card shadow mx-auto">
                    <img src="icons/cloud.svg" alt="cloud" class="resize1" />
                </div>
                <div class="card-bottom px-5 py-4 row">
                    <div class="col text-center">
                        <p>30&deg;C</p>
                        <span>Feels Like</span>
                    </div>
                    <div class="col text-center">
                        <p>${spitOutCelcius(city.main.feels_like)}</p>
                        <span>${city.main.humidity}%</span>
                    </div>
                </div>
    ' 
    if (isDay)
}

searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const citySearched = cityValue.value.trim();
    console.log(citySearched);
    searchForm.requestFullscreen();

    requestCity(citySearched)
        .then((data) => {
            updateWeatherApp(data);
        })
        .catch((error) => { console.log(error) })
})