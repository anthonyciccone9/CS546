const extend = function extend(...args){
	const temp = {};
	if(args.length < 2){
		throw "There must be at least two arguments!";
	}
	for(let i = 0; i < args.length; i++){
		if(typeof args[i] != "object" || args[i] == undefined){
			throw "There is an undefined argument!";
		}else{
			for(item in args[i]){
				if(!temp.hasOwnProperty(item)){
					temp[item] = args[i][item];
				}
			}
		}
	}
	return temp;
}

const smush = function smush(...args){
	if(args.length < 2){
		throw "There must be at least two arguments!";
	}
	const temp = {};
	for(let i = 0; i < args.length; i++){
		if(typeof args[i] != "object" || args[i] == undefined){
			throw "There is an undefined argument!";
		}else{
			for(item in args[i]){
				temp[item] = args[i][item];
			}
		}
	}
	return temp;
}

const mapValues = function mapValues(object, func){
	if(object == undefined || func == undefined || typeof(object) != 'object'){
		throw "Parameters must be an object and a function.!";
	}
	const temp = {};
	for(value in object){
		temp[value] = func(object[value]);
	}
	return temp;
}

console.log(mapValues(1234,1234));

module.exports = {
	extend,
	smush,
	mapValues
}
