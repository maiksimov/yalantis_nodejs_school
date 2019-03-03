
function sum() {
	return [].reduce.call(arguments, function(a,b){ return a + b;});
}

console.log( sum(2, 2) );
console.log( sum(1, 2, 3) );
