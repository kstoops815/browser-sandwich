"use strict";

const loadVeggies = (onVeggiesLoad, onError) => {
	const veggiesLoader = new XMLHttpRequest();
	veggiesLoader.addEventListener("error", onError);
	veggiesLoader.addEventListener("load", onVeggiesLoad);
	veggiesLoader.open("GET", "../data/veggies.json");
	veggiesLoader.send();
};

module.exports = {loadVeggies};