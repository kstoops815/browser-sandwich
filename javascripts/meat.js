"use strict";

const loadMeat = (onMeatLoad, onError) => {
	const meatLoader = new XMLHttpRequest();
	meatLoader.addEventListener("error", onError);
	meatLoader.addEventListener("load", onMeatLoad);
	meatLoader.open("GET", "../data/meat.json");
	meatLoader.send();
};

module.exports = {loadMeat};