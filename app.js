var assert = require("assert");

(function(){
	this.cl = function(string){
		console.log(string);
	}
})();

function num1(){
	return 3;
}

function num2(){
	return 4;
}

var add = function(a, b){
	return a() + b();
}

var x = add(num1, num2);

cl(x);

function minus(x, y){
	return x - y;
}

cl(minus(2, 3));