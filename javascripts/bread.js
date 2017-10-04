"use strict";

const loadBread = (onBreadLoad, onError) => {
	const breadLoader = new XMLHttpRequest();
	breadLoader.addEventListener("load", onBreadLoad);
	breadLoader.addEventListener("error", onError);
	breadLoader.open("GET", "../data/bread.json");
	breadLoader.send();
};

module.exports = {loadBread};