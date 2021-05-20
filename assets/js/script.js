const weather = () =>{
    const btn = document.querySelector('.btn');

    const weatherApi = ()=>{
        let inputval = document.querySelector('.userinput').value;
		let temp = document.querySelector('.temp');
		let cityname = document.querySelector('.city');
        let weatherImg = document.querySelector('.weatherImg');
        let container = document.querySelector('weater-content');

        let promise = fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${inputval}&appid=594f7f7f38e834358b7393138c441d0b`)

        promise.then(result=>{
            return result.json();
        }).then(resp=>{
            let data = resp.list;
            for(let i=0; i<=data.length-1; i++){
                if(i%8===0){
                console.log(data[i])
                renderData(data[i])
                }
            }
        })

        const renderData = item =>{
            let body = document.querySelector('body');
            let ul = document.createElement('ul');
            let ulData;
            let convertTemp;
            let iconCode = item.weather[0].icon;
            convertTemp = Math.floor(item.main.temp - 273.15)

            console.log(item.weather[0].main)
            ulData += `
                <li>
                    <span>${item.dt_txt.slice(0,-8)}<span>
                    <figure>
                        <img src="http://openweathermap.org/img/wn/${iconCode}@2x.png" alt="weather">
                    </figure>
                    <span>${inputval}<span>
                    <span>${convertTemp}&#8451, ${item.weather[0].main}<span>
                </li>
            ` 
            ul.innerHTML=ulData;
            body.appendChild(ul);
        }
    }

    btn.addEventListener('click',weatherApi);
}

weather();