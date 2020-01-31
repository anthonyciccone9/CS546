const head = function head(arr){
	if(Array.isArray(arr) == false || arr == undefined){
		throw "Parameter is not an array!";
	}else if(arr.length == 0){
		throw "Array's size must be greater than 0!";
	}
	return arr[0];
}

const last = function last(arr){
	if(Array.isArray(arr) == false || arr == undefined){
		throw "Parameter is not an array!";
	}else if(arr.length == 0){
		throw "Array's size must be greater than 0!";
	}
	return arr[arr.length - 1];
}

const remove = function remove(arr, index){
	if(Array.isArray(arr) == false || arr == undefined || index == undefined){
		throw "Parameter must be an (arr, index)";
	}else if(arr.length == 0){
		throw "Array's size must be greater than 0!";
	}else if(typeof arr[0] != "number"){
		throw "Array must be of type number!";
	}else if(index > arr.length - 1){
		throw "Index is out of bounds!";
	}
	let removed = arr.splice(index, 1);
	return arr;
}

const range = function range(end, value){
	if(end < 0 || typeof end != "number" || end == undefined){
		throw "Parameter must be an integer that is greater than zero!";
	}

	if(typeof value != "undefined"){
		let ret = [];
		for(let i = 0; i < end; i++){
			ret.push(value);
		}
		return ret;
	}else{
		let ret = [];
		for(let i = 0; i < end; i++){
			ret.push(i);
		}
		return ret;
	}
}

const countElements = function countElements(arr){
	if(Array.isArray(arr) == false || arr == undefined){
		throw "Parameter is not an array!";
	}
	const foo = {};
	for(let i = 0; i < arr.length; i++){
		if(isNaN(foo[arr[i]])){
			foo[arr[i]] = 0;
		}
		foo[arr[i]]++;
	}
	return foo;
}

const isEqual = function isEqual(arrayOne, arrayTwo){
	if(!Array.isArray(arrayOne) || !Array.isArray(arrayTwo) || arrayOne == undefined || arrayTwo == undefined || arrayOne.size != arrayTwo.size){
		throw "Both parameters must be arrays of equal size";
	}
	for(let i = 0; i < arrayOne.length; i++){
		if(arrayOne[i] != arrayTwo[i]){
			return false;
		}
	}
	return true;
}

module.exports = {
	head,
	last,
	remove,
	range,
	countElements,
	isEqual
}
