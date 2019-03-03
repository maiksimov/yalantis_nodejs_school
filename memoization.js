
function mul() {
	return [].reduce.call(arguments, function(a,b){ return a * b;});
}

function sum() {
	return [].reduce.call(arguments, function(a,b){ return a + b;});
}

function memoization(func) {
	memoization.cache = memoization.cache === undefined ? {} : memoization.cache;
	return function () {
		var key = [].join.call(arguments, func.name);
		if(!(key in memoization.cache)){
			memoization.cache[key] = func.apply(this, arguments);
		}
		return memoization.cache[key];
	};
}

console.log( memoization(sum)(1, 2, 3, 2) );
console.log( memoization(sum)(1, 2, 3, 2) );
console.log( memoization(sum)(1, 2, 3, 2) );
console.log( memoization(sum)(2, 4) );
console.log( memoization(mul)(3, 3) );
console.log( memoization(mul)(3, 3) );
