let integers = function() {
    return {
        from: 0,
        [Symbol.iterator]() {
            return this;
        },
        next() {

            if (this.current === undefined) {
                this.current = this.from;
            }

            return { done: false, value: this.current++};
        }
    }
};

function take(max, iterator) {
    return {
        next() {
            let next = iterator.next();
            return next.value <= max ? next : { done: true }
        },
        [Symbol.iterator]() {
            return this;
        }
    }
}

const iter = integers();

for (let i of take(3, iter)) {
    console.log(i);
}
