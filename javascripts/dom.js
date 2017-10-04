"use strict";

const data = require("./data");
const bread = require("./bread");
const cheese = require("./cheese");
const meat = require("./meat");
const veggies = require("./veggies");
const condiments = require("./condiments");

const buildDomString = (message, selections) => {

	let name = Object.keys(selections);
	console.log("in builddomstring", name);
	let price = Object.values(selections);
	console.log("price in domstring", price);
	let finalString = "";

	var chooseItem = `<h3>${message}</h3>`;

 	for(var i = 0; i < name.length; i++){
		let domString = "";
		domString +=	`<input type="checkbox" class="checkbox" id="${name[i]}" value="${price[i].toFixed(2)}">${name[i]}</input><br>`;
		finalString += domString;
	}
	writeToDom(chooseItem + finalString);
};

const writeToDom = (items) => {
	console.log("in write to dom");
	document.getElementById("menuItems").innerHTML += items;
};

module.exports = {buildDomString};