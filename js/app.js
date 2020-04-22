const init = (async () => {
	const divWorld = document.getElementById("divWorld");
	const divArgentina = document.getElementById("divArgentina");
	const divSpain = document.getElementById("divSpain");
	const loader = document.getElementById("loader");


	//function to display the info 
	const showInfo = (data, country) => {
		let info = ` 
			<div class="row no-gutters">
                            <div class="col-md-3">
                                <div class="card-body bg-primary">
                                    <h5 class="card-title">Total Cases</h5>
                                    <p id="totalCasesW" class="card-text">${
																			data.cases
																		}</p>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card-body bg-success">
                                    <h5 class="card-title">Recovered</h5>
                                    <p id="recoveredW" class="card-text">${
																			data.recovered
																		}</p>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card-body bg-danger">
                                    <h5 class="card-title">Deaths</h5>
                                    <p id="deathsW" class="card-text">${
																			data.deaths
																		}</p>
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="card-body bg-secondary">
                                    <h5 class="card-title">Active</h5>
                                    <p id="activeW" class="card-text">${
																			data.active
																		}</p>
                                </div>
                            </div>

                            <div class="col-xl-12 text-center">
								<p class="card-text"><small id="updateW" class="text-muted">
									Last updated: ${moment(data.updated).fromNow()}
								</small></p>
                            </div>
						</div>`;

		if (country === "World") {
			divWorld.innerHTML = info;
		} else if (country === "Argentina") {
			divArgentina.innerHTML = info;
		} else {
			divSpain.innerHTML = info;
		}
	};

	await fetch("https://corona.lmao.ninja/v2/all")
		.then((response) => response.json())
		.then((data) => {
			showInfo(data, "World");
		});

	await fetch("https://corona.lmao.ninja/v2/countries/argentina")
		.then((response) => response.json())
		.then((data) => {
			showInfo(data, "Argentina");
		});

	await fetch("https://corona.lmao.ninja/v2/countries/spain")
		.then((response) => response.json())
		.then((data) => {
			showInfo(data, "Spain");
		});

		//Hide loader
	loader.style.display = "none";
})();
