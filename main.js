function multByFactor(value, multiplier = 2) {
	return value * multiplier;
};

let u = (value, multiplier) => value * multiplier;

(function (value = 10, multiplier = 2) {
	console.log(value * multiplier);
})();

function hello {
	console.log("HELLO");
};