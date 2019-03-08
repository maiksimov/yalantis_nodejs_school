function mul(...args) {
    return args.reduce((a,b) => a *= b);
}

function sum(...args) {
    return args.reduce((a,b) => a += b, 0);
}

function memoization(func) {
    memoization.cache = memoization.cache === undefined ? new Map() : memoization.cache;
    return function (...args) {
        let key = func.name + ':' + args;
        if(!(memoization.cache.has(key))){
            memoization.cache.set(key, func.apply(this, args));
        }
        return memoization.cache.get(key);
    };
}

console.log( memoization(sum)(1, 2, 3, 2) );
console.log( memoization(sum)(1, 2, 3, 2) );
console.log( memoization(sum)(1, 2, 3, 2) );
console.log( memoization(sum)(2, 4) );
console.log( memoization(mul)(3, 3) );
console.log( memoization(mul)(3, 3) );
console.log( memoization.cache );