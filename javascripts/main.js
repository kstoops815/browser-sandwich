"use strict";

console.log("in main.js");

const data = require("./data");
const dom = require("./dom");

data.initializer();
dom.buildDomString();
