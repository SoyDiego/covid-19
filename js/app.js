fetch("https://corona.lmao.ninja/all")
	.then((response) => response.json())
	.then((data) => {
		let totalCases = document.getElementById("totalCasesW");
		let recovered = document.getElementById("recoveredW");
		let deaths = document.getElementById("deathsW");
		let activeCases = document.getElementById("activeW");
		let update = document.getElementById("updateW");
		totalCases.innerHTML = data.cases;
		recovered.innerHTML = data.recovered;
		deaths.innerHTML = data.deaths;
		activeCases.innerHTML = data.active;
		update.innerText = `Last updated: ` + new Date(data.updated);
	});

fetch("https://corona.lmao.ninja/countries/argentina")
	.then((response) => response.json())
	.then((data) => {
        let flag = document.getElementById("flag");
        let totalCases = document.getElementById("totalCases");
        let recovered = document.getElementById("recovered");
        let deaths = document.getElementById("deaths");
        let todayCases = document.getElementById("todayCases");
        let todayDeaths = document.getElementById("todayDeaths");
        let activeCases = document.getElementById("active");
        let update = document.getElementById("update");
        flag.setAttribute("src", data.countryInfo.flag)
        totalCases.innerHTML = data.cases;
        recovered.innerHTML = data.recovered;
        deaths.innerHTML = data.deaths;
        todayCases.innerHTML = data.todayCases;
        todayDeaths.innerHTML = data.todayDeaths;
        activeCases.innerHTML = data.active;
        update.innerText= `Last updated: ` + new Date(data.updated);
    });
    
fetch("https://corona.lmao.ninja/countries/spain")
    .then((response) => response.json())
    .then((data) => {
        let flag = document.getElementById("flagES");
        let totalCases = document.getElementById("totalCasesES");
        let recovered = document.getElementById("recoveredES");
        let deaths = document.getElementById("deathsES");
        let todayCases = document.getElementById("todayCasesES");
        let todayDeaths = document.getElementById("todayDeathsES");
        let activeCases = document.getElementById("activeES");
        let update = document.getElementById("updateES");
        flag.setAttribute("src", data.countryInfo.flag);
        totalCases.innerHTML = data.cases;
        recovered.innerHTML = data.recovered;
        deaths.innerHTML = data.deaths;
        todayCases.innerHTML = data.todayCases;
        todayDeaths.innerHTML = data.todayDeaths;
        activeCases.innerHTML = data.active;
        update.innerText = `Last updated: ` + new Date(data.updated);
});
