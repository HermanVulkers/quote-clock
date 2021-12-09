// Location / IP API
fetch("http://ip-api.com/json")
	.then((res) => res.json())
	.then((response) => {
		console.log(response);
		let country = response.country;
		let city = response.city;

		// Location insertion to DOM
		document.getElementById(
			"location"
		).innerHTML = `in ${city}, ${country}`;
	})
	.catch((data, status) => {
		console.log("Request failed");
	});

// Get raw local time
let localTimeRaw = new Date();

// Get clean local time
let localTime = localTimeRaw.toTimeString().slice(0, 5);
console.log(localTime);
// Clean local time insertion to DOM
document.getElementById("clock").innerHTML = `${localTime}`;
// Clock refresh every 10 seconds
$(document).ready(function () {
	function refresh() {
		let localTimeRaw = new Date();
		localTime = localTimeRaw.toTimeString().slice(0, 5);
		document.getElementById("clock").innerHTML = `${localTime}`;

		var div = $("#clock"),
			divHtml = div.html();

		div.html(divHtml);
	}

	setInterval(function () {
		refresh();
	}, 1000); // 10 seconds
});

// Get timezone
let timezone = localTimeRaw.toTimeString().slice(9, 12);
// Timezone insertion to DOM
document.getElementById("timezone").innerHTML = `${timezone}`;

// Welcome message insertion to DOM
let localTimeFirstTwoChars = localTime.slice(0, 2);
console.log(localTimeFirstTwoChars);
if (
	localTimeFirstTwoChars === "05" ||
	"06" ||
	"07" ||
	"08" ||
	"09" ||
	"10" ||
	"11"
) {
	document.getElementById(
		"welcome-message-text"
	).innerHTML = `Good morning, it's`;
} else if (
	localTimeFirstTwoChars === "12" ||
	"13" ||
	"14" ||
	"15" ||
	"16" ||
	"17" ||
	"18"
) {
	document.getElementById(
		"welcome-message-text"
	).innerHTML = `Good afternoon, it's`;
} else {
	document.getElementById(
		"welcome-message-text"
	).innerHTML = `Good evening, it's`;
}

function fetchQuote() {
	fetch("https://programming-quotes-api.herokuapp.com/Quotes/random/")
		.then((response) => response.json())
		.then((data) => {
			let quote = data.en;
			let author = data.author;

			document.getElementById("quote").innerHTML = `${quote}`;
			document.getElementById("author").innerHTML = `${author}`;
		});
}

fetchQuote();
