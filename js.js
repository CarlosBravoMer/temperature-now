const weatherCity = document.querySelector('#weather-city');
const weatherTemp = document.querySelector('#weather-temp');
const weatherError = document.querySelector('#weather-error');
const inputCity = document.querySelector('#city');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8e1155070emshcb335e2b41509f8p17f598jsn561b1c09e6a6',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

inputCity.addEventListener('keyup', () => {
	const city = document.querySelector('#city').value;
	fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, options)
		.then(response => response.json())
		.then(data => {
			if (data.error) {
				weatherError.innerHTML = 'City not found';
				weatherCity.innerHTML = '';
				weatherTemp.innerHTML = '';
			} else {
				const temperature = data.current.temp_c;
				const cityName = data.location.name;
				weatherCity.innerHTML = `${cityName}`;
				weatherTemp.innerHTML = `${temperature}°C`;
				weatherError.innerHTML = '';
			}
		})
		.catch(err => weatherError.innerHTML = 'City not found');
});
