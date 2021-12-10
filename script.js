// Location / IP API
fetch("http://ip-api.com/json")
	.then((res) => res.json())
	.then((response) => {
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

fetch("http://worldtimeapi.org/api/ip")
	.then((res) => res.json())
	.then((response) => {
		let timezone = response.timezone;
		let dayOfWeek = response.day_of_week;
		let dayOfYear = response.day_of_year;
		let weekNumber = response.week_number;
		let timezoneAbbreviated = response.abbreviation;

		// Stat & timezone insertion to DOM
		document.getElementById(
			"timezone-slider-content"
		).innerHTML = `${timezone}`;

		document.getElementById(
			"dayofweek-slider-content"
		).innerHTML = `${dayOfWeek}`;

		document.getElementById(
			"dayofyear-slider-content"
		).innerHTML = `${dayOfYear}`;

		document.getElementById(
			"weeknumber-slider-content"
		).innerHTML = `${weekNumber}`;

		document.getElementById(
			"timezone"
		).innerHTML = `${timezoneAbbreviated}`;
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

// Welcome message insertion to DOM
let localTimeFirstTwoChars = localTime.slice(0, 2);
console.log(localTimeFirstTwoChars);
if (
	localTimeFirstTwoChars === "05" ||
	localTimeFirstTwoChars === "06" ||
	localTimeFirstTwoChars === "07" ||
	localTimeFirstTwoChars === "08" ||
	localTimeFirstTwoChars === "09" ||
	localTimeFirstTwoChars === "10" ||
	localTimeFirstTwoChars === "11"
) {
	document.getElementById("welcome-message-text").innerHTML = `Good morning`;
} else if (
	localTimeFirstTwoChars === "12" ||
	localTimeFirstTwoChars === "13" ||
	localTimeFirstTwoChars === "14" ||
	localTimeFirstTwoChars === "15" ||
	localTimeFirstTwoChars === "16" ||
	localTimeFirstTwoChars === "17"
) {
	document.getElementById(
		"welcome-message-text"
	).innerHTML = `Good afternoon`;
} else {
	document.getElementById("welcome-message-text").innerHTML = `Good evening`;
	document.body.style.backgroundImage =
		"url('assets/desktop/bg-image-nighttime.jpg')";
	$("#welcome-message-icon").attr("src", "assets/desktop/icon-moon.svg");
}

function fetchQuote() {
	fetch("https://programming-quotes-api.herokuapp.com/Quotes/random/")
		.then((response) => response.json())
		.then((data) => {
			let quote = data.en;
			let author = data.author;

			document.getElementById("quote").innerHTML = `"${quote}"`;
			document.getElementById("author").innerHTML = `${author}`;
		});
}

fetchQuote();

$("#toggle, #toggle-small-screen, .slider").click(function () {
	$(".slider").toggleClass("close");
	$("#container-main").toggleClass("slide-up");
});

$("#toggle").click(function () {
	$(".arrow").toggleClass("rotate");
});
