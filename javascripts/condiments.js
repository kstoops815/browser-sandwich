"use strict";

const loadCondiments = (onCondimentsLoad, onError) => {
	const condimentsLoader = new XMLHttpRequest();
	condimentsLoader.addEventListener("error", onError);
	condimentsLoader.addEventListener("load", onCondimentsLoad);
	condimentsLoader.open("GET", "../data/condiments.json");
	condimentsLoader.send();
};

module.exports = {loadCondiments};