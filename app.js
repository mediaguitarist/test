var assert = require("assert");
var Animals = require("./lap");

function cl(x){
	console.log(x);
}

var Mutts = new Animals();

Mutts.lizard().dog().cat();