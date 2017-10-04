"use strict";

console.log("in main.js");

const data = require("./data");
const dom = require("./dom");
const events = require("./events");

data.initializer();
dom.buildDomString();
events.buildFinalSelections();