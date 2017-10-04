"use strict";

const loadCheese = (onCheeseLoad, onError) => {
	const cheeseLoader = new XMLHttpRequest();
	cheeseLoader.addEventListener("error", onError);
	cheeseLoader.addEventListener("load", onCheeseLoad);
	cheeseLoader.open("GET", "../data/cheese.json");
	cheeseLoader.send();
};

module.exports = {loadCheese};