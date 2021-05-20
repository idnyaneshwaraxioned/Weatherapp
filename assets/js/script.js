const weather = () => {
	const btn = document.querySelector('.btn');

	const weatherApi = () => {
		let inputval = document.querySelector('.userinput').value;

		//fetch weather API data;
		let promise = fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${inputval}&appid=594f7f7f38e834358b7393138c441d0b`)

		promise.then(result => {
			return result.json();
		}).then(resp => {
			let data = resp.list;
			for (let i = 0; i <= data.length - 1; i++) {
				if (i % 8 === 0) {
					renderData(data[i])
				}
			}
		}).catch(err => {
			alert("Weather Data not found.");
		})
		
		//render data in webpage body
		const renderData = item => {
			let container = document.querySelector('.conatiner-list');
			let ulData;
			let city = document.querySelector('.city');
			let convertTemp;
			let iconCode = item.weather[0].icon;

			convertTemp = Math.floor(item.main.temp - 273.15)
			ulData = `
						<li>
								<span>${item.dt_txt.slice(0,-8)}<span>
								<figure>
										<img src="http://openweathermap.org/img/wn/${iconCode}@2x.png" alt="weather">
								</figure>
								<p>${convertTemp}&#8451, ${item.weather[0].main}<p>
						</li>
            `
			container.innerHTML += ulData;
			city.textContent = inputval.toUpperCase();
		}
	}

	btn.addEventListener('click', weatherApi);
}

weather();