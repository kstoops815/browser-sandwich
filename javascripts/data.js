"use strict";

const meat = require("./meat");
const bread = require("./bread");
const cheese = require("./cheese");
const veggies = require("./veggies");
const condiments = require("./condiments");
const dom = require("./dom");

const onError = () => {
	console.log("You broke it.");
};

let breadArray = [];

const breadSelections = function() {
	let breadArray = JSON.parse(this.responseText).bread;
	console.log("bread array", breadArray);
	dom.buildDomString("Bread:", breadArray);
	meat.loadMeat(meatSelections, onError);
};

const meatSelections = function() {
	let meatArray = JSON.parse(this.responseText).meat;
	dom.buildDomString("Meat:", meatArray);
	cheese.loadCheese(cheeseSelections, onError);
};

const cheeseSelections = function() {
	let cheeseArray = JSON.parse(this.responseText).cheese;
	dom.buildDomString("Cheese:", cheeseArray);
	veggies.loadVeggies(veggieSelections, onError);
};

const veggieSelections = function() {
	let veggieArray = JSON.parse(this.responseText).veggies;
	dom.buildDomString("Veggies:", veggieArray);
	condiments.loadCondiments(condimentSelections, onError);
};

const condimentSelections = function() {
	let condimentArray = JSON.parse(this.responseText).condiments;
	dom.buildDomString("Condiments:", condimentArray);
};

const initializer = () => {
	bread.loadBread(breadSelections, onError);
};

module.exports = {initializer};

// let categories = ["Bread:", "Meat:", "Cheese:", "Veggies:", "Condiments:"];
// let finalArray = [];

// const breadSelections = function() {
// 	let breadArray = JSON.parse(this.responseText).bread;
// 	// console.log("bread array", breadArray);
// 	// dom.buildDomString("Bread:", breadArray);
// 	meat.loadMeat(meatSelections, onError);
// 	finalArray.push(breadArray);
// };

// const meatSelections = function() {
// 	let meatArray = JSON.parse(this.responseText).meat;
// 	// dom.buildDomString("Meat:", meatArray);
// 	cheese.loadCheese(cheeseSelections, onError);
// 	finalArray.push(meatArray);
// };

// const cheeseSelections = function() {
// 	let cheeseArray = JSON.parse(this.responseText).cheese;
// 	//dom.buildDomString("Cheese:", cheeseArray);
// 	veggies.loadVeggies(veggieSelections, onError);
// 	finalArray.push(cheeseArray);
// };

// const veggieSelections = function() {
// 	let veggieArray = JSON.parse(this.responseText).veggies;
// 	//dom.buildDomString("Veggies:", veggieArray);
// 	condiments.loadCondiments(condimentSelections, onError);
// 	finalArray.push(veggieArray);
// };

// const condimentSelections = function() {
// 	let condimentArray = JSON.parse(this.responseText).condiments;
// 	//dom.buildDomString("Condiments:", condimentArray);
// 	bread.loadBread(breadSelections, onError);
// 	finalArray.push(condimentArray);
// };

// const printFinalArrayToDom = () => {
// 	dom.buildDomString(categories, finalArray);
// } 

// const initializer = () => {
// 	dom.buildDomString(categories, finalArray);
// };

// module.exports = {initializer};