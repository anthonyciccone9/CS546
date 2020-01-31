const capitalize = function capitalize(str){
	if(typeof str != "string" || str == undefined){
		throw "Parameter must be of type String!";
	}
	let ret = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
	return ret;
}

const repeat = function repeat(str, num){
	if(typeof str != "string"){
		throw "First parameter must be of type String!";
	}
	if(typeof num != "number" || num < 0 || num == undefined){
		throw "Second parameter must be a positive integer!";
	}
	let inc = str;
	for(let i = 0; i < num - 1; i++){
		str += inc;
	}
	return str;
}

const countChars = function countChars(str){
	if(typeof str != "string" || str == undefined){
		throw "Parameter must be of type 'String'!";
	}
	const foo = {};
	for(let i = 0; i < str.length; i++){
		if(isNaN(foo[str.charAt(i)])){
			foo[str.charAt(i)] = 0;
		}
		foo[str.charAt(i)]++;
	}
	return foo;
}

console.log(countChars("foobarFoobar"));

module.exports = {
	capitalize,
	repeat,
	countChars
}
