fetch("https://corona.lmao.ninja/countries/argentina")
	.then((response) => response.json())
	.then((data) => {
		console.log(data.cases);
		
	});
