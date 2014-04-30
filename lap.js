function cl(x){
	console.log(x);
}

function Animals(){}

Animals.prototype.cat = function(){
	cl("cat");
	return this;
}

Animals.prototype.dog = function(){
	cl("dog");
	return this;
}

Animals.prototype.lizard = function(){
	cl("lizard");
	return this;
}

module.exports = Animals;