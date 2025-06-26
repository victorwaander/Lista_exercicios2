/*Implemente function memoize(fn) que armazene em cache chamadas
anteriores de fn (por argumentos), retornando resultados instantâneos em
repetidas invocações.*/

console.time("fatorialMemoizado");

const fatorialMemo = memoize(function(n) {
    if (n <= 1) return 1;
    return n * fatorialMemo(n - 1);
});

function memoize(fn) {
    let cache = new Map();

    return function(...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

console.log(fatorialMemo(15));
console.timeEnd("fatorialMemoizado");