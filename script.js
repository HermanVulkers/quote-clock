fetch("http://ip-api.com/json")
	.then((res) => res.json())
	.then((response) => {
		console.log(response);
		console.log("Country: ", response.country);
		console.log("City: ", response.city);
		console.log("Timezone: ", response.timezone);
		let localTime = new Date();
		console.log(localTime);
	})
	.catch((data, status) => {
		console.log("Request failed");
	});
